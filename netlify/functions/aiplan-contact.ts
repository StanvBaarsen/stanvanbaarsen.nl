import { Handler } from "@netlify/functions";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	message: z.string().min(10),
});

export const handler: Handler = async (event) => {
	// Handle CORS, allow specific origins
	const allowedOrigins = [
		"https://aiplan.nl",
		"https://www.aiplan.nl",
		"http://localhost:8080",
		"http://localhost:3000"
	];
	const origin = event.headers.origin || event.headers.Origin || "";
	const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

	const headers = {
		"Access-Control-Allow-Origin": allowOrigin,
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "POST, OPTIONS",
	};

	if (event.httpMethod === "OPTIONS") {
		return { statusCode: 200, headers, body: "" };
	}

	if (event.httpMethod !== "POST") {
		return { statusCode: 405, headers, body: "Method Not Allowed" };
	}

	try {
		const body = JSON.parse(event.body || "{}");
		const validation = formSchema.safeParse(body);

		if (!validation.success) {
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({
					success: false,
					errors: validation.error.flatten().fieldErrors
				}),
			};
		}

		const { name, email, message } = validation.data;

		const response = await resend.emails.send({
			from: "AI Plan Contactformulier <aiplan@stanvanbaarsen.nl>",
			to: process.env.AIPLAN_CONTACT_EMAIL!,
			replyTo: email,
			subject: `[aiplan.nl] Contactformulier ingevuld door ${name}`,
			html: `
        <div>
          <h1>Nieuw bericht van ${name} vanaf het aiplan.nl contactformulier</h1>
          <p><strong>E-mailadres:</strong> ${email}</p>
          <p><strong>Bericht:</strong></p>
          <p>${message}</p>
        </div>
      `,
		});

		if(response.error) {
			throw new Error(`Email sending failed: ${response.error}`);
		}

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ success: true, message: "Email sent successfully" }),
		};
	} catch (error) {
		console.error("Email error:", error);
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ success: false, message: "Internal Server Error" }),
		};
	}
};