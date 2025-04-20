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

		return () => clearTimeout(timer)
	}, [])

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
		<main className="min-h-screen bg-white dark:bg-slate-950">
			<Header activeSection={activeSection} scrollToSection={scrollToSection} />
			<HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
				</main>
	)
}
