"use client"

import type React from "react"
import { useState, useActionState, startTransition } from "react"
import { submitContactForm } from "./actions"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

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
    <div className="relative rounded-lg border-0 bg-white p-6 shadow-sm dark:bg-slate-900">
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
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium leading-none">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              disabled={isSubmitting}
              className={`flex h-10 w-full rounded-md border ${
                state.errors?.name?.length ? "border-red-500" : "border-input"
              } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
              placeholder="Your name"
            />
            {state.errors?.name?.length ? <p className="text-xs text-red-500">{state.errors.name[0]}</p> : null}
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isSubmitting}
              className={`flex h-10 w-full rounded-md border ${
                state.errors?.email?.length ? "border-red-500" : "border-input"
              } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
              placeholder="Your email"
            />
            {state.errors?.email?.length ? <p className="text-xs text-red-500">{state.errors.email[0]}</p> : null}
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isSubmitting}
              className={`flex min-h-[120px] w-full rounded-md border ${
                state.errors?.message?.length ? "border-red-500" : "border-input"
              } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
              placeholder="Your message"
            />
            {state.errors?.message?.length ? <p className="text-xs text-red-500">{state.errors.message[0]}</p> : null}
          </div>

          {!state.success && state.message && (
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-500 dark:text-red-400" />
                <p className="text-sm text-red-700 dark:text-red-300">{state.message}</p>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="relative overflow-hidden w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
            disabled={isSubmitting}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
            <span className="relative flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </span>
          </Button>
        </form>
      )}
    </div>
  )
}
