"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, MapPin, Share2, BookOpen, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CombinedFooter } from "@/components/sections/combined-footer"
import { LanguageToggle } from "@/components/language-toggle"
import { SocialLinks } from "@/components/social-links"

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("overview")
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

  // This would normally come from a database or API
  const project = {
    title: "Inquérito Nacional sobre a Percepção da UE",
    slug: "inquerito-nacional",
    category: "Investigação",
    date: "Janeiro - Dezembro 2024",
    location: "Portugal",
    image: "/images/project-survey.png",
    description:
      "Um dos maiores estudos sobre a percepção dos jovens portugueses em relação à União Europeia, com mais de 5.000 participantes de todo o país.",
    content: `
      <p>O Inquérito Nacional sobre a Percepção da UE é um projeto de investigação desenvolvido pela FNEE com o objetivo de compreender melhor a visão dos jovens portugueses sobre o projeto europeu, as suas instituições e políticas.</p>
      
      <p>Com mais de 5.000 participantes de todo o país, este estudo representa uma das maiores análises já realizadas em Portugal sobre este tema, fornecendo dados valiosos para investigadores, decisores políticos e instituições europeias.</p>
      
      <h3>Objetivos</h3>
      <ul>
        <li>Analisar o nível de conhecimento dos jovens portugueses sobre a União Europeia</li>
        <li>Identificar as principais preocupações e expectativas em relação ao projeto europeu</li>
        <li>Avaliar o impacto das políticas europeias na vida dos jovens</li>
        <li>Compreender a relação entre educação e percepção da UE</li>
      </ul>
      
      <h3>Metodologia</h3>
      <p>O inquérito foi realizado através de um questionário online e presencial, aplicado a jovens entre os 16 e os 30 anos, em todas as regiões de Portugal. A amostra foi estratificada por idade, género, nível de escolaridade e região, garantindo a representatividade dos resultados.</p>
      
      <p>O questionário abordou temas como:</p>
      <ul>
        <li>Conhecimento sobre as instituições europeias</li>
        <li>Participação em programas europeus</li>
        <li>Percepção sobre os benefícios da integração europeia</li>
        <li>Expectativas para o futuro da União Europeia</li>
        <li>Fontes de informação sobre temas europeus</li>
      </ul>
      
      <h3>Resultados</h3>
      <p>Os resultados preliminares do inquérito revelam um interesse significativo dos jovens portugueses pelos temas europeus, embora com níveis de conhecimento variáveis. Destacam-se as seguintes conclusões:</p>
      
      <ul>
        <li>78% dos jovens consideram que Portugal beneficia da pertença à UE</li>
        <li>Apenas 45% conseguem identificar corretamente as principais instituições europeias</li>
        <li>62% gostariam de participar em programas de mobilidade europeia</li>
        <li>As principais preocupações relacionam-se com emprego, ambiente e educação</li>
      </ul>
    `,
    team: [
      { name: "Dra. Ana Silva", role: "Coordenadora", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. João Martins", role: "Investigador", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dra. Marta Costa", role: "Analista de Dados", image: "/placeholder.svg?height=100&width=100" },
    ],
    documents: [
      { name: "Relatório Preliminar", size: "2.4 MB", type: "PDF" },
      { name: "Questionário", size: "1.1 MB", type: "PDF" },
      { name: "Apresentação de Resultados", size: "3.7 MB", type: "PDF" },
    ],
    relatedProjects: [
      { title: "Análise de Políticas Europeias", slug: "analise-politicas", image: "/images/research-project.png" },
      { title: "Academia Europa", slug: "academia-europa", image: "/images/education-project.png" },
      {
        title: "Encontro Nacional dos Estudos Europeus",
        slug: "encontro-nacional",
        image: "/images/event-project.png",
      },
    ],
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
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Link
                  href="/projetos"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Voltar aos projetos</span>
                </Link>

                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-4">
                  <BookOpen size={14} className="text-[#FFCC00]" />
                  <span>{project.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{project.title}</h1>

                <p className="text-white/80 text-lg mb-8">{project.description}</p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar size={18} className="text-[#FFCC00]" />
                    <span>{project.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin size={18} className="text-[#FFCC00]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#FFCC00] text-[#003399] hover:bg-white group">
                    <span>Participar no inquérito</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Share2 size={16} className="mr-2" />
                    <span>Partilhar</span>
                  </Button>
                </div>
              </div>

              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative z-10 aspect-video w-full max-w-lg mx-auto">
                    <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl"></div>
                    <div className="absolute inset-0 rounded-full bg-[#FFCC00]/20 blur-3xl"></div>
                    <div className="relative h-full w-full rounded-3xl overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                {/* Tabs */}
                <div className="mb-8 border-b border-gray-200">
                  <div className="flex flex-wrap -mb-px">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`inline-block py-4 px-6 border-b-2 font-medium text-sm ${
                        activeTab === "overview"
                          ? "border-[#003399] text-[#003399]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Visão Geral
                    </button>
                    <button
                      onClick={() => setActiveTab("team")}
                      className={`inline-block py-4 px-6 border-b-2 font-medium text-sm ${
                        activeTab === "team"
                          ? "border-[#003399] text-[#003399]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Equipa
                    </button>
                    <button
                      onClick={() => setActiveTab("documents")}
                      className={`inline-block py-4 px-6 border-b-2 font-medium text-sm ${
                        activeTab === "documents"
                          ? "border-[#003399] text-[#003399]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Documentos
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="prose prose-lg max-w-none">
                  {activeTab === "overview" && <div dangerouslySetInnerHTML={{ __html: project.content }} />}

                  {activeTab === "team" && (
                    <div>
                      <h2>Equipa do Projeto</h2>
                      <p>Conheça os profissionais responsáveis pelo desenvolvimento e implementação deste projeto.</p>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mt-8">
                        {project.team.map((member) => (
                          <div
                            key={member.name}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-[#003399]/10"
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
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "documents" && (
                    <div>
                      <h2>Documentos do Projeto</h2>
                      <p>Aceda aos documentos relacionados com este projeto.</p>

                      <div className="space-y-4 not-prose mt-8">
                        {project.documents.map((doc) => (
                          <div
                            key={doc.name}
                            className="flex items-center justify-between p-4 bg-[#003399]/5 rounded-lg hover:bg-[#003399]/10 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg bg-[#003399] flex items-center justify-center text-white">
                                {doc.type}
                              </div>
                              <div>
                                <h4 className="font-medium text-[#003399]">{doc.name}</h4>
                                <p className="text-[#003399]/70 text-sm">{doc.size}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-[#003399]">
                              <Download size={18} />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="sticky top-24 space-y-8">
                  {/* Share Widget */}
                  <div className="bg-[#003399]/5 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#003399] mb-4">Partilhar Projeto</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Facebook
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  {/* Related Projects */}
                  <div>
                    <h3 className="text-xl font-bold text-[#003399] mb-4">Projetos Relacionados</h3>
                    <div className="space-y-4">
                      {project.relatedProjects.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/projetos/${related.slug}`}
                          className="flex items-start gap-4 group"
                        >
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={related.image || "/placeholder.svg"}
                              alt={related.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-[#003399] group-hover:text-[#003399]/70 transition-colors">
                              {related.title}
                            </h4>
                            <p className="text-[#003399]/70 text-sm">Ver projeto</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="bg-[#003399] text-white rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Mais Informações</h3>
                    <p className="text-white/80 mb-4">
                      Tem alguma questão sobre este projeto? Entre em contacto connosco.
                    </p>
                    <Button className="w-full bg-white text-[#003399] hover:bg-white/90 group">
                      <span>Contactar</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#003399]/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#003399] mb-4">Participe nos nossos projetos</h2>
              <p className="text-[#003399]/70 text-lg mb-8">
                Junte-se à FNEE e contribua para aproximar a União Europeia dos jovens portugueses.
              </p>
              <Button className="bg-[#003399] text-white hover:bg-[#003399]/90 group">
                <span>Ver todos os projetos</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <CombinedFooter scrollToSection={scrollToSection} />
    </>
  )
}

