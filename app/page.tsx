"use client"

import { useEffect, useState, useRef } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
	const [activeSection, setActiveSection] = useState("home")
	const [isVisible, setIsVisible] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
	const mouseCursorRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		// Set isVisible to true after a short delay to ensure the component is mounted
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, 100)

		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			clearTimeout(timer)
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	// Update cursor position with smooth animation
	useEffect(() => {
		if (mouseCursorRef.current) {
			mouseCursorRef.current.style.left = `${mousePosition.x}px`
			mouseCursorRef.current.style.top = `${mousePosition.y}px`
		}
	}, [mousePosition])

	const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault()
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "about", "projects", "contact"]
			const scrollPosition = window.scrollY + window.innerHeight / 2

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const { top, bottom } = element.getBoundingClientRect()
					const offset = window.scrollY
					if (top + offset <= scrollPosition && bottom + offset >= scrollPosition) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<>
			<Header activeSection={activeSection} scrollToSection={scrollToSection} />
			<main className="min-h-screen bg-gradient-to-b from-white to-white dark:from-slate-950 dark:to-slate-950 overflow-hidden">
				{/* Mouse cursor glow effect */}
				<div 
					ref={mouseCursorRef}
					className="cursor-glow pointer-events-none fixed z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-xl dark:from-blue-500/20 dark:to-cyan-500/20 transition-all duration-300 ease-out"
					style={{ 
						left: mousePosition.x, 
						top: mousePosition.y, 
						transform: `translate(-50%, -50%) scale(${mousePosition.x > 0 ? 1 : 0})`,
						opacity: 0.65
					}}
				/>
				
				{/* Background elements that persist throughout the site */}
				<div className="fixed inset-0 z-0 pointer-events-none">
					{/* Common subtle grid pattern */}
					<div className="absolute inset-0 bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
					
					{/* Subtle animated gradients */}
					<div className="absolute -left-64 -top-64 h-[50rem] w-[50rem] rounded-full bg-blue-100/30 blur-3xl dark:bg-blue-900/20 animate-pulse"></div>
					<div className="absolute -right-64 -bottom-64 h-[50rem] w-[50rem] rounded-full bg-blue-100/30 blur-3xl dark:bg-blue-900/20 animate-pulse delay-1000"></div>
					<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-cyan-100/20 blur-3xl dark:bg-cyan-900/10 animate-pulse delay-2000"></div>
				</div>
				
				<div className="relative z-10">
					<HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
					<div className="relative z-10 py-6 md:py-8">
						<div className="absolute inset-0"></div>
						<div className="relative z-10">
							<AboutSection />
						</div>
					</div>
					<div className="relative z-10 py-6 md:py-8">
						<div className="absolute inset-0 "></div>
						<div className="relative z-10">
							<ProjectsSection />
						</div>
					</div>
					<div className="relative z-10">
						<ContactSection />
					</div>
				</div>
			</main>
		</>
	)
}
