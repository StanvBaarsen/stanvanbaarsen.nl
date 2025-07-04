"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
	const [activeSection, setActiveSection] = useState("home")
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Set isVisible to true after a short delay to ensure the component is mounted
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, 100)

		return () => {
			clearTimeout(timer)
		}
	}, [])

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
			<main className="min-h-screen max-w-full overflow-x-hidden bg-white dark:bg-slate-900">
				<div className="relative z-10 mx-auto box-border">
					<HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
					<div className="relative z-10 pb-16">
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
