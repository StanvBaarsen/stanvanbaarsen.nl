"use client"

import { Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/app/contact-form"
import { useEffect, useRef } from "react"

export function ContactSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0")
          const animationType = (entry.target as HTMLElement).dataset.animationType
          if (animationType === "titleSlideUp") {
            entry.target.classList.add("animate-slideInFromBottom") // Using new 0.7s animation
          } else if (animationType === "slideInFromLeft") {
            entry.target.classList.add("animate-slideInFromLeft")
          } else if (animationType === "slideInFromRight") {
            entry.target.classList.add("animate-slideInFromRight")
          }
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elementsToObserve = [titleRef.current, leftColRef.current, rightColRef.current]
    
    elementsToObserve.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => {
      elementsToObserve.forEach(el => {
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-8 w-full"
    >
      <div className="container mx-auto relative z-10 px-4 md:px-6 max-w-[1280px]">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 ref={titleRef} data-animation-type="titleSlideUp" className="opacity-0 text-3xl font-bold tracking-tight md:text-4xl text-blue-600 dark:text-blue-400">Let's connect!</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column: Text and Links */}
          <div ref={leftColRef} data-animation-type="slideInFromLeft" className="opacity-0">
            <p className="mb-6 text-base leading-relaxed transition-colors duration-300">
              Interested in working together or have a question? Feel free to reach out through any of the channels
              below.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Mail className="h-5 w-5" />
                </div>
                <Link
                  href="mailto:mail@stanvanbaarsen.nl"
                  className="transition-colors hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm"
                >
                  mail@stanvanbaarsen.nl
                </Link>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Linkedin className="h-5 w-5" />
                </div>
                <Link
                  href="https://linkedin.com/in/stan-van-baarsen"
                  className="transition-colors hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/stan-van-baarsen
                </Link>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Github className="h-5 w-5" />
                </div>
                <Link
                  href="https://github.com/stanvbaarsen"
                  className="transition-colors hover:text-blue-500 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/stanvbaarsen
                </Link>
              </div>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div ref={rightColRef} data-animation-type="slideInFromRight" className="opacity-0 flex items-center justify-center delay-200">
            <div className="relative w-full max-w-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 