"use client"

import { useEffect, useState, useRef } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

// Pre-define fixed particle positions and properties to avoid hydration mismatch
const particles = [
	{ width: 3, height: 3, top: 20, left: 30, opacity: 0.6, delay: 1, duration: 15 },
	{ width: 2, height: 4, top: 40, left: 70, opacity: 0.5, delay: 2, duration: 18 },
	{ width: 4, height: 2, top: 60, left: 20, opacity: 0.7, delay: 3, duration: 12 },
	{ width: 5, height: 5, top: 80, left: 80, opacity: 0.4, delay: 4, duration: 20 },
	{ width: 2, height: 2, top: 30, left: 50, opacity: 0.5, delay: 2, duration: 15 },
	{ width: 3, height: 5, top: 70, left: 40, opacity: 0.6, delay: 5, duration: 17 },
	{ width: 4, height: 3, top: 10, left: 60, opacity: 0.7, delay: 1, duration: 14 },
	{ width: 2, height: 2, top: 50, left: 10, opacity: 0.5, delay: 3, duration: 16 },
	{ width: 3, height: 3, top: 25, left: 75, opacity: 0.6, delay: 4, duration: 13 },
	{ width: 5, height: 2, top: 45, left: 90, opacity: 0.4, delay: 2, duration: 19 },
	{ width: 2, height: 4, top: 85, left: 35, opacity: 0.7, delay: 5, duration: 11 },
	{ width: 3, height: 3, top: 15, left: 55, opacity: 0.5, delay: 3, duration: 14 },
	{ width: 4, height: 2, top: 65, left: 25, opacity: 0.6, delay: 1, duration: 16 },
	{ width: 2, height: 5, top: 5, left: 85, opacity: 0.5, delay: 4, duration: 18 },
	{ width: 3, height: 3, top: 75, left: 5, opacity: 0.7, delay: 2, duration: 12 }
];

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
			const start = window.pageYOffset;
			const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
			const distance = targetPosition - start;
			const duration = 1500; // Longer duration for slower scroll (in ms)
			let startTime: number | null = null;

			function scrollAnimation(currentTime: number) {
				if (startTime === null) startTime = currentTime;
				const timeElapsed = currentTime - startTime;
				const progress = Math.min(timeElapsed / duration, 1);
				
				// Easing function for smoother start/end
				const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
				
				window.scrollTo(0, start + distance * ease(progress));
				
				if (timeElapsed < duration) {
					requestAnimationFrame(scrollAnimation);
				}
			}
			
			requestAnimationFrame(scrollAnimation);
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
		<div className="overflow-x-hidden w-full max-w-full">
			<Header activeSection={activeSection} scrollToSection={scrollToSection} />
			<main className="min-h-screen max-w-full overflow-x-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
				{/* Enhanced mouse cursor glow effect */}
				<div 
					ref={mouseCursorRef}
					className="cursor-glow pointer-events-none fixed z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/30 via-sky-400/20 to-teal-400/30 blur-xl dark:from-blue-500/20 dark:via-sky-500/15 dark:to-teal-500/20 transition-all duration-300 ease-out opacity-70"
					style={{ 
						left: mousePosition.x, 
						top: mousePosition.y, 
						transform: `translate(-50%, -50%) scale(${mousePosition.x > 0 ? 1 : 0})`
					}}
				/>
				
				<div className="fixed inset-0 z-0 pointer-events-none">
					<div className="absolute left-0 top-64 h-[40rem] w-[40rem] rounded-full bg-gradient-to-b from-blue-100/40 to-cyan-100/40 blur-3xl dark:from-blue-900/20 dark:to-cyan-900/20 animate-float"></div>
					<div className="absolute right-0 bottom-64 h-[35rem] w-[35rem] rounded-full bg-gradient-to-tr from-teal-100/30 to-blue-100/30 blur-3xl dark:from-teal-900/20 dark:to-blue-900/20 animate-float [animation-delay:2000ms]"></div>
					<div className="absolute top-1/2 left-1/4 h-[25rem] w-[25rem] rounded-full bg-gradient-to-r from-cyan-100/30 to-sky-100/30 blur-3xl dark:from-cyan-900/15 dark:to-sky-900/15 animate-float [animation-delay:1000ms]"></div>
					
					<div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20 z-0">
						<div className="particle-container">
							{particles.map((particle, i) => (
								<div 
									key={i}
									className="particle absolute rounded-full bg-white dark:bg-blue-400"
									style={{
										width: `${particle.width}px`,
										height: `${particle.height}px`,
										top: `${particle.top}%`,
										left: `${particle.left}%`,
										opacity: particle.opacity,
										animation: `particle-float ${particle.duration}s linear infinite`, /* Changed from 'float' to 'particle-float' */
										animationDelay: `${particle.delay}s`
									}}
								/>
							))}
						</div>
					</div>
				</div>
				
				<div className="relative z-10 mx-auto box-border">
					<HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
					<div className="relative z-10 py-16">
						<AboutSection />
					</div>
					<div className="relative z-10 py-16">
						<ProjectsSection />
					</div>
					<div className="relative z-10 py-16"> 
						<ContactSection />
					</div>
				</div>
			</main>
		</div>
	)
}
