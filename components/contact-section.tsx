"use client"

import { Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/app/contact-form"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-32"
    >
      <div className="container mx-auto relative z-10 px-4 md:px-6 w-full">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-cyan-800 dark:from-cyan-900/50 dark:to-blue-900/50 dark:text-cyan-300 shadow-sm">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-slide-up bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">Let's connect!</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="animate-slide-up delay-200">
            <p className="mb-6 text-lg transition-colors duration-300">
              Interested in working together or have a question? Feel free to reach out through any of the channels
              below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Mail className="h-5 w-5" />
                </div>
                <Link
                  href="mailto:stanvanbaarsen@hotmail.com"
                  className="transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                >
                  stanvanbaarsen@hotmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Linkedin className="h-5 w-5" />
                </div>
                <Link
                  href="https://linkedin.com/in/stan-van-baarsen"
                  className="transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/stan-van-baarsen
                </Link>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Github className="h-5 w-5" />
                </div>
                <Link
                  href="https://github.com/stanvbaarsen"
                  className="transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/stanvbaarsen
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center animate-slide-up delay-300">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 opacity-70 blur-sm animate-pulse"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 