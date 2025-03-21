"use client"

import { motion } from "framer-motion"
import { Cookie, ChevronRight } from "lucide-react"
import { CombinedFooter } from "@/components/sections/combined-footer"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { SocialLinks } from "@/components/social-links"
import { useState, useEffect } from "react"

export default function CookiesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-[#003399]/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="container flex items-center justify-between py-6">
          <Link href="/" className="text-white font-bold text-xl tracking-tight">
            FNEE
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Início
            </Link>
            <Link
              href="/#about"
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Sobre
            </Link>
            <Link
              href="/#projects"
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Projetos
            </Link>
            <Link
              href="/#events"
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Eventos
            </Link>
            <Link
              href="/#contact"
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Contacto
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
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
        className="fixed inset-0 z-30 bg-[#003399] flex flex-col pt-16"
        initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
        animate={{
          clipPath: menuOpen ? "circle(150% at calc(100% - 40px) 40px)" : "circle(0% at calc(100% - 40px) 40px)",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container flex-1 flex flex-col justify-center">
          <nav className="space-y-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Link
                href="/"
                className="text-white text-4xl sm:text-5xl font-bold hover:text-[#FFCC00] transition-colors flex items-center gap-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[#FFCC00] opacity-60 text-lg">01</span>
                Início
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link
                href="/#about"
                className="text-white text-4xl sm:text-5xl font-bold hover:text-[#FFCC00] transition-colors flex items-center gap-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[#FFCC00] opacity-60 text-lg">02</span>
                Sobre
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/#projects"
                className="text-white text-4xl sm:text-5xl font-bold hover:text-[#FFCC00] transition-colors flex items-center gap-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[#FFCC00] opacity-60 text-lg">03</span>
                Projetos
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link
                href="/#events"
                className="text-white text-4xl sm:text-5xl font-bold hover:text-[#FFCC00] transition-colors flex items-center gap-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[#FFCC00] opacity-60 text-lg">04</span>
                Eventos
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/#contact"
                className="text-white text-4xl sm:text-5xl font-bold hover:text-[#FFCC00] transition-colors flex items-center gap-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-[#FFCC00] opacity-60 text-lg">05</span>
                Contacto
              </Link>
            </motion.div>
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

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#002266] via-[#003399] to-[#0044cc] py-20 pt-36 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
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
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-6">
                <Cookie size={14} className="text-[#FFCC00]" />
                <span>Cookies</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Política de Cookies</h1>

              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Saiba como utilizamos cookies e tecnologias semelhantes no nosso website.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => scrollToSection("content")}
                  className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
                >
                  <span className="text-xs uppercase tracking-widest mb-2">Ler mais</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ChevronRight size={20} className="rotate-90" />
                  </motion.div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Content Section */}
        <section id="content" className="py-16 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-blue">
                <h2>O que são cookies?</h2>
                <p>
                  Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet ou
                  telemóvel) quando visita um website. Os cookies são amplamente utilizados para fazer os websites
                  funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do website.
                </p>

                <h2>Como utilizamos os cookies</h2>
                <p>Utilizamos cookies para:</p>
                <ul>
                  <li>Garantir o funcionamento adequado do website</li>
                  <li>Lembrar as suas preferências</li>
                  <li>Melhorar a sua experiência de navegação</li>
                  <li>Analisar como o website é utilizado para podermos melhorá-lo</li>
                  <li>Personalizar o conteúdo e os anúncios que vê</li>
                </ul>

                <h2>Tipos de cookies que utilizamos</h2>

                <h3>Cookies essenciais</h3>
                <p>
                  Estes cookies são necessários para o funcionamento básico do website. Permitem-lhe navegar pelo
                  website e utilizar as suas funcionalidades. Sem estes cookies, o website não funcionaria corretamente.
                </p>

                <h3>Cookies de preferências</h3>
                <p>
                  Estes cookies permitem que o website se lembre das escolhas que fez no passado, como o idioma
                  preferido, a região onde se encontra ou as suas preferências de visualização.
                </p>

                <h3>Cookies estatísticos</h3>
                <p>
                  Estes cookies ajudam-nos a compreender como os visitantes interagem com o website, recolhendo e
                  reportando informações anonimamente. Isto ajuda-nos a melhorar o website.
                </p>

                <h3>Cookies de marketing</h3>
                <p>
                  Estes cookies são utilizados para rastrear os visitantes em diferentes websites. A intenção é exibir
                  anúncios que sejam relevantes e envolventes para o utilizador individual.
                </p>

                <h2>Cookies de terceiros</h2>
                <p>
                  Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas. Utilizamos
                  serviços de terceiros para:
                </p>
                <ul>
                  <li>Análise de tráfego (Google Analytics)</li>
                  <li>Redes sociais (Facebook, Twitter, LinkedIn)</li>
                  <li>Vídeos incorporados (YouTube, Vimeo)</li>
                </ul>

                <h2>Como gerir os cookies</h2>
                <p>
                  A maioria dos navegadores web permite algum controlo da maioria dos cookies através das configurações
                  do navegador. Para saber mais sobre cookies, incluindo como ver quais cookies foram definidos e como
                  geri-los e eliminá-los, visite{" "}
                  <a
                    href="https://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#003399] hover:text-[#003399]/70"
                  >
                    www.allaboutcookies.org
                  </a>
                  .
                </p>

                <p>
                  Pode configurar o seu navegador para recusar todos os cookies, aceitar apenas alguns cookies ou
                  avisá-lo quando um website tenta colocar um cookie no seu dispositivo. No entanto, desativar cookies
                  pode impedir que algumas partes do nosso website funcionem corretamente.
                </p>

                <h2>Alterações à nossa política de cookies</h2>
                <p>
                  Podemos atualizar a nossa política de cookies periodicamente. Quaisquer alterações serão publicadas
                  nesta página com a data de atualização.
                </p>

                <h2>Contacto</h2>
                <p>
                  Se tiver alguma questão sobre a nossa utilização de cookies, entre em contacto connosco através do
                  email:{" "}
                  <a href="mailto:privacidade@fnee.pt" className="text-[#003399] hover:text-[#003399]/70">
                    privacidade@fnee.pt
                  </a>
                </p>

                <p className="text-sm text-gray-500 mt-8">Última atualização: 21 de março de 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CombinedFooter scrollToSection={scrollToSection} />
    </>
  )
}

