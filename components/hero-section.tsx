"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"

interface HeroSectionProps {
	isVisible: boolean
	scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
	return (
		<section id="home" className="relative overflow-hidden min-h-[85vh] flex items-center pt-14">
			<div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70"></div>
				<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-200 dark:bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70 [animation-delay:1000ms]"></div>
				<div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-sky-200 dark:bg-sky-700 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-70 [animation-delay:2000ms]"></div>
			</div>
			
			<div className="container mx-auto relative z-10 px-4 py-16 md:px-6 md:py-24 lg:py-32 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-6 gap-10 items-center">
					<div className="lg:col-span-4 flex flex-col">
						
						<h1 className={`text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							Hi, I&apos;m{" "}
							<span className="interactive-hover relative">
								<span className="relative z-10 bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
									Stan van Baarsen
								</span>
							</span>
							!
						</h1>
						<p className={`mt-4 max-w-[700px] text-left text-base text-muted-foreground transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							Student • Software Engineer • Building Fig
						</p>
						
						<div className={`mt-8 flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<Button
								className="interactive-hover relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-600 text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/25 hover:scale-105 group px-6 py-6 h-12 rounded-xl"
								asChild
							>
								<Link href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="relative flex items-center gap-2">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
									<MessageSquare className="h-4 w-4 relative z-10" />
									<span className="relative z-10">Get in touch</span>
								</Link>
							</Button>
							
							<Button
								className="interactive-hover relative overflow-hidden bg-transparent border-2 border-blue-200 dark:border-blue-800 text-foreground transition-all duration-300 ease-in-out hover:border-blue-400 hover:text-white dark:hover:border-blue-600 hover:scale-105 group px-6 py-6 h-12 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background"
								asChild
							>
								<Link href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="relative flex items-center gap-2">
									<span className="relative z-10">View projects</span>
									<ArrowRight className="h-4 w-4 relative z-10" />
								</Link>
							</Button>
						</div>
						
						<div className={`mt-10 flex items-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<span className="text-sm text-muted-foreground">Find me on</span>
							<div className="flex gap-4">
								<a href="https://github.com/stanvbaarsen" target="_blank" rel="noopener noreferrer" className="interactive-hover p-2 text-foreground hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
									</svg>
								</a>
								<a href="https://linkedin.com/in/stan-van-baarsen" target="_blank" rel="noopener noreferrer" className="interactive-hover p-2 text-foreground hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
										<rect x="2" y="9" width="4" height="12" />
										<circle cx="4" cy="4" r="2" />
									</svg>
								</a>
							</div>
						</div>
					</div>
					
					<div className={`lg:col-span-2 flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
						<div className="relative group interactive-hover">
							<div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500/40 to-teal-500/40 blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
							<div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
							<div className="absolute -inset-5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
							
							<div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-blue-500 via-sky-500 to-teal-500 opacity-75 group-hover:opacity-100 animate-spin-slow"></div>
							
							<div className="relative rounded-full bg-white dark:bg-slate-900 p-1.5">
								<Image
									src="/headshot.jpg"
									alt="Stan van Baarsen"
									width={240}
									height={240}
									className="relative z-10 rounded-full shadow-xl transition-all duration-500 group-hover:scale-[1.03]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 