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
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const validation = formSchema.safeParse(body);

    if (!validation.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          errors: validation.error.flatten().fieldErrors 
        }),
      };
    }

    const { name, email, message } = validation.data;

    await resend.emails.send({
      from: "AI Plan Contactformulier <aiplan@stanvanbaarsen.nl>",
      to: process.env.AIPLAN_CONTACT_EMAIL!,
      replyTo: email,
      subject: `[aiplan.nl] Contactformulier ingevuld door ${name}`,
      html: `
        <div>
          <h1>Nieuw bericht van ${name}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Bericht:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Internal Server Error" }),
    };
  }
};
