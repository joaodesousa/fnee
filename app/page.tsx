"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { LanguageToggle } from "@/components/language-toggle"
import { SocialLinks } from "@/components/social-links"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { EventsSection } from "@/components/sections/events-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CombinedFooter } from "@/components/sections/combined-footer"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHidden, setCursorHidden] = useState(true)
  const isMobile = useMobile()
  const mainRef = useRef<HTMLDivElement>(null)
  // Add a state for tracking scroll position
  const [scrolled, setScrolled] = useState(false)

  // Handle cursor movement
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setCursorHidden(false)
    }

    const handleMouseLeave = () => {
      setCursorHidden(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isMobile])

  // Handle scroll for section detection
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return

      // Track if page is scrolled for navbar background
      setScrolled(window.scrollY > 50)

      const scrollPosition = window.scrollY + window.innerHeight / 3

      const sections = mainRef.current.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "events", label: "Eventos" },
    { id: "contact", label: "Contacto" },
  ]

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Custom Cursor */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
          animate={{
            x: cursorPosition.x - 24,
            y: cursorPosition.y - 24,
            opacity: cursorHidden ? 0 : 1,
            scale: menuOpen ? 1.5 : 1,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-[#003399]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="container flex items-center justify-between py-6">
          <button onClick={() => scrollToSection("home")} className="text-white font-bold text-xl tracking-tight">
            FNEE
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider",
                  activeSection === item.id && "text-white font-medium",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="text-white w-10 h-10 flex items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-30 bg-[#003399] flex flex-col pt-16" // Added pt-16 to prevent overlap
        initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
        animate={{
          clipPath: menuOpen ? "circle(150% at calc(100% - 40px) 40px)" : "circle(0% at calc(100% - 40px) 40px)",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container flex-1 flex flex-col justify-center">
          <nav className="space-y-6 py-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white text-4xl sm:text-5xl font-bold hover:text-[#FFCC00] transition-colors flex items-center gap-4"
                >
                  <span className="text-[#FFCC00] opacity-60 text-lg">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </button>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="mt-auto py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: menuOpen ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </motion.div>

      <main ref={mainRef} className="relative">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <EventsSection />
        <ContactSection />
      </main>

      <CombinedFooter scrollToSection={scrollToSection} />
    </>
  )
}

