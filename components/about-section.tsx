"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative py-6 md:py-8 overflow-hidden px-12">
      <div className="container mx-auto relative z-10 px-4 md:px-6 w-full">
        <div className="mb-16 flex flex-col items-center text-center animate-fade-in">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-1.5 text-sm font-medium text-cyan-800 dark:from-cyan-900/50 dark:to-blue-900/50 dark:text-cyan-300 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Background</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">About me</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative animate-slide-up delay-200">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full animate-pulse"></div>
            <div className="space-y-6">
              <p className="leading-7 text-lg transition-colors duration-300">
                I'm Stan van Baarsen, currently studying a master's in Technology Policy at the University of Cambridge. After graduating this summer, I plan to focus full time on building a startup. I'm driven by how ventures can create meaningful change at the intersection of technology, policy, and society.
              </p>
              <p className="leading-7 text-lg transition-colors duration-300">
                I completed two bachelor's degrees — in Computer Science at Leiden University and International Business Administration at Vrije Universiteit Amsterdam — with a focus on political and public economics. I also studied abroad in New York to broaden my global perspective.
              </p>
              <p className="leading-7 text-lg transition-colors duration-300">
                I'm passionate about the intersection of innovation, economic policy, and society. In particular, I care about European challenges like digital sovereignty, fostering a European startup ecosystem, and the future of AI regulation.
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center animate-slide-up delay-300 p-6">
            <div className="absolute inset-10 rounded-2xl bg-gradient-to-r from-blue-500/15 to-blue-700/15 blur-lg"></div>
            <div className="relative overflow-hidden rounded-xl border border-blue-200 dark:border-blue-800 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20">
              <Image
                src="/downing.jpg"
                width={600}
                height={400}
                alt="Stan working"
                className="w-full transition-all duration-500 hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 