"use client"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface HeaderProps {
  activeSection: string
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
      scrolled 
        ? 'border-b border-blue-100/30 dark:border-blue-900/30 bg-white/80 dark:bg-slate-950/80 py-1' 
        : 'bg-transparent py-3'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-white/5 to-cyan-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-cyan-950/20 opacity-50"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container flex h-16 items-center relative z-10">
        <div className="flex mr-4 items-center">
          <Link href="/" className="group mr-6 flex items-center space-x-2 interactive-hover">
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">Stan van Baarsen</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 animate-pulse"></div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className={`interactive-hover transition-all duration-300 hover:text-foreground/80 text-foreground/60 ${
                activeSection === "about" 
                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/30 px-3 py-1.5 rounded-full shadow-sm" 
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className={`interactive-hover transition-all duration-300 hover:text-foreground/80 text-foreground/60 ${
                activeSection === "projects" 
                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/30 px-3 py-1.5 rounded-full shadow-sm" 
                  : ""
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`interactive-hover transition-all duration-300 hover:text-foreground/80 text-foreground/60 ${
                activeSection === "contact" 
                  ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/30 px-3 py-1.5 rounded-full shadow-sm" 
                  : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="interactive-hover text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
              asChild
            >
              <Link href="https://github.com/StanvBaarsen" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="interactive-hover text-blue-600 dark:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
              asChild
            >
              <Link href="https://linkedin.com/in/stan-van-baarsen" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 