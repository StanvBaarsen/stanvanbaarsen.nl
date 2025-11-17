"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

interface AboutSectionProps {
	isVisible: boolean
}

export function AboutSection({ isVisible }: AboutSectionProps) {
	const blob1Ref = useRef<HTMLDivElement>(null)
	const blob2Ref = useRef<HTMLDivElement>(null)

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

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const fadeBase = "transition-opacity duration-700 ease-out"

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

					<div className="mb-4 flex flex-col items-center text-center">
						<h2
							className={`${fadeBase} ${isVisible ? "opacity-100" : "opacity-0"} text-3xl font-bold tracking-tight md:text-5xl text-blue-600 dark:text-blue-400 mb-0`}
							style={{ transitionDelay: "100ms" }}
						>
							About me
						</h2>
					</div>

					<div className="relative max-w-3xl mx-auto">
						<div className="relative space-y-6 pb-6 sm:pb-8">
							<p className={`${fadeBase} ${isVisible ? "opacity-100" : "opacity-0"} text-base leading-relaxed text-left`} style={{ transitionDelay: "300ms" }}>
								I'm <span className="font-semibold">Stan van Baarsen</span>! I recently completed my master's in Technology Policy at the University of Cambridge and I'm now working on AI policy at{" "}
								<a
									href="https://www.aiplan.nl"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
								>
									AI Plan
								</a>, an initiative that aims to help the Netherlands make the most of the AI transition. Having also studied Computer Science and International Business, I’m particularly interested in startups and entrepreneurship, European tech sovereignty, and the role technology plays in our lives, economy, and society.
							</p>

							<div
								className={`lg:block hidden ${fadeBase} ${isVisible ? "opacity-100" : "opacity-0"} relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg`}
								style={{ transitionDelay: "500ms" }}
							>
								<Image
									src="/me-at-a-panel.png"
									alt="Stan speaking on an AI policy panel"
									width={1600}
									height={900}
									className="h-auto w-full object-cover"
									priority={false}
								/>
							</div>

							<div className={`flex justify-center ${fadeBase} ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "700ms" }}>
								<a 
									href="/resume.pdf" 
									target="_blank" 
									rel="noopener noreferrer" 
								className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-300 hover:scale-103 transform"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 ease-in-out">
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
			</div>
		</section>
	)
}
