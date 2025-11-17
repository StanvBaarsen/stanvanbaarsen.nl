"use client"

import Link from "next/link"
import {
	Atom,
	ExternalLink,
	FileText,
	Github,
	Globe,
	Landmark,
	LineChart,
	type LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectLink {
	href: string
	label: string
	icon: LucideIcon
}

interface Project {
	title: string
	category: string
	description: string
	icon: LucideIcon
	links: ProjectLink[]
	dates: string
}

const projects: Project[] = [
	{
		title: "AI Policy Research at AI Plan",
		category: "Policy & Research",
		description:
			"I currently work at AI Plan, an initiative shaping the Netherlands' national strategy for artificial intelligence. I write proposals to advance Dutch AI sovereignty, innovation, and infrastructure to strengthen the country's position in the AI era, in collaboration with experts from government, industry, and academia.",
		icon: Landmark,
		links: [
			{ href: "https://www.aiplan.nl", label: "AI Plan website", icon: Globe },
		],
		dates: "June 2025 — Present",
	},
	{
		title: "Timmerdorp Heiloo",
		category: "Product & Operations",
		description:
			"I co-manage the entire tech stack for an annual event (together with <a style='color: #60a5fa' href='https://shoogland.com'>Stephan Hoogland</a>) including the website, ticket sales shop, and mobile applications for thousands of visitors and volunteers.",
		icon: Globe,
		links: [
			{ href: "https://shop.timmerdorp.com", label: "Web shop", icon: ExternalLink },
			{
				href: "https://github.com/SHoogland/timmerdorp-web-app",
				label: "App source",
				icon: Github,
			},
		],
		dates: "2018 — Present",
	},
	{
		title: "Thesis: Quantum State Preparation",
		category: "Academic Research",
		description:
			"For my computer science bachelor's thesis, I tackled a theoretical problem in quantum computing with no prior background. I self-taught all concepts, designed and executed research independently, and built an open source C++ repository for quantum state preparation algorithms.",
		icon: Atom,
		links: [
			{ href: "/cs_thesis.pdf", label: "Read thesis", icon: FileText },
		],
		dates: "July 2024"
	},
	{
		title: "Thesis: Imputed Rent Taxation",
		category: "Economic Policy",
		description:
			"For my international business bachelor's thesis, I built a simulation model to analyze the distributional effects of the lowering of the imputed rent tax in the Netherlands between 2018 and 2023. The findings showed that the far majority of the tax relief went to the wealthiest households, while house prices rose, meaning that this policy (which is still in place!) forms a significant additional barrier to homeownership.",
		icon: LineChart,
		links: [
			{ href: "/iba_thesis.pdf", label: "Read thesis", icon: FileText },
		],
		dates: "July 2024"
	},
]

export function ProjectsSection() {
	return (
		<section id="projects" className="relative py-10 overflow-hidden w-full">
			<div className="container mx-auto px-8 relative z-10 max-w-[1280px]">
				<div className="mb-16 flex flex-col items-center text-center animate-fade-in">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl text-blue-600 dark:text-blue-400">My recent work</h2>
				</div>

				<div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
					{projects.map((project) => (
						<Card
							key={project.title}
							className="group flex h-full flex-col border border-slate-200/80 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 !hover:border-blue-500 hover:shadow-lg dark:border-slate-800/80 hover:dark:border-blue-500 dark:bg-slate-900/80"
						>
							<CardContent className="flex h-full flex-col gap-6 p-6">
								<div className="flex items-start justify-between gap-4">
									<div>
										<span className="text-xs font-semibold uppercase tracking-wide text-blue-500">
											{project.dates}
										</span>
										<h3 className="mt-3 text-xl font-semibold text-slate-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-300">
											{project.title}
										</h3>
									</div>
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
										<project.icon className="h-5 w-5" />
									</div>
								</div>

								<p className="text-sm leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{__html: project.description}}/>

								<div className="mt-auto space-y-4">
									<div className="flex flex-wrap gap-3">
										{project.links.map((link) => (
											<Link
												key={`${project.title}-${link.href}`}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-slate-900/80 dark:hover:text-blue-200 dark:focus-visible:ring-offset-slate-950"
											>
												<link.icon className="h-4 w-4 transition-transform duration-200" />
												<span>{link.label}</span>
											</Link>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
		)
	}
