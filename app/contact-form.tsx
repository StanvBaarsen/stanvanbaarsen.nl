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
		<div className="relative rounded-xl border-0 bg-white/90 backdrop-blur-sm p-6 shadow-lg dark:bg-slate-900/90">
			<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl opacity-20 blur-sm group-hover:opacity-30"></div>
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
								<label htmlFor="name" className="text-sm font-medium mb-1 pl-1 text-blue-600/70 dark:text-blue-400/90">
									Name
								</label>
								<input
									id="name"
									name="name"
									required
									disabled={isSubmitting}
									className="flex h-10 w-full rounded-md border border-input/30 bg-white/60 dark:bg-slate-800/70 px-3 py-1.5 text-base transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-transparent focus:outline-0 focus:ring-1.5 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:bg-white/95 dark:focus:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Your name"
									style={{
										WebkitTapHighlightColor: 'transparent',
										outline: 'none',
										WebkitAppearance: 'none',
										appearance: 'none',
										boxShadow: 'none'
									}}
								/>
								{state.errors?.name?.length ? <p className="text-xs text-red-500 mt-0.5 ml-1">{state.errors.name[0]}</p> : null}
							</div>
							<div className="grid gap-1">
								<label htmlFor="email" className="text-sm font-medium mb-1 pl-1 text-blue-600/70 dark:text-blue-400/90">
									Email address
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									disabled={isSubmitting}
									className="flex h-10 w-full rounded-md border border-input/30 bg-white/60 dark:bg-slate-800/70 px-3 py-1.5 text-base transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-transparent focus:outline-0 focus:ring-1.5 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:bg-white/95 dark:focus:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="email@example.com"
									style={{
										WebkitTapHighlightColor: 'transparent',
										outline: 'none',
										WebkitAppearance: 'none',
										appearance: 'none',
										boxShadow: 'none'
									}}
								/>
								{state.errors?.email?.length ? <p className="text-xs text-red-500 mt-0.5 ml-1">{state.errors.email[0]}</p> : null}
							</div>
							<div className="grid gap-1">
								<label htmlFor="message" className="text-sm font-medium mb-1 pl-1 text-blue-600/70 dark:text-blue-400/90">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									required
									disabled={isSubmitting}
									className="flex min-h-[140px] w-full rounded-md border border-input/30 bg-white/60 dark:bg-slate-800/70 px-3 py-2 text-base transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-transparent focus:outline-0 focus:ring-1.5 focus:ring-blue-500/50 dark:focus:ring-blue-400/50 focus:bg-white/95 dark:focus:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
									placeholder="Your message"
									style={{
										WebkitTapHighlightColor: 'transparent',
										outline: 'none',
										WebkitAppearance: 'none',
										appearance: 'none',
										boxShadow: 'none'
									}}
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

						<Button
							type="submit"
							className="mt-6 relative overflow-hidden w-full h-11 bg-gradient-to-r from-blue-500 to-teal-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl hover:scale-[1.01] group btn-gradient-hover btn-pulse rounded-lg font-medium"
							disabled={isSubmitting}
						>
							<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
							<span className="relative flex items-center justify-center gap-2">
								{isSubmitting ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" />
										Sending...
									</>
								) : (
									<>
										<Send className="h-4 w-4" />
										Send Message
									</>
								)}
							</span>
						</Button>
					</form>
				)}
			</div>
		</div>
	)
}
