"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"

interface CombinedFooterProps {
  scrollToSection: (id: string) => void
}

export function CombinedFooter({ scrollToSection }: CombinedFooterProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail("")
    }
  }

  return (
    <footer className="relative bg-[#002266] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="eu-stars" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="3" fill="#FFCC00" />
              <circle cx="50" cy="50" r="2" fill="#FFCC00" />
              <circle cx="150" cy="50" r="2" fill="#FFCC00" />
              <circle cx="50" cy="150" r="2" fill="#FFCC00" />
              <circle cx="150" cy="150" r="2" fill="#FFCC00" />
              <circle cx="25" cy="100" r="1.5" fill="#FFCC00" />
              <circle cx="175" cy="100" r="1.5" fill="#FFCC00" />
              <circle cx="100" cy="25" r="1.5" fill="#FFCC00" />
              <circle cx="100" cy="175" r="1.5" fill="#FFCC00" />
              <circle cx="75" cy="75" r="1" fill="#FFCC00" />
              <circle cx="125" cy="75" r="1" fill="#FFCC00" />
              <circle cx="75" cy="125" r="1" fill="#FFCC00" />
              <circle cx="125" cy="125" r="1" fill="#FFCC00" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#eu-stars)" />
          </svg>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#003399] to-[#001133]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#001133] to-transparent"></div>
      </div>

      {/* Contact Section */}
      

      {/* Newsletter Section */}
      <div className="relative py-16 border-t border-white/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Mantenha-se informado</h2>
              <p className="text-white/70">
                Subscreva a nossa newsletter para receber as últimas novidades sobre os nossos eventos, projetos e
                iniciativas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O seu email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/30"
                required
              />
              <Button type="submit" className="bg-[#FFCC00] text-[#003399] hover:bg-white group whitespace-nowrap">
                <span>Subscrever</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              {submitted && (
                <motion.div
                  className="absolute -top-12 left-0 right-0 bg-[#FFCC00]/20 backdrop-blur-sm text-white py-2 px-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Obrigado pela subscrição!
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative pt-16 pb-8 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-48 h-12 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[#FFCC00] font-bold text-xl">
                   <Image src="/logo_white.png" alt="FNEE" width={450} height={50} />
                  </div>
                </div>
              </div>

              <p className="text-white/70 mb-6 max-w-md">
                Promovemos o debate, a investigação e a participação ativa dos jovens nas questões europeias,
                contribuindo para uma cidadania europeia mais informada e participativa.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 text-xs">
                  #EstudosEuropeus
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 text-xs">
                  #JovensEuropeus
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 text-xs">
                  #UniãoEuropeia
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/80 text-xs">
                  #Portugal
                </div>
              </div>
            </div>

            <div className="col-span-6 md:col-span-4 lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-4">Navegação</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Projetos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("events")}
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Eventos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-4 lg:col-span-2">
              <h3 className="text-lg font-bold text-white mb-4">Recursos</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Publicações
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Estudos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Materiais Educativos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-[#FFCC00] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <h3 className="text-lg font-bold text-white mb-4">Parceiros</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg flex items-center justify-center">
                  <div className="relative w-full aspect-square">
                    <Image src="/images/partner-eu.png" alt="União Europeia" fill className="object-contain" />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg flex items-center justify-center">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/images/partner-parliament.png"
                      alt="Parlamento Europeu"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg flex items-center justify-center">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/images/partner-europe-direct.png"
                      alt="Europe Direct"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg flex items-center justify-center">
                  <div className="relative w-full aspect-square">
                    <Image src="/images/partner-university.png" alt="Universidade" fill className="object-contain" />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg flex items-center justify-center">
                  <div className="relative w-full aspect-square">
                    <Image src="/images/partner-fundao.png" alt="Fundação" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Federação Nacional dos Estudos Europeus. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Termos e Condições
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Cookies
              </Link>
              <Image src="/outplay.png" alt="OUTPLAY" height={20} width={80}  />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

