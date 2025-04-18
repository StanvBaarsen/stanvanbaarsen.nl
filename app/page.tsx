"use client"

import { Github, Linkedin, Mail, Twitter, ChevronUp, ExternalLink, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "./contact-form"

export default function Home() {
	const [activeSection, setActiveSection] = useState("")
	const [scrollProgress, setScrollProgress] = useState(0)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		let ticking = false
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					// Calculate scroll progress
					const totalHeight = document.documentElement.scrollHeight - window.innerHeight
					const progress = (window.scrollY / totalHeight) * 100
					setScrollProgress(progress)

					// Update active section
					const sections = ["about", "contact"]
					const currentSection = sections.find(section => {
						const element = document.getElementById(section)
						if (element) {
							const rect = element.getBoundingClientRect()
							return rect.top <= 100 && rect.bottom >= 100
						}
						return false
					})
					setActiveSection(currentSection || "")
					ticking = false
				})
				ticking = true
			}
		}

		// Set initial visibility
		setIsVisible(true)

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		e.preventDefault()
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<>
			<div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
				{/* Scroll Progress Indicator */}
				<div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-50">
					<div 
						className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-300"
						style={{ width: `${scrollProgress}%` }}
					/>
				</div>

				<header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<div className="container mx-auto flex h-16 items-center px-4 md:px-6 w-full">
						<div className="mr-4 hidden md:flex">
							<Link href="/" className="mr-6 flex items-center space-x-2 group">
								<span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-teal-500 group-hover:to-cyan-500">
									Stan van Baarsen
								</span>
							</Link>
							<nav className="flex items-center space-x-6 text-sm font-medium">
								<Link 
									href="#about" 
									onClick={(e) => scrollToSection(e, "about")} 
									className={`transition-all duration-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 ${
										activeSection === "about" ? "text-cyan-600 dark:text-cyan-400" : ""
									}`}
								>
									About
								</Link>
								<Link 
									href="#contact" 
									onClick={(e) => scrollToSection(e, "contact")} 
									className={`transition-all duration-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 ${
										activeSection === "contact" ? "text-cyan-600 dark:text-cyan-400" : ""
									}`}
								>
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
									className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:rotate-3"
									asChild
								>
									<Link href="https://github.com/StanvBaarsen" target="_blank" rel="noopener noreferrer">
										<Github className="h-5 w-5" />
										<span className="sr-only">GitHub</span>
									</Link>
								</Button>
								<Button
									variant="ghost"
									size="icon"
									className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:rotate-3"
									asChild
								>
									<Link href="https://linkedin.com/in/stan-van-baarsen" target="_blank" rel="noopener noreferrer">
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">LinkedIn</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</header>
				<main className="flex-1">
					<section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-slate-900 dark:to-cyan-950">
						<div className="absolute inset-0 z-0 opacity-30">
							<div className="absolute -left-20 -top-20 h-[40rem] w-[40rem] rounded-full bg-cyan-200 blur-3xl dark:bg-cyan-900 animate-pulse"></div>
							<div className="absolute -bottom-32 right-0 h-[30rem] w-[30rem] rounded-full bg-teal-200 blur-3xl dark:bg-teal-900 animate-pulse delay-1000"></div>
						</div>
						<div className="container mx-auto relative z-10 grid items-center gap-6 px-4 pb-20 pt-16 md:px-6 md:py-8 lg:py-32 w-full">
							<div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
								<div className="flex flex-col items-center md:items-start">
									{/* <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 animate-fade-in">
										<Sparkles className="h-3.5 w-3.5" />
										<span>Welcome to my portfolio</span>
									</div> */}
									<h1 className={`text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
										Hi, I&apos;m{" "}
										<span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
											Stan van Baarsen
										</span>
									</h1>
									<p className={`mt-4 max-w-[700px] text-center text-lg text-muted-foreground md:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
										Student • Software Engineer • Aspiring Entrepreneur
									</p>
									<div className={`mt-8 flex gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
										<Button
											className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-cyan-500/25 hover:scale-105 group"
											asChild
										>
											<Link href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="relative">
												<div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
												<span className="relative">Get in touch</span>
											</Link>
										</Button>
									</div>
								</div>
								<div className={`flex justify-center md:justify-end md:flex-1 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
									<div className="relative">
										<Image
											src="/headshot.jpg"
											alt="Stan van Baarsen"
											width={200}
											height={200}
											className="rounded-full border-4 border-white shadow-xl dark:border-slate-800"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-slate-950 dark:to-transparent"></div>
					</section>

					<section id="about" className="relative py-24 md:py-32 overflow-hidden">
						<div className="absolute inset-0 z-0 opacity-30">
							<div className="absolute right-0 top-0 h-[20rem] w-[20rem] rounded-full bg-cyan-200 blur-3xl dark:bg-cyan-900 animate-pulse delay-500"></div>
							<div className="absolute bottom-0 left-0 h-[15rem] w-[15rem] rounded-full bg-teal-200 blur-3xl dark:bg-teal-900 animate-pulse delay-1000"></div>
						</div>
						<div className="container mx-auto relative z-10 px-4 md:px-6 w-full">
							<div className="mb-16 flex flex-col items-center text-center">
								<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 animate-fade-in">
									<Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
									<span>About Me</span>
								</div>
								<h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-slide-up">About me</h2>
							</div>
							<div className="grid gap-12 md:grid-cols-2">
								<div className="relative animate-slide-up delay-200">
									<div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full animate-pulse"></div>
									<div className="space-y-6">
										<p className="leading-7 text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
											I'm Stan van Baarsen, currently studying a master's in Technology Policy at the University of Cambridge. After graduating this summer, I plan to focus full time on building a startup. I'm driven by how ventures can create meaningful change at the intersection of technology, policy, and society.
										</p>
										<p className="leading-7 text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
											I completed two bachelor's degrees — in Computer Science at Leiden University and International Business Administration at Vrije Universiteit Amsterdam — with a focus on political and public economics. I also studied abroad in New York to broaden my global perspective.
										</p>
										<p className="leading-7 text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
											I'm passionate about the intersection of innovation, economic policy, and society. In particular, I care about European challenges like digital sovereignty, fostering a European startup ecosystem, and the future of AI regulation.
										</p>
									</div>
								</div>
								<div className="relative flex items-center justify-center animate-slide-up delay-300">
									<div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-xl animate-pulse"></div>
									<div className="relative overflow-hidden rounded-xl border border-cyan-200 dark:border-cyan-800 shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-cyan-500/25">
										<Image
											src="/downing.jpg"
											width={600}
											height={400}
											alt="Stan working"
											className="w-full transition-all duration-500 hover:scale-105"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section
						id="contact"
						className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-cyan-50 py-24 md:py-32 dark:from-slate-900 dark:to-cyan-950"
					>
						<div className="absolute inset-0 z-0 opacity-30">
							<div className="absolute left-0 top-0 h-[20rem] w-[20rem] rounded-full bg-cyan-200 blur-3xl dark:bg-cyan-900 animate-pulse delay-700"></div>
							<div className="absolute bottom-0 right-0 h-[15rem] w-[15rem] rounded-full bg-teal-200 blur-3xl dark:bg-teal-900 animate-pulse delay-1000"></div>
						</div>
						<div className="container mx-auto relative z-10 px-4 md:px-6 w-full">
							<div className="mb-16 flex flex-col items-center text-center">
								<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 animate-fade-in">
									<Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
									<span>Let's connect!</span>
								</div>
								<h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-slide-up">Let's work together</h2>
							</div>
							<div className="grid gap-8 md:grid-cols-2">
								<div className="animate-slide-up delay-200">
									<p className="mb-6 text-lg hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
										Interested in working together or have a question? Feel free to reach out through any of the channels
										below.
									</p>
									<div className="space-y-4">
										<div className="flex items-center gap-3 group">
											<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
												<Mail className="h-5 w-5" />
											</div>
											<Link
												href="mailto:stanvanbaarsen@hotmail.com"
												className="group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
											>
												stanvanbaarsen@hotmail.com
											</Link>
										</div>
										<div className="flex items-center gap-3 group">
											<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
												<Linkedin className="h-5 w-5" />
											</div>
											<Link
												href="https://linkedin.com/in/stan-van-baarsen"
												className="group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
												target="_blank"
												rel="noopener noreferrer"
											>
												linkedin.com/in/stan-van-baarsen
											</Link>
										</div>
										<div className="flex items-center gap-3 group">
											<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
												<Github className="h-5 w-5" />
											</div>
											<Link
												href="https://github.com/stanvbaarsen"
												className="group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
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
										<div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 opacity-70 blur-sm animate-pulse"></div>
										<ContactForm />
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
				<footer className="border-t py-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
					<div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:flex-row w-full">
						<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
							© {new Date().getFullYear()} Stan van Baarsen. All rights reserved.
						</p>
						<div className="flex gap-4">
							<Button
								variant="ghost"
								size="icon"
								className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:rotate-3"
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
								className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:rotate-3"
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
								className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:rotate-3"
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
					className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg transition-all hover:shadow-cyan-500/25 hover:scale-110 hover:rotate-3"
					aria-label="Scroll to top"
				>
					<ChevronUp className="h-5 w-5" />
				</button>
			</div>
		</>
	)
}
