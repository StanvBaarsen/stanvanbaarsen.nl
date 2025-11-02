"use server"

import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Please enter a valid email address." }),
	message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(prevState: any, formData: FormData) {
	const validatedFields = formSchema.safeParse(formData)

	if (!validatedFields.success) {
		return {
			success: false,
			message: "Form validation failed. Please check your inputs.",
			errors: validatedFields.error.flatten().fieldErrors,
		}
	}

	try {
		const { name, email, message } = validatedFields.data

		await resend.emails.send({
			from: "Contactformulier stanvanbaarsen.nl <contactform@stanvanbaarsen.nl>",
			to: process.env.CONTACT_EMAIL!,
			replyTo: email,
			subject: `[stanvanbaarsen.nl] Contactformulier ingevuld door ${name}`,
			html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>stanvanbaarsen.nl: Contactformulier ingevuld door ${name}</title>
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .email-container {
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                background: linear-gradient(135deg, #3b82f6, #0ea5e9, #14b8a6);
                color: white;
                padding: 20px;
                text-align: center;
              }
              .email-header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
              }
              .email-body {
                background-color: #ffffff;
                padding: 25px;
                border: 1px solid #e5e7eb;
              }
              .info-item {
                margin-bottom: 15px;
              }
              .info-label {
                font-weight: 600;
                color: #4b5563;
                display: block;
                margin-bottom: 4px;
              }
              .info-value {
                background-color: #f9fafb;
                padding: 10px;
                border-radius: 6px;
                border-left: 3px solid #3b82f6;
              }
              .message-box {
                background-color: #f9fafb;
                padding: 15px;
                border-radius: 6px;
                border-left: 3px solid #3b82f6;
                white-space: pre-line;
              }
              .email-footer {
                background-color: #f9fafb;
                padding: 15px;
                text-align: center;
                font-size: 14px;
                color: #6b7280;
                border-top: 1px solid #e5e7eb;
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <div class="email-header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="email-body">
                <div class="info-item">
                  <span class="info-label">Name:</span>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-item">
                  <span class="info-label">Email:</span>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-item">
                  <span class="info-label">Message:</span>
                  <div class="message-box">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
		})

		return {
			success: true,
			message: "Thank you for your message! I'll get back to you soon.",
		}
	} catch (error) {
		console.error("Failed to send email:", error)
		return {
			success: false,
			message: "Something went wrong. Please try again later.",
		}
	}
}
