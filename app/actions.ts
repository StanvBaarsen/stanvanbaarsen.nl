"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(prevState: any, formData: FormData) {
  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  })

  // Return early if form validation fails
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Form validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // In a real application, you would send an email or store in a database
    // For demonstration, we'll just simulate a successful submission

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success response
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
