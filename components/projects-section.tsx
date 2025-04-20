"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center animate-fade-in">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-cyan-800 dark:from-cyan-900/50 dark:to-blue-900/50 dark:text-cyan-300 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">My recent work</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800 animate-scale-in">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-teal-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <Image
                src="/temp.png"
                width={500}
                height={300}
                alt="Project 1"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <CardContent className="flex flex-1 flex-col p-8">
              <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">E-Commerce Platform</h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                A full-stack e-commerce solution with advanced product filtering, user authentication, and payment
                processing.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                  asChild
                >
                  <Link href="#">
                    <span>View Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                  asChild
                >
                  <Link href="#">
                    <span>Source Code</span>
                    <Github className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800 animate-scale-in">
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
            <CardContent className="flex flex-1 flex-col p-8">
              <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Task Management App</h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                A productivity application with real-time collaboration features, task prioritization, and progress
                tracking.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                  asChild
                >
                  <Link href="#">
                    <span>View Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                  asChild
                >
                  <Link href="#">
                    <span>Source Code</span>
                    <Github className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="group overflow-hidden border-cyan-200 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl dark:border-cyan-900 dark:bg-slate-900/50 dark:hover:border-cyan-800 animate-scale-in">
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
            <CardContent className="flex flex-1 flex-col p-8">
              <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">EdTech Startup</h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                An educational technology platform connecting students with tutors, featuring video conferencing and
                interactive learning tools.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                  asChild
                >
                  <Link href="#">
                    <span>View Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cyan-200 hover:bg-cyan-100/50 dark:border-cyan-800 dark:hover:bg-cyan-900/20 transition-all duration-300 inline-flex items-center gap-1"
                  asChild
                >
                  <Link href="#">
                    <span>Source Code</span>
                    <Github className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 