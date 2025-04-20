"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Sparkles, Globe, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectsSection() {
	return (
		<section id="projects" className="relative py-24 md:py-32 overflow-hidden">
			<div className="absolute inset-0 z-0 opacity-30">
				<div className="absolute left-0 top-0 h-[20rem] w-[20rem] rounded-full bg-blue-200 blur-3xl dark:bg-blue-900 animate-pulse delay-500"></div>
				<div className="absolute bottom-0 right-0 h-[15rem] w-[15rem] rounded-full bg-blue-200 blur-3xl dark:bg-blue-900 animate-pulse delay-1000"></div>
			</div>
			<div className="container px-4 md:px-6 relative z-10">
				<div className="mb-16 flex flex-col items-center text-center animate-fade-in">
					<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-cyan-800 dark:from-cyan-900/50 dark:to-blue-900/50 dark:text-cyan-300 shadow-sm">
						<Sparkles className="h-3.5 w-3.5" />
						<span>Featured Projects</span>
					</div>
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">My recent work</h2>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] h-full">
						<Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-cyan-300 hover:shadow-[0_12px_30px_rgba(8,_112,_184,_0.4)] dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800 animate-scale-in h-full transition-all duration-500">
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-teal-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
								<Image
									src="/fig-logo-landscape.png"
									width={500}
									height={300}
									alt="Fig logo"
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
							</div>
							<CardContent className="p-6 flex flex-col" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-600">
											<Link href="https://getfig.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
												Fig: AI-Powered Career Exploration
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										An AI-driven and community-based career exploration platform that helps users map their career paths through personalized recommendations and shared experiences.
									</p>
									<div className="mt-4 flex flex-wrap gap-2 justify-center">
										<span className="inline-flex items-center rounded-full bg-cyan-100/50 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 transition-all duration-300 group-hover:bg-cyan-200/70 dark:group-hover:bg-cyan-800/70">
											React Native
										</span>
										<span className="inline-flex items-center rounded-full bg-blue-100/50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 transition-all duration-300 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70">
											Django
										</span>
										<span className="inline-flex items-center rounded-full bg-teal-100/50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-200/70 dark:group-hover:bg-teal-800/70">
											PostgreSQL
										</span>
									</div>
								</div>
								<div className="flex gap-2 mt-6 justify-center">
									<Button
										variant="outline"
										size="sm"
										className="border-cyan-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white dark:border-cyan-800 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all duration-300 inline-flex items-center gap-1 group-hover:border-blue-400 dark:group-hover:border-blue-500"
										asChild
									>
										<Link href="https://getfig.netlify.app" target="_blank" rel="noopener noreferrer">
											<Globe className="h-3.5 w-3.5 mr-1" />
											<span>Landing Page</span>
										</Link>
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="border-cyan-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white dark:border-cyan-800 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all duration-300 inline-flex items-center gap-1 group-hover:border-blue-400 dark:group-hover:border-blue-500"
										asChild
									>
										<Link href="https://instagram.com/getfigapp" target="_blank" rel="noopener noreferrer">
											<Instagram className="h-3.5 w-3.5 mr-1" />
											<span>Instagram</span>
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] h-full">
						<Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-cyan-300 hover:shadow-[0_12px_30px_rgba(8,_112,_184,_0.4)] dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800 animate-scale-in delay-100 h-full transition-all duration-500">
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-teal-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
								<Image
									src="/temp.png"
									width={500}
									height={300}
									alt="Project 2"
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							</div>
							<CardContent className="p-6 flex flex-col" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-600">Project 2</h3>
									</div>
									<p className="text-muted-foreground">
										A brief description of the project and its key features. This helps visitors understand what the project is about.
									</p>
									<div className="mt-4 flex flex-wrap gap-2 justify-center">
										<span className="inline-flex items-center rounded-full bg-cyan-100/50 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 transition-all duration-300 group-hover:bg-cyan-200/70 dark:group-hover:bg-cyan-800/70">
											Next.js
										</span>
										<span className="inline-flex items-center rounded-full bg-blue-100/50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 transition-all duration-300 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70">
											TypeScript
										</span>
										<span className="inline-flex items-center rounded-full bg-teal-100/50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-200/70 dark:group-hover:bg-teal-800/70">
											Tailwind CSS
										</span>
									</div>
								</div>
								<div className="flex gap-2 mt-6 justify-center">
									<Button
										variant="outline"
										size="sm"
										className="border-cyan-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white dark:border-cyan-800 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all duration-300 inline-flex items-center gap-1 group-hover:border-blue-400 dark:group-hover:border-blue-500"
										asChild
									>
										<Link href="#" target="_blank" rel="noopener noreferrer">
											<ExternalLink className="h-3.5 w-3.5 mr-1" />
											<span>View Demo</span>
										</Link>
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="border-cyan-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white dark:border-cyan-800 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all duration-300 inline-flex items-center gap-1 group-hover:border-blue-400 dark:group-hover:border-blue-500"
										asChild
									>
										<Link href="#" target="_blank" rel="noopener noreferrer">
											<Github className="h-3.5 w-3.5 mr-1" />
											<span>Source Code</span>
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] h-full">
						<Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-cyan-300 hover:shadow-[0_12px_30px_rgba(8,_112,_184,_0.4)] dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800 animate-scale-in delay-200 h-full transition-all duration-500">
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-teal-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
								<Image
									src="/temp.png"
									width={500}
									height={300}
									alt="Project 3"
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							</div>
							<CardContent className="p-6 flex flex-col" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-cyan-600">Project 3</h3>
									</div>
									<p className="text-muted-foreground">
										A brief description of the project and its key features. This helps visitors understand what the project is about.
									</p>
									<div className="mt-4 flex flex-wrap gap-2 justify-center">
										<span className="inline-flex items-center rounded-full bg-cyan-100/50 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 transition-all duration-300 group-hover:bg-cyan-200/70 dark:group-hover:bg-cyan-800/70">
											Next.js
										</span>
										<span className="inline-flex items-center rounded-full bg-blue-100/50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 transition-all duration-300 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70">
											TypeScript
										</span>
										<span className="inline-flex items-center rounded-full bg-teal-100/50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-200/70 dark:group-hover:bg-teal-800/70">
											Tailwind CSS
										</span>
									</div>
								</div>
								<div className="flex gap-2 mt-6 justify-center">
									<Button
										variant="outline"
										size="sm"
										className="border-cyan-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white dark:border-cyan-800 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all duration-300 inline-flex items-center gap-1 group-hover:border-blue-400 dark:group-hover:border-blue-500"
										asChild
									>
										<Link href="#" target="_blank" rel="noopener noreferrer">
											<ExternalLink className="h-3.5 w-3.5 mr-1" />
											<span>View Demo</span>
										</Link>
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="border-cyan-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white dark:border-cyan-800 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all duration-300 inline-flex items-center gap-1 group-hover:border-blue-400 dark:group-hover:border-blue-500"
										asChild
									>
										<Link href="#" target="_blank" rel="noopener noreferrer">
											<Github className="h-3.5 w-3.5 mr-1" />
											<span>Source Code</span>
										</Link>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
} 