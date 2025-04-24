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
			from: "Contact Form <contactform@stanvanbaarsen.nl>",
			to: process.env.CONTACT_EMAIL!,
			subject: `New Contact Form Submission from ${name}`,
			html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
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
