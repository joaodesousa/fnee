"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { LanguageToggle } from "@/components/language-toggle"
import { SocialLinks } from "@/components/social-links"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { EventsSection } from "@/components/sections/events-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CombinedFooter } from "@/components/sections/combined-footer"
import Image from "next/image"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHidden, setCursorHidden] = useState(true)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
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
    let ticking = false
    let lastScrollY = 0

    const handleScroll = () => {
      lastScrollY = window.scrollY

      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scrolled state for navbar background
          setScrolled(lastScrollY > 50)

          if (!mainRef.current) return

          const scrollPosition = lastScrollY + window.innerHeight / 3
          const sections = mainRef.current.querySelectorAll("section[id]")

          sections.forEach((section) => {
            const sectionTop = (section as HTMLElement).offsetTop
            const sectionHeight = (section as HTMLElement).offsetHeight
            const sectionId = section.getAttribute("id") || ""

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(sectionId)
            }
          })

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Update the navItems array to include the Departamentos page
  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "events", label: "Eventos" },
    { id: "contact", label: "Contacto" },
    { href: "/departamentos", label: "Departamentos" },
  ]

  // Modify the scrollToSection function to handle both section scrolling and navigation
  const scrollToSection = (id: string, href?: string) => {
    setMenuOpen(false)

    // If href is provided, navigate to that page
    if (href) {
      window.location.href = href
      return
    }

    // Otherwise scroll to the section on the current page
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      // Use smooth scrolling with custom duration based on distance
      const startPosition = window.pageYOffset
      const distance = offsetPosition - startPosition
      const duration = Math.min(1000, Math.max(500, Math.abs(distance) / 2))
      const startTime = performance.now()

      function step(currentTime: number) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function: easeInOutCubic
        const easing = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

        window.scrollTo(0, startPosition + distance * easing)

        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }

      requestAnimationFrame(step)
    }
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)

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
          <Image src="/logo_white.png" alt="FNEE" width={180} height={80} />
          </button>

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

      {/* Enhanced Full-Screen Menu */}
      <motion.div
        className="fixed inset-0 z-30 flex items-center justify-center will-change-transform overflow-hidden"
        initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
        animate={{
          clipPath: menuOpen ? "circle(150% at calc(100% - 40px) 40px)" : "circle(0% at calc(100% - 40px) 40px)",
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
          type: "tween",
        }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002266] to-[#003399]">
          {/* Subtle animated circles */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#1a4dcc]/30 blur-[100px]"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[#FFCC00]/10 blur-[80px]"
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-lg mx-auto">
            {/* Decorative line */}
            <motion.div
              className="w-16 h-px bg-white/30 mx-auto mb-12"
              initial={{ width: 0 }}
              animate={{ width: menuOpen ? 64 : 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />

            <nav className="space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id || item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: menuOpen ? 1 : 0,
                    y: menuOpen ? 0 : 20,
                  }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="will-change-transform relative"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <button
                    onClick={() => (item.href ? scrollToSection("", item.href) : scrollToSection(item.id!))}
                    className="group w-full text-center relative block py-2"
                  >
                    {/* Subtle indicator dot */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-1 rounded-full bg-[#FFCC00]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoverIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Menu item text with hover effect */}
                    <motion.span
                      className="text-white text-4xl font-bold transition-colors inline-block relative"
                      animate={{
                        color: hoverIndex === index ? "#FFCC00" : "#FFFFFF",
                        y: hoverIndex === index ? -5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.label}
                    </motion.span>

                    {/* Animated underline */}
                    <motion.div
                      className="h-px bg-[#FFCC00] absolute bottom-0 left-1/2 -translate-x-1/2"
                      initial={{ width: 0 }}
                      animate={{ width: hoverIndex === index ? "20%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 20,
              }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-16 flex justify-center"
            >
              <SocialLinks />
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className="w-16 h-px bg-white/30 mx-auto mt-12"
              initial={{ width: 0 }}
              animate={{ width: menuOpen ? 64 : 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />
          </div>
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

