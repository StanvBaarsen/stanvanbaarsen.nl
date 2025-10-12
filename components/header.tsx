"use client"

import { Github, Linkedin, Menu, X, ChevronUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { ThemeToggle } from "./theme-toggle"

interface HeaderProps {
	activeSection: string
	scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void
}

export function Header({ activeSection, scrollToSection }: HeaderProps) {
	const [scrolled, setScrolled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({
		about: null,
		projects: null,
		contact: null
	});
	const indicatorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			// Show scroll to top button when scrolled down 500px
			if (offset > 500) {
				setShowScrollTop(true);
			} else {
				setShowScrollTop(false);
			}

			// Calculate scroll progress
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const progress = Math.min(Math.max(offset / height, 0), 1);
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Update the position indicator when active section changes
	useEffect(() => {
		const activeLink = navRefs.current[activeSection];
		const indicator = indicatorRef.current;

		if (activeLink && indicator) {
			const { offsetWidth, offsetLeft } = activeLink;
			indicator.style.width = `${offsetWidth}px`;
			indicator.style.transform = `translateX(${offsetLeft}px)`;
			indicator.style.opacity = '1';
		} else if (indicator) {
			indicator.style.opacity = '0';
		}
	}, [activeSection, scrolled]);

	// Close mobile menu when clicking a navigation link
	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
		scrollToSection(e, id);
		setMobileMenuOpen(false);
	};

	// Add scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<>
			<header className={`fixed top-0 inset-x-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${scrolled
					? 'border-b border-blue-100/40 dark:border-blue-900/40 bg-white/80 dark:bg-slate-950/80 py-1 shadow-sm'  /* Opacity from 90 to 80 */
					: 'bg-transparent py-2'
				}`}>
				{/* Scroll Progress Bar */}
				<div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500 transition-transform duration-150 ease-out"
					style={{
						transform: `scaleX(${scrollProgress})`,
						transformOrigin: 'left'
					}}
				/>
				<div className="absolute inset-x-0 bottom-0 h-[1px] bg-gray-200 dark:bg-gray-700"></div>
				<div className="absolute inset-0 bg-white/10 dark:bg-slate-900/10 opacity-70"></div>

				<div className="container mx-auto flex h-16 items-center relative z-10 max-w-full px-4">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							href="#"
							onClick={scrollToTop}
							className="group mr-8 flex items-center space-x-2 interactive-hover cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
						>
							<div className="relative overflow-hidden rounded-full bg-blue-600 p-1 w-8 h-8 flex items-center justify-center shadow-md">
								<span className="font-bold text-white text-sm">SB</span>
							</div>
							<span className="relative font-bold text-lg group-hover:scale-[1.01] inline-block transition-all duration-300 ease-in-out">
								<span className="relative z-10 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-all duration-300">
									Stan van Baarsen
								</span>
							</span>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center space-x-1 text-sm font-medium relative">
							{/* Moving active indicator */}
							<div
								ref={indicatorRef}
								className="absolute h-8 rounded-full bg-blue-100/60 dark:bg-blue-900/30 -z-10 transition-all duration-300 ease-in-out"
							></div>

							<Link
								ref={(el) => { navRefs.current.about = el; }}
								href="#about"
								onClick={(e) => handleNavClick(e, "about")}
								className={`interactive-hover transition-colors duration-300 px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background ${activeSection === "about"
										? "text-blue-600 dark:text-blue-400 font-semibold"
										: "text-foreground/70 hover:text-foreground"
									}`}
							>
								About
							</Link>
							<Link
								ref={(el) => { navRefs.current.projects = el; }}
								href="#projects"
								onClick={(e) => handleNavClick(e, "projects")}
								className={`interactive-hover transition-colors duration-300 px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background ${activeSection === "projects"
										? "text-blue-600 dark:text-blue-400 font-semibold"
										: "text-foreground/70 hover:text-foreground"
									}`}
							>
								Projects
							</Link>
							<Link
								ref={(el) => { navRefs.current.contact = el; }}
								href="#contact"
								onClick={(e) => handleNavClick(e, "contact")}
								className={`interactive-hover transition-colors duration-300 px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background ${activeSection === "contact"
										? "text-blue-600 dark:text-blue-400 font-semibold"
										: "text-foreground/70 hover:text-foreground"
									}`}
							>
								Contact
							</Link>
							{/* resume link: */}
							<Link
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="interactive-hover transition-colors duration-300 px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background text-foreground/70 hover:text-foreground"
							>
								Resume
							</Link>
						</nav>
					</div>

					{/* Right side - social icons and theme toggle */}
					<div className="flex flex-1 items-center justify-end space-x-2">
						<div className="hidden md:flex items-center gap-3">
							<SocialButton href="https://github.com/StanvBaarsen" icon={<Github />} label="GitHub" />
							<SocialButton href="https://linkedin.com/in/stan-van-baarsen" icon={<Linkedin />} label="LinkedIn" />
							<SocialButton href="/resume.pdf" icon={
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
									<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
									<line x1="16" y1="13" x2="8" y2="13"></line>
									<line x1="16" y1="17" x2="8" y2="17"></line>
									<line x1="10" y1="9" x2="8" y2="9"></line>
								</svg>
							} label="Resume" />
							<div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1"></div>
							<ThemeToggle />
						</div>

						{/* Mobile Menu Button */}
						<Button
							variant="ghost"
							size="icon"
							className="interactive-hover md:hidden group" /* Added group */
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? (
								<X className="h-5 w-5 transition-transform duration-150 group-hover:rotate-12" />
							) : (
								<Menu className="h-5 w-5 transition-transform duration-150 group-hover:rotate-12" />
							)}
							<span className="sr-only">Toggle menu</span>
						</Button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className="fixed inset-0 z-40 md:hidden pt-20 px-4 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl animate-fade-in"> {/* Opacity from 95 to 85 */}
						<nav className="flex flex-col items-center space-y-6 pt-8 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl"> {/* Opacity from 95 to 85 */}
							<MobileNavLink
								href="#about"
								label="About"
								active={activeSection === "about"}
								onClick={(e) => handleNavClick(e, "about")}
							/>
							<MobileNavLink
								href="#projects"
								label="Projects"
								active={activeSection === "projects"}
								onClick={(e) => handleNavClick(e, "projects")}
							/>
							<MobileNavLink
								href="#contact"
								label="Contact"
								active={activeSection === "contact"}
								onClick={(e) => handleNavClick(e, "contact")}
							/>

							<div className="flex items-center gap-6 pt-6 pb-8">
								<SocialButton href="https://github.com/StanvBaarsen" icon={<Github />} label="GitHub" />
								<SocialButton href="https://linkedin.com/in/stan-van-baarsen" icon={<Linkedin />} label="LinkedIn" />
								<SocialButton href="/resume.pdf" icon={
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
										<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
										<polyline points="14 2 14 8 20 8"></polyline>
										<line x1="16" y1="13" x2="8" y2="13"></line>
										<line x1="16" y1="17" x2="8" y2="17"></line>
										<line x1="10" y1="9" x2="8" y2="9"></line>
									</svg>
								} label="Resume" />
								<ThemeToggle />
							</div>
						</nav>
					</div>
				)}
			</header>

			{/* Scroll to top button - moved outside the header component */}
			{showScrollTop && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-blue-400/30 hover:shadow-xl animate-fade-in"
					aria-label="Scroll to top"
				>
					<ChevronUp className="h-5 w-5" />
				</button>
			)}
		</>
	)
}

// Reusable component for mobile navigation
function MobileNavLink({
	href,
	label,
	active,
	onClick
}: {
	href: string;
	label: string;
	active: boolean;
	onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className={`text-xl font-medium py-2 px-6 rounded-full transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-background ${active
					? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
					: "text-foreground/70 hover:bg-accent/20 dark:hover:bg-accent/30"
				}`}
		>
			{label}
		</Link>
	);
}

function SocialButton({
	href,
	icon,
	label
}: {
	href: string;
	icon: React.ReactNode;
	label: string
}) {
	return (
		<Button
			variant="ghost"
			size="icon"
			className="interactive-hover text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 rounded-full" /* Removed transition-all duration-300 to inherit from base Button */
			asChild
		>
			<Link href={href} target="_blank" rel="noopener noreferrer">
				{icon}
				<span className="sr-only">{label}</span>
			</Link>
		</Button>
	);
} 