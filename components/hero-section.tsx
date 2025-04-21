"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
	isVisible: boolean
	scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
	return (
		<section id="home" className="relative overflow-hidden pt-14">
			<div className="container mx-auto relative z-10 grid items-center gap-6 px-4 pb-8 pt-20 md:px-6 md:pt-20 md:pb-8 lg:py-28 w-full">
				<div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
					<div className="flex flex-col items-center md:items-start">
						<h1 className={`text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							Hi, I&apos;m{" "}
							<span className="interactive-hover bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent animate-gradient">
								Stan van Baarsen
							</span>
						</h1>
						<p className={`mt-4 max-w-[700px] text-center text-lg text-muted-foreground md:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							Student • Software Engineer • Building Fig
						</p>
						<div className={`mt-8 flex gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<Button
								className="interactive-hover relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/25 hover:scale-105 group"
								asChild
							>
								<Link href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="relative">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
									<span className="relative">Get in touch</span>
								</Link>
							</Button>
						</div>
					</div>
					<div className={`flex justify-center md:justify-end md:flex-1 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
						<div className="relative group interactive-hover">
							<div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-700/30 blur-xl group-hover:scale-110 transition-transform duration-500"></div>
							<div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-700/20 blur-lg group-hover:scale-110 transition-transform duration-500"></div>
							<Image
								src="/headshot.jpg"
								alt="Stan van Baarsen"
								width={200}
								height={200}
								className="relative rounded-full border-4 border-white shadow-xl dark:border-slate-800 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 