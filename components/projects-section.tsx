"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Globe, Instagram, Atom } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectsSection() {
	return (
		<section id="projects" className="relative py-10 overflow-hidden w-full">
			<div className="container mx-auto px-4 md:px-6 relative z-10 max-w-[1280px]">
				<div className="mb-16 flex flex-col items-center text-center animate-fade-in">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl text-blue-600 dark:text-blue-400">My recent work</h2>
				</div>

				<div className="flex flex-wrap justify-center gap-8 w-full">
					<div className="transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
						<Card className="group overflow-hidden border-purple-600 dark:border-purple-400 bg-white dark:bg-slate-900 shadow-lg hover:border-purple-500 hover:shadow-lg dark:hover:border-purple-300 animate-scale-in delay-200 h-full transition-all duration-500">
							<div className="relative aspect-video overflow-hidden">
								<div className="h-full w-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/30">
									<div className="flex items-center justify-center w-20 h-20 rounded-full bg-purple-200 dark:bg-purple-800/50 text-purple-600 dark:text-purple-400">
										<Atom className="w-10 h-10" />
									</div>
								</div>
							</div>
							<CardContent className="p-6 flex flex-col flex-grow">
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 transition-all duration-300">
											<Link href="https://theses.liacs.nl/2918" target="_blank" rel="noopener noreferrer" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
												Thesis: Quantum State Preparation
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										For my computer science bachelor's thesis, I tackled a theoretical problem in quantum computing with no prior background. I self-taught all concepts, designed and executed research independently, and built a C++ repository for quantum state preparation algorithms.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
										<span className="inline-flex items-center rounded-full border border-transparent bg-purple-100 dark:bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-800 dark:text-purple-300">
											C++
										</span>
										<span className="inline-flex items-center rounded-full border border-transparent bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1 text-xs font-medium text-indigo-800 dark:text-indigo-300">
											Quantum Algorithms
										</span>
										<span className="inline-flex items-center rounded-full border border-transparent bg-blue-100 dark:bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-300">
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
						<Card className="group overflow-hidden border-amber-600 dark:border-amber-400 bg-white dark:bg-slate-900 shadow-lg hover:border-amber-500 hover:shadow-lg dark:hover:border-amber-300 animate-scale-in delay-300 h-full transition-all duration-500">
							<div className="relative aspect-video overflow-hidden">
								<div className="h-full w-full flex items-center justify-center bg-amber-100 dark:bg-amber-900/30">
									<div className="flex items-center justify-center w-20 h-20 rounded-full bg-amber-200 dark:bg-amber-800/50 text-amber-600 dark:text-amber-400">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
											<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
											<polyline points="9 22 9 12 15 12 15 22"></polyline>
										</svg>
									</div>
								</div>
							</div>
							<CardContent className="p-6 flex flex-col flex-grow">
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 transition-all duration-300">
											<Link href="#" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
												Thesis: Imputed Rent Taxation
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										For my international business bachelor's thesis, I built a simulation model to analyze the distributional effects of the lowering of the imputed rent tax in the Netherlands between 2018 and 2023. The findings showed that the far majority of the tax relief went to the wealthiest 20%, while house prices rose, making homeownership much harder for new buyers.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
										<span className="inline-flex items-center rounded-full border border-transparent bg-amber-100 dark:bg-amber-900/50 px-3 py-1 text-xs font-medium text-amber-800 dark:text-amber-300">
											Public Economics
										</span>
										<span className="inline-flex items-center rounded-full border border-transparent bg-yellow-100 dark:bg-yellow-900/50 px-3 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-300">
											Python Modeling
										</span>
										<span className="inline-flex items-center rounded-full border border-transparent bg-orange-100 dark:bg-orange-900/50 px-3 py-1 text-xs font-medium text-orange-800 dark:text-orange-300">
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
						<Card className="group overflow-hidden border-cyan-600 dark:border-cyan-400 bg-white dark:bg-slate-900 shadow-lg hover:border-cyan-500 hover:shadow-lg dark:hover:border-cyan-300 animate-scale-in delay-100 h-full transition-all duration-500">
							<div className="relative aspect-video overflow-hidden">
								<Image
									src="/td-banner.png"
									width={500}
									height={300}
									alt="Project 2"
									className="h-full w-full object-cover"
								/>
							</div>
							<CardContent className="p-6 flex flex-col flex-grow">
								<div className="flex flex-col flex-grow">
									<div className="mb-4">
										<h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300">
											<Link href="https://timmerdorp.com" target="_blank" rel="noopener noreferrer" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
												Timmerdorp Heiloo
											</Link>
										</h3>
									</div>
									<p className="text-muted-foreground">
										Together with Stephan Hoogland, we manage all IT applications for Timmerdorp Heiloo (an annual event), including the website, web shop, and mobile app.
									</p>
								</div>
								<div className="mt-auto pt-6">
									<div className="flex flex-wrap gap-2 justify-center mb-4">
										<span className="inline-flex items-center rounded-full border border-transparent bg-cyan-100 dark:bg-cyan-900/50 px-3 py-1 text-xs font-medium text-cyan-800 dark:text-cyan-300">
											React Native
										</span>
										<span className="inline-flex items-center rounded-full border border-transparent bg-teal-100 dark:bg-teal-900/50 px-3 py-1 text-xs font-medium text-teal-800 dark:text-teal-300">
											Nuxt
										</span>
										<span className="inline-flex items-center rounded-full border border-transparent bg-blue-100 dark:bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-300">
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