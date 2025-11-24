import { Handler } from "@netlify/functions";
import { z } from "zod";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);
const FEEDBACK_SPREADSHEET_ID = '123cVxm5z8bI_mf4rT1dHS6NJX7brREFWSH5eTbl-JYg';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const formSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	message: z.string().min(10),
	reason: z.string().optional(),
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

		const { name, email, message, reason: rawReason } = validation.data;
		const reason = (rawReason || "").toLowerCase();

		let recipients: string[] = [];
		let emailBodyExtra = "";

		const defaultEmails = (process.env.AIPLAN_CONTACT_EMAIL || "").split(",").map(e => e.trim()).filter(Boolean);
		const persEmails = (process.env.AIPLAN_PERSVERZOEKEN_EMAIL || "").split(",").map(e => e.trim()).filter(Boolean);
		const feedbackEmails = (process.env.AIPLAN_DELTAPLAN_FEEDBACK_EMAIL || "").split(",").map(e => e.trim()).filter(Boolean);

		if (reason.includes("pers")) {
			recipients = persEmails.length > 0 ? persEmails : defaultEmails;
			emailBodyExtra = "<p><strong>Let op:</strong> Dit is een persverzoek.</p>";
		} else if (reason.includes("feedback")) {
			recipients = feedbackEmails.length > 0 ? feedbackEmails : defaultEmails;
			
			try {
				const auth = new google.auth.GoogleAuth({
					credentials: {
						client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
						private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
						project_id: process.env.GOOGLE_PROJECT_ID,
					},
					scopes: SCOPES,
				});

				const sheets = google.sheets({ version: 'v4', auth });

				await sheets.spreadsheets.values.append({
					spreadsheetId: FEEDBACK_SPREADSHEET_ID,
					range: 'Sheet1!A:C',
					valueInputOption: 'USER_ENTERED',
					requestBody: {
						values: [
							[name, email, message]
						],
					},
				});
				emailBodyExtra = `<p>Nieuwe feedback toegevoegd aan de sheet: <a href="https://docs.google.com/spreadsheets/d/${FEEDBACK_SPREADSHEET_ID}">Google Sheet</a></p>`;
			} catch (error) {
				console.error("Sheet error:", error);
				emailBodyExtra = `<p style="color: red;">Fout bij toevoegen aan Google Sheet: ${error}</p>`;
			}
		} else {
			recipients = defaultEmails;
		}

		if (recipients.length === 0) {
			console.warn("No recipients configured.");
		}

		await resend.emails.send({
			from: "AI Plan Contactformulier <aiplan@stanvanbaarsen.nl>",
			to: recipients,
			replyTo: email,
			subject: `[aiplan.nl] Contactformulier: ${rawReason || "Algemeen"} - ${name}`,
			html: `
				<!DOCTYPE html>
				<html>
				<head>
					<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
					<style>
						body { font-family: 'Inter', sans-serif; color: #0f172a; line-height: 1.6; background-color: #f8fafc; margin: 0; padding: 0; }
						.container { max-width: 600px; margin: 40px auto; background: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
						h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 24px; font-size: 24px; letter-spacing: -0.02em; }
						p { margin-bottom: 16px; font-size: 16px; }
						strong { font-weight: 600; color: #0f172a; }
						.meta { background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 24px; }
						.meta p { margin-bottom: 8px; }
						.meta p:last-child { margin-bottom: 0; }
						.message-box { border-left: 4px solid #3b82f6; padding-left: 16px; margin: 24px 0; }
						.footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
						a { color: #2563eb; text-decoration: underline; }
					</style>
				</head>
				<body>
					<div class="container">
						<h1>Nieuw bericht van ${name}</h1>
						
						<div class="meta">
							<p><strong>Reden:</strong> ${rawReason || "Niet opgegeven"}</p>
							<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
						</div>

						<p><strong>Bericht:</strong></p>
						<div class="message-box">
							<p>${message.replace(/\n/g, '<br>')}</p>
						</div>
						
						${emailBodyExtra}
						
						<div class="footer">
							<p>Deze e-mail is verzonden aan: ${recipients.join(", ")}</p>
						</div>
					</div>
				</body>
				</html>
			`,
		});

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