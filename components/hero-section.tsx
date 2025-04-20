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
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -left-20 -top-20 h-[40rem] w-[40rem] rounded-full bg-blue-200 blur-3xl dark:bg-blue-900"></div>
        <div className="absolute -bottom-32 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-200 blur-3xl dark:bg-blue-900"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] w-[20rem] rounded-full bg-blue-100 blur-3xl dark:bg-blue-800"></div>
      </div>
      <div className="container mx-auto relative z-10 grid items-center gap-6 px-4 pb-20 pt-16 md:px-6 md:py-8 lg:py-32 w-full">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <h1 className={`text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl lg:text-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Stan van Baarsen
              </span>
            </h1>
            <p className={`mt-4 max-w-[700px] text-center text-lg text-muted-foreground md:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Student • Software Engineer • Building Fig
            </p>
            <div className={`mt-8 flex gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-500/25 hover:scale-105 group"
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
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-700/30 blur-xl"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-700/20 blur-lg"></div>
              <Image
                src="/headshot.jpg"
                alt="Stan van Baarsen"
                width={200}
                height={200}
                className="relative rounded-full border-4 border-white shadow-xl dark:border-slate-800 transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-slate-950 dark:to-transparent"></div>
    </section>
  )
} 