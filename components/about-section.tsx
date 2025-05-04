"use client"

import Image from "next/image"
import { Sparkles, Award, BookOpen, Code } from "lucide-react"

export function AboutSection() {
	return (
		<section id="about" className="relative pb-8 overflow-hidden">
			<div className="container mx-auto relative z-10 px-4 md:px-6 w-full max-w-full">
				<div className="absolute -right-20 top-20 w-40 h-40 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
				<div className="absolute -left-20 bottom-20 w-40 h-40 bg-cyan-100/50 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>

				<div className="mb-16 flex flex-col items-center text-center">
					<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-sky-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:from-blue-900/50 dark:to-sky-900/50 dark:text-blue-300 shadow-sm border border-blue-100 dark:border-blue-800/40 backdrop-blur-sm">
						<Sparkles className="h-3.5 w-3.5" />
						<span>Background</span>
					</div>
					<h2 className="text-3xl font-bold tracking-tight md:text-5xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-50 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent mb-4">About me</h2>
					<p className="max-w-2xl text-muted-foreground text-lg">Student at the University of Cambridge and builder focused on technology, policy, and entrepreneurship.</p>
				</div>

				<div className="grid gap-12 md:grid-cols-2 items-center">
					<div className="order-2 md:order-1 relative animate-slide-up">
						<div className="relative space-y-6 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50 dark:border-blue-800/30 bg-white/30 dark:bg-slate-900/30 shadow-xl">
							<div className="absolute -inset-px -z-10 bg-gradient-to-tr from-blue-100 to-sky-100/70 dark:from-blue-900/20 dark:to-sky-900/20 rounded-xl opacity-70"></div>

							<p className="leading-7 text-lg">
								I'm <span className="font-semibold">Stan van Baarsen</span>, currently studying a master's in Technology Policy at the University of Cambridge. After graduating this summer, I plan to focus full time on building a startup. I'm excited to build a venture that creates meaningful change at the intersection of technology, policy, and society.
							</p>

							<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="flex flex-col gap-2 items-center md:items-start">
									<div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
										<BookOpen className="w-5 h-5" />
									</div>
									<h3 className="text-sm font-semibold">Education</h3>
									<p className="text-sm text-muted-foreground text-center md:text-left">Technology Policy at Cambridge, Computer Science at Leiden & International Business at VU</p>
								</div>

								<div className="flex flex-col gap-2 items-center md:items-start">
									<div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400">
										<Code className="w-5 h-5" />
									</div>
									<h3 className="text-sm font-semibold">Skills</h3>
									<p className="text-sm text-muted-foreground text-center md:text-left">Software Engineering, Web Development, Writing</p>
								</div>

								<div className="flex flex-col gap-2 items-center md:items-start">
									<div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
										<Award className="w-5 h-5" />
									</div>
									<h3 className="text-sm font-semibold">Passions</h3>
									<p className="text-sm text-muted-foreground text-center md:text-left">European innovation, AI regulation, poltics, climate and digital sovereignty</p>
								</div>
							</div>

							<div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>

							<p className="leading-7 text-lg">
								I completed two bachelor's degrees, in Computer Science at Leiden University and International Business Administration at Vrije Universiteit Amsterdam, with a focus on political and public economics. I also studied abroad in New York to broaden my global perspective.
							</p>

							<div className="flex justify-center">
								<a 
									href="/resume.pdf" 
									target="_blank" 
									rel="noopener noreferrer" 
									className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 text-white font-medium shadow-md hover:shadow-xl hover:from-blue-600 hover:to-sky-600 transition-all duration-300 hover:scale-105 transform"
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
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

					<div className="order-1 md:order-2 relative flex items-center justify-center animate-slide-up p-6">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 blur-2xl"></div>

						<div className="relative max-w-md">
							<div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-teal-600 rounded-xl opacity-70 blur-sm"></div>
							<div className="relative overflow-hidden rounded-xl border-2 border-blue-100 dark:border-blue-800 bg-white dark:bg-slate-900 shadow-xl transition-all duration-500 hover:shadow-blue-500/20 group">
								<div className="absolute -inset-px bg-gradient-to-tr from-blue-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
								<Image
									src="/downing.jpg"
									width={600}
									height={400}
									alt="downing.jpg"
									className="w-full transition-all duration-500 hover:scale-[1.03] rounded-t-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} 