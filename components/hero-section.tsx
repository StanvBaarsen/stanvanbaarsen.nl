"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react" // Added useEffect, useRef

interface HeroSectionProps {
	isVisible: boolean
	scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
	const svgBgRef = useRef<HTMLDivElement>(null) // Ref for the SVG background container

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			if (svgBgRef.current) {
				// Adjust the 0.15 factor for more/less parallax
				svgBgRef.current.style.transform = `translateY(${scrollY * 0.15}px)`
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<section id="home" className="relative overflow-hidden min-h-[85vh] flex items-center pt-14">
			<div className="container mx-auto relative z-10 px-4 md:px-6 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-6 gap-10 items-center">
					<div className="lg:col-span-4 flex flex-col">
						
						<h1 className={`text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							Hi, I&apos;m{" "}
							<span className="interactive-hover relative">
								<span className="relative z-10 text-blue-600 dark:text-blue-400">
									Stan van Baarsen
								</span>
							</span>
							!
						</h1>

						<div className={`mt-10 flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<Button
								className="interactive-hover relative overflow-hidden bg-blue-600 text-white transition-all duration-300 ease-in-out shadow-lg hover:bg-blue-700 hover:scale-105 group px-6 py-6 h-12 rounded-xl border border-blue-600 dark:border-blue-600 active:scale-[0.98] active:translate-y-px"
								asChild
							>
								<Link href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="relative flex items-center gap-2">
									<MessageSquare className="h-4 w-4 relative z-10" />
									<span className="relative z-10">Get in touch</span>
								</Link>
							</Button>
						</div>
						
						<div className={`mt-10 flex items-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<span className="text-sm text-muted-foreground">Find me on</span>
							<div className="flex gap-4">
								<a href="https://github.com/stanvbaarsen" target="_blank" rel="noopener noreferrer" className="interactive-hover p-2 text-foreground hover:text-blue-600 transition-all duration-200 ease-in-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-md">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
									</svg>
								</a>
								<a href="https://linkedin.com/in/stan-van-baarsen" target="_blank" rel="noopener noreferrer" className="interactive-hover p-2 text-foreground hover:text-blue-600 transition-all duration-200 ease-in-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background rounded-md">
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
						<div className="relative">
							<div className="relative rounded-full bg-white dark:bg-slate-900 p-1.5 border-2 border-blue-600 dark:border-blue-400">
								<Image
									src="/headshot.jpg"
									alt="Stan van Baarsen"
									width={240}
									height={240}
									className="relative z-10 rounded-full shadow-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 