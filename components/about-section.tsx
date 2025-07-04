"use client"

import Image from "next/image"
import { Award, BookOpen, Code } from "lucide-react"
import { useEffect, useRef } from "react"

export function AboutSection() {
	const blob1Ref = useRef<HTMLDivElement>(null)
	const blob2Ref = useRef<HTMLDivElement>(null)
	const textContentRef = useRef<HTMLDivElement>(null)
	const imageContentRef = useRef<HTMLDivElement>(null)
	const educationRef = useRef<HTMLDivElement>(null)
	const skillsRef = useRef<HTMLDivElement>(null)
	const passionsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			if (blob1Ref.current) {
				blob1Ref.current.style.transform = `translateY(${scrollY * 0.1}px)` 
			}
			if (blob2Ref.current) {
				blob2Ref.current.style.transform = `translateY(${scrollY * 0.05}px)`
			}
		}
		window.addEventListener("scroll", handleScroll, { passive: true })
		
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.2, // Trigger when 20% of the element is visible
		}

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("opacity-0") // Make visible
					// Determine animation based on a data attribute or ref
					const animationType = (entry.target as HTMLElement).dataset.animationType
					if (animationType === "slideInFromLeft") {
						entry.target.classList.add("animate-slideInFromLeft")
					} else if (animationType === "slideInFromRight") {
						entry.target.classList.add("animate-slideInFromRight")
					} else if (animationType === "slideInFromBottom") {
						entry.target.classList.add("animate-slideInFromBottom")
					}
					observer.unobserve(entry.target)
				}
			})
		}

		const observer = new IntersectionObserver(observerCallback, observerOptions)
		const elementsToObserve = [
			textContentRef.current, 
			imageContentRef.current,
			educationRef.current,
			skillsRef.current,
			passionsRef.current
		]
		elementsToObserve.forEach(el => {
			if (el) observer.observe(el)
		})

		return () => {
			window.removeEventListener("scroll", handleScroll)
			elementsToObserve.forEach(el => {
				if (el) observer.unobserve(el)
			})
		}
	}, [])

	return (
		<section id="about" className="relative pb-8 overflow-hidden">
			<div className="container mx-auto relative z-10 px-4 md:px-6 w-full max-w-full">
				{/* Parallax wrapper for blob 1 */}
				<div ref={blob1Ref} style={{ position: 'absolute', top: '5rem', right: '-5rem' }}> {/* Removed zIndex: -1. Original classes: -right-20 top-20 */}
					<div className="w-40 h-40 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl animate-float"></div>
				</div>
				{/* Parallax wrapper for blob 2 */}
				<div ref={blob2Ref} style={{ position: 'absolute', bottom: '5rem', left: '-5rem' }}> {/* Removed zIndex: -1. Original classes: -left-20 bottom-20 */}
					<div className="w-40 h-40 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full blur-3xl animate-float [animation-delay:1s]"></div>
				</div>

				<div className="mb-16 flex flex-col items-center text-center animate-fade-in">
					<h2 className="text-3xl font-bold tracking-tight md:text-5xl text-blue-600 dark:text-blue-400 mb-4">About me</h2>
					<p className="max-w-2xl text-muted-foreground text-base leading-relaxed">Student at the University of Cambridge and builder focused on technology, policy, and entrepreneurship.</p>
				</div>

				<div className="grid gap-12 md:grid-cols-2 items-center">
					{/* Text content block - to slide in from left */}
					<div ref={textContentRef} data-animation-type="slideInFromLeft" className="opacity-0 order-2 md:order-1 relative">
						<div className="relative space-y-6 backdrop-blur-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow-xl"> 

							<p className="text-base leading-relaxed">
								I'm <span className="font-semibold">Stan van Baarsen</span>, currently studying a master's in Technology Policy at the University of Cambridge. After graduating this summer, I plan to focus full time on building a startup. I'm excited to build a venture that creates meaningful change at the intersection of technology, policy, and society.
							</p>

							<div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div ref={educationRef} data-animation-type="slideInFromBottom" className="opacity-0 flex flex-col gap-3 items-center md:items-start group">
									<div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-transform duration-200 ease-in-out group-hover:scale-110">
										<BookOpen className="w-5 h-5" />
									</div>
									<h3 className="text-sm font-semibold">Education</h3>
									<p className="text-sm text-muted-foreground text-center md:text-left">Technology Policy at Cambridge, Computer Science at Leiden & International Business at VU</p>
								</div>

								<div ref={skillsRef} data-animation-type="slideInFromBottom" className="opacity-0 flex flex-col gap-3 items-center md:items-start delay-200 group">
									<div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 transition-transform duration-200 ease-in-out group-hover:scale-110">
										<Code className="w-5 h-5" />
									</div>
									<h3 className="text-sm font-semibold">Skills</h3>
									<p className="text-sm text-muted-foreground text-center md:text-left">Software Engineering, Web Development, Writing</p>
								</div>

								<div ref={passionsRef} data-animation-type="slideInFromBottom" className="opacity-0 flex flex-col gap-3 items-center md:items-start delay-300 group">
									<div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 transition-transform duration-200 ease-in-out group-hover:scale-110">
										<Award className="w-5 h-5" />
									</div>
									<h3 className="text-sm font-semibold">Passions</h3>
									<p className="text-sm text-muted-foreground text-center md:text-left">European innovation, AI regulation, politics, climate and digital sovereignty</p>
								</div>
							</div>

							<div className="w-full h-px bg-gray-200 dark:bg-gray-700"></div>

							<p className="text-base leading-relaxed">
								I completed two bachelor's degrees, in Computer Science at Leiden University and International Business Administration at Vrije Universiteit Amsterdam, with a focus on political and public economics. I also studied abroad in New York to broaden my global perspective.
							</p>

							<div className="flex justify-center">
								<a 
									href="/resume.pdf" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-0.5">
										<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
										<polyline points="14 2 14 8 20 8"></polyline>
										<line x1="16" y1="13" x2="8" y2="13"></line>
										<line x1="16" y1="17" x2="8" y2="17"></line>
										<line x1="10" y1="9" x2="8" y2="9"></line>
									</svg>
									View Resume
								</a>
							</div>
						</div>
					</div>
					{/* Image block - to slide in from right */}
					<div ref={imageContentRef} data-animation-type="slideInFromRight" className="opacity-0 order-1 md:order-2 relative flex items-center justify-center p-6">

						<div className="relative max-w-md">
							<div className="relative overflow-hidden rounded-xl border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-slate-900 shadow-xl">
								<Image
									src="/downing.jpg"
									width={600}
									height={400}
									alt="downing.jpg"
									className="w-full rounded-t-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 