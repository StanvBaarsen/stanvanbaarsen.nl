"use client"

import { Github, Linkedin, Mail, Twitter, ChevronUp, ExternalLink, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "./contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-xl font-bold text-transparent">
                Stan van Baarsen
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-cyan-600 dark:hover:text-cyan-400">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center justify-between md:hidden">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-xl font-bold text-transparent">
                    Stan van Baarsen
                  </span>
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                asChild
              >
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-slate-900 dark:to-cyan-950">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -left-20 -top-20 h-[40rem] w-[40rem] rounded-full bg-cyan-200 blur-3xl dark:bg-cyan-900"></div>
            <div className="absolute -bottom-32 right-0 h-[30rem] w-[30rem] rounded-full bg-teal-200 blur-3xl dark:bg-teal-900"></div>
          </div>
          <div className="container relative z-10 grid items-center gap-6 px-4 pb-20 pt-16 md:px-6 md:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Welcome to my portfolio</span>
                </div>
                <h1 className="text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl lg:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                    Stan van Baarsen
                  </span>
                </h1>
                <p className="mt-4 max-w-[700px] text-center text-lg text-muted-foreground md:text-left">
                  Student • Software Engineer • Entrepreneur
                </p>
                <div className="mt-8 flex gap-4">
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                    asChild
                  >
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300"
                    asChild
                  >
                    <Link href="#projects">View my work</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end md:flex-1">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 opacity-75 blur-sm animate-pulse"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width={300}
                    height={300}
                    alt="Stan van Baarsen"
                    className="relative rounded-full border-4 border-white bg-white dark:border-slate-800 dark:bg-slate-800"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-slate-950 dark:to-transparent"></div>
        </section>

        <section id="about" className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The story so far</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="relative">
                <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></div>
                <div className="space-y-6">
                  <p className="leading-7 text-lg">
                    I&apos;m Stan van Baarsen, a passionate student, software engineer, and entrepreneur with a love for
                    building innovative solutions to real-world problems.
                  </p>
                  <p className="leading-7 text-lg">
                    Currently pursuing my degree in Computer Science, I balance my academic studies with hands-on
                    software development and entrepreneurial ventures. I believe in the power of technology to transform
                    industries and improve lives.
                  </p>
                  <p className="leading-7 text-lg">
                    When I&apos;m not coding or brainstorming new business ideas, you can find me exploring the latest
                    tech trends, contributing to open-source projects, or mentoring aspiring developers.
                  </p>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl border border-cyan-200 dark:border-cyan-800 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Stan working"
                    className="w-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-cyan-50 py-24 md:py-32 dark:from-slate-900 dark:to-cyan-950"
        >
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute right-0 top-0 h-[20rem] w-[20rem] rounded-full bg-cyan-200 blur-3xl dark:bg-cyan-900"></div>
            <div className="absolute bottom-0 left-0 h-[15rem] w-[15rem] rounded-full bg-teal-200 blur-3xl dark:bg-teal-900"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Skills & Expertise</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What I bring to the table</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-code"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Software Development</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Full-Stack Web Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      React, Next.js, TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Node.js, Express
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Database Design & Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      RESTful API Development
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-lightbulb"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Entrepreneurship</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Business Strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Product Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Market Research
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Startup Growth
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Pitching & Fundraising
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-graduation-cap"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Academic</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Computer Science
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Algorithms & Data Structures
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Software Engineering Principles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Machine Learning Fundamentals
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
                      Research Methodology
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Featured Projects</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My recent work</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group overflow-hidden border-cyan-200 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Project 1"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <h3 className="mb-2 text-xl font-bold">E-Commerce Platform</h3>
                  <p className="mb-4 flex-1 text-muted-foreground">
                    A full-stack e-commerce solution with advanced product filtering, user authentication, and payment
                    processing.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                      asChild
                    >
                      <Link href="#">
                        <span>View Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                      asChild
                    >
                      <Link href="#">
                        <span>Source Code</span>
                        <Github className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border-cyan-200 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Project 2"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <h3 className="mb-2 text-xl font-bold">Task Management App</h3>
                  <p className="mb-4 flex-1 text-muted-foreground">
                    A productivity application with real-time collaboration features, task prioritization, and progress
                    tracking.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                      asChild
                    >
                      <Link href="#">
                        <span>View Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                      asChild
                    >
                      <Link href="#">
                        <span>Source Code</span>
                        <Github className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border-cyan-200 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Project 3"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-8">
                  <h3 className="mb-2 text-xl font-bold">EdTech Startup</h3>
                  <p className="mb-4 flex-1 text-muted-foreground">
                    An educational technology platform connecting students with tutors, featuring video conferencing and
                    interactive learning tools.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                      asChild
                    >
                      <Link href="#">
                        <span>View Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                      asChild
                    >
                      <Link href="#">
                        <span>Source Code</span>
                        <Github className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-cyan-50 py-24 md:py-32 dark:from-slate-900 dark:to-cyan-950"
        >
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute left-0 top-0 h-[20rem] w-[20rem] rounded-full bg-cyan-200 blur-3xl dark:bg-cyan-900"></div>
            <div className="absolute bottom-0 right-0 h-[15rem] w-[15rem] rounded-full bg-teal-200 blur-3xl dark:bg-teal-900"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mb-16 flex flex-col items-center text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s work together</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-6 text-lg">
                  Interested in working together or have a question? Feel free to reach out through any of the channels
                  below.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>stan@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <Link
                      href="https://linkedin.com"
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/stanvanbaarsen
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg">
                      <Github className="h-5 w-5" />
                    </div>
                    <Link
                      href="https://github.com"
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/stanvb
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <Link
                      href="https://twitter.com"
                      className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      twitter.com/stanvb
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 opacity-70 blur-sm"></div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Stan van Baarsen. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
              asChild
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
              asChild
            >
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
              asChild
            >
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg transition-all hover:shadow-cyan-500/25 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  )
}
