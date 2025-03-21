"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, BookOpen, Globe, Calendar, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CombinedFooter } from "@/components/sections/combined-footer"
import { LanguageToggle } from "@/components/language-toggle"
import { SocialLinks } from "@/components/social-links"

export default function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState("investigacao")
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

  const departments = [
    {
      id: "investigacao",
      name: "Investigação",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Coordena e desenvolve estudos e pesquisas sobre temas europeus relevantes para Portugal.",
      members: [
        { name: "Dr. Ana Silva", role: "Diretora", image: "/placeholder.svg?height=100&width=100" },
        { name: "Dr. João Martins", role: "Investigador Sénior", image: "/placeholder.svg?height=100&width=100" },
        { name: "Dra. Marta Costa", role: "Investigadora", image: "/placeholder.svg?height=100&width=100" },
      ],
      projects: [
        "Inquérito Nacional sobre a Percepção da UE",
        "Análise de Políticas Europeias",
        "Estudos de Opinião Pública",
      ],
    },
    {
      id: "eventos",
      name: "Eventos",
      icon: <Calendar className="w-6 h-6" />,
      description: "Organiza conferências, workshops e debates sobre temas europeus em todo o país.",
      members: [
        { name: "Dr. Pedro Santos", role: "Diretor", image: "/placeholder.svg?height=100&width=100" },
        { name: "Dra. Sofia Lopes", role: "Coordenadora", image: "/placeholder.svg?height=100&width=100" },
        { name: "Dr. Miguel Ferreira", role: "Gestor de Eventos", image: "/placeholder.svg?height=100&width=100" },
      ],
      projects: [
        "Encontro Nacional dos Estudos Europeus",
        "Ciclo de Conferências sobre o Futuro da Europa",
        "Workshops Interativos para Jovens",
      ],
    },
    {
      id: "educacao",
      name: "Educação",
      icon: <Globe className="w-6 h-6" />,
      description: "Desenvolve programas educativos sobre a União Europeia para escolas e universidades.",
      members: [
        { name: "Dra. Carla Rodrigues", role: "Diretora", image: "/placeholder.svg?height=100&width=100" },
        { name: "Dr. Tiago Almeida", role: "Coordenador Pedagógico", image: "/placeholder.svg?height=100&width=100" },
        { name: "Dra. Inês Sousa", role: "Formadora", image: "/placeholder.svg?height=100&width=100" },
      ],
      projects: ["Academia Europa", "Formação para Professores", "Simulações do Parlamento Europeu"],
    },
    {
      id: "comunicacao",
      name: "Comunicação",
      icon: <Mail className="w-6 h-6" />,
      description: "Responsável pela comunicação externa e divulgação das atividades da FNEE.",
      members: [
        { name: "Dr. Rui Oliveira", role: "Diretor", image: "/placeholder.svg?height=100&width=100" },
        {
          name: "Dra. Beatriz Costa",
          role: "Gestora de Redes Sociais",
          image: "/placeholder.svg?height=100&width=100",
        },
        { name: "Dr. André Soares", role: "Designer", image: "/placeholder.svg?height=100&width=100" },
      ],
      projects: ["Newsletter Mensal", "Gestão de Redes Sociais", "Produção de Conteúdos Audiovisuais"],
    },
  ]

  const activeDepartment = departments.find((dept) => dept.id === activeTab) || departments[0]

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
        <section className="relative bg-gradient-to-b from-[#002266] via-[#003399] to-[#0044cc] py-24 pt-36 overflow-hidden">
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

            <motion.div
              className="absolute bottom-1/3 right-1/4 w-[35vw] h-[35vw] rounded-full bg-[#0055ff]/20 blur-[80px]"
              animate={{
                x: [0, -40, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-6">
                <Users size={14} className="text-[#FFCC00]" />
                <span>Departamentos</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                A nossa <span className="text-[#FFCC00]">equipa</span>
              </h1>

              <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
                Conheça os departamentos da FNEE e as pessoas que trabalham diariamente para aproximar a União Europeia
                dos jovens portugueses.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setActiveTab(dept.id)}
                    className={`px-6 py-3 rounded-full flex items-center gap-2 transition-colors ${
                      activeTab === dept.id
                        ? "bg-[#FFCC00] text-[#003399] font-medium"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {dept.icon}
                    <span>{dept.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Department Details Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                  <div className="sticky top-24 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#003399]/10 flex items-center justify-center text-[#003399]">
                      {activeDepartment.icon}
                    </div>

                    <h2 className="text-3xl font-bold text-[#003399]">Departamento de {activeDepartment.name}</h2>

                    <p className="text-[#003399]/70">{activeDepartment.description}</p>

                    <Button className="bg-[#003399] text-white hover:bg-[#003399]/90 group">
                      <span>Contactar departamento</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="space-y-12">
                    {/* Team Members */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#003399] mb-6">Equipa</h3>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeDepartment.members.map((member, index) => (
                          <motion.div
                            key={member.name}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-[#003399]/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="relative h-48 bg-[#003399]/5">
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-[#003399]">{member.name}</h4>
                              <p className="text-[#003399]/70 text-sm">{member.role}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h3 className="text-2xl font-bold text-[#003399] mb-6">Projetos</h3>

                      <div className="space-y-4">
                        {activeDepartment.projects.map((project, index) => (
                          <motion.div
                            key={project}
                            className="bg-[#003399]/5 rounded-xl p-6 hover:bg-[#003399]/10 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-[#003399]">{project}</h4>
                              <Link href="/projetos/projeto-exemplo">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-[#003399] hover:text-[#003399]/70 p-0 h-auto"
                                >
                                  <ArrowRight className="h-5 w-5" />
                                </Button>
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="bg-[#003399]/5 rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-[#003399] mb-4">Contactar Departamento</h3>

                      <p className="text-[#003399]/70 mb-6">
                        Tem alguma questão ou sugestão para o Departamento de {activeDepartment.name}? Entre em contacto
                        connosco.
                      </p>

                      <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm text-[#003399]/70 mb-1">
                              Nome
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-4 py-2 rounded-lg border border-[#003399]/20 focus:outline-none focus:ring-2 focus:ring-[#003399]/30"
                              placeholder="O seu nome"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm text-[#003399]/70 mb-1">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-2 rounded-lg border border-[#003399]/20 focus:outline-none focus:ring-2 focus:ring-[#003399]/30"
                              placeholder="O seu email"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm text-[#003399]/70 mb-1">
                            Mensagem
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 rounded-lg border border-[#003399]/20 focus:outline-none focus:ring-2 focus:ring-[#003399]/30"
                            placeholder="A sua mensagem"
                          ></textarea>
                        </div>
                        <Button type="submit" className="bg-[#003399] text-white hover:bg-[#003399]/90 group">
                          <span>Enviar mensagem</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CombinedFooter scrollToSection={scrollToSection} />
    </>
  )
}

