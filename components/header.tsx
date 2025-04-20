"use client"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Stan van Baarsen</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className={`transition-all duration-300 hover:text-foreground/80 text-foreground/60 ${
                activeSection === "about" 
                  ? "text-blue-500 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/30 px-3 py-1.5 rounded-full shadow-sm" 
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className={`transition-all duration-300 hover:text-foreground/80 text-foreground/60 ${
                activeSection === "projects" 
                  ? "text-blue-500 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/30 px-3 py-1.5 rounded-full shadow-sm" 
                  : ""
              }`}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`transition-all duration-300 hover:text-foreground/80 text-foreground/60 ${
                activeSection === "contact" 
                  ? "text-blue-500 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-950/30 px-3 py-1.5 rounded-full shadow-sm" 
                  : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-blue-500 dark:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
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
              className="text-blue-500 dark:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
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