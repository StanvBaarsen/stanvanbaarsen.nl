"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Sparkles, Globe, Instagram, Atom } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectsSection() {
	return (
		<section id="projects" className="relative py-10 overflow-hidden w-full">
			<div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1280px]">
				<div className="mb-16 flex flex-col items-center text-center animate-fade-in">
					<div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-cyan-800 dark:from-cyan-900/50 dark:to-blue-900/50 dark:text-cyan-300 shadow-sm">
						<Sparkles className="h-3.5 w-3.5" />
						<span>Featured Projects</span>
					</div>
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">My recent work</h2>
				</div>

				<div className="flex flex-wrap justify-center gap-8 w-full">
					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
						<Card className="group overflow-hidden border-blue-500 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-purple-300 hover:shadow-[0_12px_30px_rgba(147,_51,_234,_0.4)] dark:border-purple-900 dark:bg-slate-900/50 dark:hover:border-purple-800 animate-scale-in delay-200 h-full transition-all duration-500">
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
								<div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
									<div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-200 dark:bg-purple-800/50 text-purple-600 dark:text-purple-400">
										<Atom className="w-10 h-10" />
									</div>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
							</div>
							<CardContent className="p-6 flex flex-col h-full" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 transition-all duration-300">
											<Link href="https://theses.liacs.nl/2918" target="_blank" rel="noopener noreferrer" className="hover:underline">
												Thesis: Quantum State Preparation
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										For my CS bachelor's thesis, I tackled a theoretical problem in quantum computing with no prior background. I self-taught all concepts, designed and executed research independently, and built a C++ repository for quantum state preparation algorithms.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
										<span className="inline-flex items-center rounded-full bg-purple-100/50 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 transition-all duration-300 group-hover:bg-purple-200/70 dark:group-hover:bg-purple-800/70">
											C++
										</span>
										<span className="inline-flex items-center rounded-full bg-indigo-100/50 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 transition-all duration-300 group-hover:bg-indigo-200/70 dark:group-hover:bg-indigo-800/70">
											Quantum Algorithms
										</span>
										<span className="inline-flex items-center rounded-full bg-blue-100/50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 transition-all duration-300 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70">
											Research
										</span>
									</div>
									<div className="flex gap-2 justify-center">
										<Button
											variant="outline"
											size="sm"
											className="border-purple-500 hover:bg-purple-500 hover:text-white dark:border-purple-600 dark:hover:bg-purple-600 transition-all duration-300 inline-flex items-center gap-1"
											asChild
										>
											<Link href="https://theses.liacs.nl/2918" target="_blank" rel="noopener noreferrer">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 mr-1">
													<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
													<polyline points="14 2 14 8 20 8"></polyline>
												</svg>
												<span>View Thesis</span>
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
						<Card className="group overflow-hidden border-blue-500 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-blue-300 hover:shadow-[0_12px_30px_rgba(30,_150,_230,_0.4)] dark:border-blue-900 dark:bg-slate-900/50 dark:hover:border-blue-800 animate-scale-in h-full transition-all duration-500">
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
							<CardContent className="p-6 flex flex-col h-full" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300">
											<Link href="https://getfig.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
												Fig: AI-Powered Career Exploration
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										An AI-driven and community-based career exploration platform that helps users navigate their paths through personalized guidance, structured roadmaps, and industry-specific insights.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
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
									<div className="flex gap-2 justify-center">
										<Button
											variant="outline"
											size="sm"
											className="border-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-600 dark:hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-1"
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
											className="border-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-600 dark:hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-1"
											asChild
										>
											<Link href="https://instagram.com/getfigapp" target="_blank" rel="noopener noreferrer">
												<Instagram className="h-3.5 w-3.5 mr-1" />
												<span>Instagram</span>
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
						<Card className="group overflow-hidden border-blue-500 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-amber-300 hover:shadow-[0_12px_30px_rgba(251,_191,_36,_0.4)] dark:border-amber-900 dark:bg-slate-900/50 dark:hover:border-amber-800 animate-scale-in delay-300 h-full transition-all duration-500">
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-yellow-500/20 to-orange-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
								<div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30">
									<div className="flex items-center justify-center w-20 h-20 rounded-full bg-amber-200 dark:bg-amber-800/50 text-amber-600 dark:text-amber-400">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
											<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
											<polyline points="9 22 9 12 15 12 15 22"></polyline>
										</svg>
									</div>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
							</div>
							<CardContent className="p-6 flex flex-col h-full" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 transition-all duration-300">
											<Link href="#" className="hover:underline">
												Thesis: Imputed Rent Taxation
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										For my international business thesis, I built a simulation model to analyze the distributional effects of the lowering of the imputed rent tax in the Netherlands between 2018 and 2023. The findings showed that most of the tax relief went to the wealthiest 20%, while house prices rose—making homeownership harder for new buyers.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
										<span className="inline-flex items-center rounded-full bg-amber-100/50 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 transition-all duration-300 group-hover:bg-amber-200/70 dark:group-hover:bg-amber-800/70">
											Public Economics
										</span>
										<span className="inline-flex items-center rounded-full bg-yellow-100/50 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 transition-all duration-300 group-hover:bg-yellow-200/70 dark:group-hover:bg-yellow-800/70">
											Python Modeling
										</span>
										<span className="inline-flex items-center rounded-full bg-orange-100/50 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/50 dark:text-orange-300 transition-all duration-300 group-hover:bg-orange-200/70 dark:group-hover:bg-orange-800/70">
											Policy Analysis
										</span>
									</div>
									<div className="flex gap-2 justify-center">
										<Button
											variant="outline"
											size="sm"
											className="border-amber-500 hover:bg-amber-500 hover:text-white dark:border-amber-600 dark:hover:bg-amber-600 transition-all duration-300 inline-flex items-center gap-1"
											asChild
										>
											<Link href="/iba_thesis.pdf" target="_blank" rel="noopener noreferrer">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 mr-1">
													<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
													<polyline points="14 2 14 8 20 8"></polyline>
												</svg>
												<span>View Thesis</span>
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
						<Card className="group overflow-hidden border-blue-500 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-green-300 hover:shadow-[0_12px_30px_rgba(30,_215,_96,_0.4)] dark:border-green-900 dark:bg-slate-900/50 dark:hover:border-green-800 animate-scale-in delay-100 h-full transition-all duration-500">
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-400/20 to-emerald-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
								<Image
									src="/spotifyplayer.png"
									width={500}
									height={300}
									alt="Spotify Player"
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
							</div>
							<CardContent className="p-6 flex flex-col h-full" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-green-600 dark:text-green-400 transition-all duration-300">
											<Link href="https://stans-spotify-player.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
												Custom Spotify Player
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										A custom Spotify player that integrates with the Spotify API that not only lets users control playback but also allows users to see extra statistics about their listening habits.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
										<span className="inline-flex items-center rounded-full bg-green-100/50 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/50 dark:text-green-300 transition-all duration-300 group-hover:bg-green-200/70 dark:group-hover:bg-green-800/70">
											Netlify Functions
										</span>
										<span className="inline-flex items-center rounded-full bg-emerald-100/50 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 transition-all duration-300 group-hover:bg-emerald-200/70 dark:group-hover:bg-emerald-800/70">
											JavaScript
										</span>
										<span className="inline-flex items-center rounded-full bg-lime-100/50 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/50 dark:text-lime-300 transition-all duration-300 group-hover:bg-lime-200/70 dark:group-hover:bg-lime-800/70">
											Spotify API
										</span>
									</div>
									<div className="flex gap-2 justify-center">
										<Button
											variant="outline"
											size="sm"
											className="border-green-500 hover:bg-green-500 hover:text-white dark:border-green-600 dark:hover:bg-green-600 transition-all duration-300 inline-flex items-center gap-1"
											asChild
										>
											<Link href="https://stans-spotify-player.netlify.app" target="_blank" rel="noopener noreferrer">
												<Globe className="h-3.5 w-3.5 mr-1" />
												<span>View Demo</span>
											</Link>
										</Button>
										<Button
											variant="outline"
											size="sm"
											className="border-green-500 hover:bg-green-500 hover:text-white dark:border-green-600 dark:hover:bg-green-600 transition-all duration-300 inline-flex items-center gap-1"
											asChild
										>
											<Link href="http://github.com/StanvBaarsen/StansSpotifyClient" target="_blank" rel="noopener noreferrer">
												<Github className="h-3.5 w-3.5 mr-1" />
												<span>Source Code</span>
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
						<Card className="group overflow-hidden border-blue-500 bg-white/50 backdrop-blur-sm shadow-[0_4px_12px_rgba(8,_112,_184,_0.2)] hover:border-cyan-300 hover:shadow-[0_12px_30px_rgba(30,_150,_230,_0.4)] dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800 animate-scale-in delay-100 h-full transition-all duration-500">
							<div className="relative h-48 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-teal-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
								<Image
									src="/td-banner.png"
									width={500}
									height={300}
									alt="Project 2"
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							</div>
							<CardContent className="p-6 flex flex-col h-full" style={{ height: 'calc(100% - 12rem)' }}>
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300">
											<Link href="https://timmerdorp.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
												Timmerdorp Heiloo
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										Led all IT operations for Timmerdorp Heiloo (an annual event) with Stephan Hoogland, including building and maintaining the website, web shop, and mobile app.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
										<span className="inline-flex items-center rounded-full bg-cyan-100/50 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300 transition-all duration-300 group-hover:bg-cyan-200/70 dark:group-hover:bg-cyan-800/70">
											React Native
										</span>
										<span className="inline-flex items-center rounded-full bg-teal-100/50 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 transition-all duration-300 group-hover:bg-teal-200/70 dark:group-hover:bg-teal-800/70">
											Nuxt
										</span>
										<span className="inline-flex items-center rounded-full bg-blue-100/50 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 transition-all duration-300 group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70">
											Parse Server
										</span>
									</div>
									<div className="flex flex-wrap gap-2 justify-center">
										<Button
											variant="outline"
											size="sm"
											className="border-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-600 dark:hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-1"
											asChild
										>
											<Link href="https://shop.timmerdorp.com" target="_blank" rel="noopener noreferrer">
												<Globe className="h-3.5 w-3.5 mr-1" />
												<span>Web Shop</span>
											</Link>
										</Button>
										<Button
											variant="outline"
											size="sm"
											className="border-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-600 dark:hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-1"
											asChild
										>
											<Link href="https://github.com/SHoogland/timmerdorp-web-app" target="_blank" rel="noopener noreferrer">
												<Github className="h-3.5 w-3.5 mr-1" />
												<span>App Source</span>
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
} 