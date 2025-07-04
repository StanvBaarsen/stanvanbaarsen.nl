"use client"

import type React from "react"
import { useState, useActionState, startTransition } from "react"
import { submitContactForm } from "./actions"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react"

const initialState = {
	success: false,
	message: "",
	errors: {
		name: [],
		email: [],
		message: [],
	},
}

export default function ContactForm() {
	const [state, formAction] = useActionState(submitContactForm, initialState)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		const formData = new FormData(e.currentTarget)
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			message: formData.get("message") as string,
		}

		startTransition(() => {
			formAction(data)
			setIsSubmitting(false)
		})
	}

	return (
		<div className="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 p-6 shadow-lg">
			<div className="relative z-10">
				<h3 className="mb-4 text-xl font-bold">Send a Message</h3>

				{state.success ? (
					<div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
						<div className="flex items-center gap-3">
							<CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
							<p className="text-green-700 dark:text-green-300">{state.message}</p>
						</div>
					</div>
				) : (
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div className="space-y-5">
							<div className="grid gap-1">
								<label htmlFor="name" className="text-sm font-medium mb-1 pl-1 text-gray-700 dark:text-gray-300">
									Name
								</label>
								<input
									id="name"
									name="name"
									required
									disabled={isSubmitting}
									className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 px-3 py-1.5 text-base transition-colors placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Your name"
								/>
								{state.errors?.name?.length ? <p className="text-xs text-red-500 mt-0.5 ml-1">{state.errors.name[0]}</p> : null}
							</div>
							<div className="grid gap-1">
								<label htmlFor="email" className="text-sm font-medium mb-1 pl-1 text-gray-700 dark:text-gray-300">
									Email address
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									disabled={isSubmitting}
									className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 px-3 py-1.5 text-base transition-colors placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="email@example.com"
								/>
								{state.errors?.email?.length ? <p className="text-xs text-red-500 mt-0.5 ml-1">{state.errors.email[0]}</p> : null}
							</div>
							<div className="grid gap-1">
								<label htmlFor="message" className="text-sm font-medium mb-1 pl-1 text-gray-700 dark:text-gray-300">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									required
									disabled={isSubmitting}
									className="flex min-h-[140px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 px-3 py-2 text-base transition-colors placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Your message"
								/>
								{state.errors?.message?.length ? <p className="text-xs text-red-500 mt-0.5 ml-1">{state.errors.message[0]}</p> : null}
							</div>
						</div>

						{!state.success && state.message && (
							<div className="mt-5 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
								<div className="flex items-center gap-2">
									<AlertCircle className="h-4 w-4 text-red-500 dark:text-red-400" />
									<p className="text-sm text-red-700 dark:text-red-300">{state.message}</p>
								</div>
							</div>
						)}

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</button>
					</form>
				)}
			</div>
		</div>
	)
}
