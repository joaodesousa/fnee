"use client"

import { motion } from "framer-motion"
import { Shield, ChevronRight } from "lucide-react"
import { CombinedFooter } from "@/components/sections/combined-footer"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { SocialLinks } from "@/components/social-links"
import { useState, useEffect } from "react"

export default function PrivacyPolicyPage() {
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
                <Shield size={14} className="text-[#FFCC00]" />
                <span>Privacidade</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Política de Privacidade</h1>

              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Saiba como a FNEE protege e utiliza os seus dados pessoais.
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
                <h2>Introdução</h2>
                <p>
                  A Federação Nacional dos Estudos Europeus (FNEE) está empenhada em proteger a sua privacidade. Esta
                  Política de Privacidade explica como recolhemos, utilizamos e protegemos os seus dados pessoais quando
                  utiliza o nosso website ou interage connosco.
                </p>

                <h2>Dados que recolhemos</h2>
                <p>Podemos recolher os seguintes tipos de informação:</p>
                <ul>
                  <li>Informações de identificação pessoal (nome, endereço de email, número de telefone)</li>
                  <li>Informações demográficas (idade, género, localização)</li>
                  <li>Dados de utilização do website (páginas visitadas, tempo de permanência)</li>
                  <li>Informações técnicas (endereço IP, tipo de navegador, dispositivo)</li>
                </ul>

                <h2>Como utilizamos os seus dados</h2>
                <p>Utilizamos os seus dados pessoais para:</p>
                <ul>
                  <li>Fornecer e melhorar os nossos serviços</li>
                  <li>Comunicar consigo sobre eventos, notícias e atualizações</li>
                  <li>Processar inscrições em eventos e atividades</li>
                  <li>Realizar pesquisas e análises para melhorar a nossa oferta</li>
                  <li>Cumprir obrigações legais</li>
                </ul>

                <h2>Base legal para o processamento</h2>
                <p>Processamos os seus dados pessoais com base em:</p>
                <ul>
                  <li>O seu consentimento</li>
                  <li>A necessidade de cumprir um contrato consigo</li>
                  <li>Os nossos interesses legítimos</li>
                  <li>Obrigações legais</li>
                </ul>

                <h2>Partilha de dados</h2>
                <p>Não vendemos os seus dados pessoais a terceiros. Podemos partilhar os seus dados com:</p>
                <ul>
                  <li>Prestadores de serviços que nos ajudam a operar o website e os nossos serviços</li>
                  <li>Parceiros com quem colaboramos em eventos e projetos</li>
                  <li>Autoridades públicas quando exigido por lei</li>
                </ul>

                <h2>Segurança dos dados</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados pessoais
                  contra acesso não autorizado, perda ou alteração.
                </p>

                <h2>Os seus direitos</h2>
                <p>Tem os seguintes direitos relativamente aos seus dados pessoais:</p>
                <ul>
                  <li>Direito de acesso</li>
                  <li>Direito de retificação</li>
                  <li>Direito ao apagamento</li>
                  <li>Direito à limitação do tratamento</li>
                  <li>Direito à portabilidade dos dados</li>
                  <li>Direito de oposição</li>
                  <li>Direito de retirar o consentimento</li>
                </ul>

                <h2>Período de conservação</h2>
                <p>
                  Conservamos os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as
                  quais foram recolhidos, a menos que a lei exija ou permita um período de retenção mais longo.
                </p>

                <h2>Cookies</h2>
                <p>
                  O nosso website utiliza cookies para melhorar a sua experiência. Para mais informações, consulte a
                  nossa{" "}
                  <a href="/cookies" className="text-[#003399] hover:text-[#003399]/70">
                    Política de Cookies
                  </a>
                  .
                </p>

                <h2>Alterações a esta política</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas
                  nesta página com a data de atualização.
                </p>

                <h2>Contacto</h2>
                <p>
                  Se tiver alguma questão sobre esta Política de Privacidade ou sobre como tratamos os seus dados
                  pessoais, entre em contacto connosco através do email:{" "}
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

