"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin, Share2, Download, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CombinedFooter } from "@/components/sections/combined-footer"
import { LanguageToggle } from "@/components/language-toggle"
import { SocialLinks } from "@/components/social-links"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
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
  const event = {
    title: "IV Encontro Nacional dos Estudos Europeus",
    slug: "encontro-nacional",
    category: "Conferência",
    date: "22-23 Maio, 2025",
    time: "09:00 - 18:00",
    location: "Fundação Calouste Gulbenkian, Lisboa",
    image: "/images/event-conference.png",
    description:
      "O maior encontro nacional dedicado aos estudos europeus, com palestrantes nacionais e internacionais.",
    content: `
      <p>O IV Encontro Nacional dos Estudos Europeus é o maior evento anual dedicado aos estudos europeus em Portugal, reunindo estudantes, investigadores, professores, políticos e representantes das instituições europeias.</p>
      
      <p>Durante dois dias, os participantes terão a oportunidade de assistir a conferências, painéis de discussão, workshops e apresentações de investigação sobre temas europeus relevantes para Portugal e para os jovens.</p>
      
      <h3>Temas</h3>
      <ul>
        <li>O Futuro da União Europeia</li>
        <li>Transição Digital e Ecológica</li>
        <li>Juventude e Participação Cívica</li>
        <li>Educação e Mobilidade</li>
        <li>Desafios Geopolíticos</li>
      </ul>
      
      <h3>Programa</h3>
      <p><strong>Dia 1 - 22 de Maio</strong></p>
      <ul>
        <li>09:00 - 09:30: Registo e Boas-vindas</li>
        <li>09:30 - 10:30: Sessão de Abertura</li>
        <li>10:30 - 11:00: Pausa para Café</li>
        <li>11:00 - 12:30: Painel "O Futuro da União Europeia"</li>
        <li>12:30 - 14:00: Almoço</li>
        <li>14:00 - 15:30: Workshops Paralelos</li>
        <li>15:30 - 16:00: Pausa para Café</li>
        <li>16:00 - 17:30: Painel "Transição Digital e Ecológica"</li>
        <li>19:00 - 21:00: Jantar de Networking</li>
      </ul>
      
      <p><strong>Dia 2 - 23 de Maio</strong></p>
      <ul>
        <li>09:30 - 11:00: Painel "Juventude e Participação Cívica"</li>
        <li>11:00 - 11:30: Pausa para Café</li>
        <li>11:30 - 13:00: Apresentações de Investigação</li>
        <li>13:00 - 14:30: Almoço</li>
        <li>14:30 - 16:00: Painel "Educação e Mobilidade"</li>
        <li>16:00 - 16:30: Pausa para Café</li>
        <li>16:30 - 17:30: Painel "Desafios Geopolíticos"</li>
        <li>17:30 - 18:00: Sessão de Encerramento</li>
      </ul>
      
      <h3>Oradores</h3>
      <p>O evento contará com a participação de oradores nacionais e internacionais de renome, incluindo:</p>
      <ul>
        <li>Representantes das instituições europeias</li>
        <li>Académicos e investigadores</li>
        <li>Políticos e decisores</li>
        <li>Jovens ativistas e empreendedores</li>
      </ul>
    `,
    speakers: [
      { name: "Dra. Maria Santos", role: "Comissão Europeia", image: "/placeholder.svg?height=100&width=100" },
      { name: "Prof. António Silva", role: "Universidade de Lisboa", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. João Martins", role: "Parlamento Europeu", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dra. Sofia Costa", role: "FNEE", image: "/placeholder.svg?height=100&width=100" },
    ],
    documents: [
      { name: "Programa Detalhado", size: "1.8 MB", type: "PDF" },
      { name: "Formulário de Inscrição", size: "0.5 MB", type: "PDF" },
      { name: "Mapa do Venue", size: "2.2 MB", type: "PDF" },
    ],
    relatedEvents: [
      {
        title: "Workshop: Percepção dos Jovens sobre a UE",
        slug: "workshop-percepcao",
        image: "/images/event-workshop.png",
      },
      { title: "Debate: O Futuro da União Europeia", slug: "debate-futuro-ue", image: "/images/event-debate.png" },
      {
        title: "Conferência: Desafios da Transição Digital",
        slug: "conferencia-transicao-digital",
        image: "/images/event-conference.png",
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
                  href="/eventos"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Voltar aos eventos</span>
                </Link>

                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-4">
                  <Calendar size={14} className="text-[#FFCC00]" />
                  <span>{event.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{event.title}</h1>

                <p className="text-white/80 text-lg mb-8">{event.description}</p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar size={18} className="text-[#FFCC00]" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-white/90">
                    <Clock size={18} className="text-[#FFCC00]" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin size={18} className="text-[#FFCC00]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#FFCC00] text-[#003399] hover:bg-white group">
                    <span>Inscrever-se</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Share2 size={16} className="mr-2" />
                    <span>Partilhar</span>
                  </Button>

                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <ExternalLink size={16} className="mr-2" />
                    <span>Ver local</span>
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
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
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
                      onClick={() => setActiveTab("speakers")}
                      className={`inline-block py-4 px-6 border-b-2 font-medium text-sm ${
                        activeTab === "speakers"
                          ? "border-[#003399] text-[#003399]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Oradores
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
                  {activeTab === "overview" && <div dangerouslySetInnerHTML={{ __html: event.content }} />}

                  {activeTab === "speakers" && (
                    <div>
                      <h2>Oradores</h2>
                      <p>Conheça os oradores que participarão neste evento.</p>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mt-8">
                        {event.speakers.map((speaker) => (
                          <div
                            key={speaker.name}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-[#003399]/10"
                          >
                            <div className="relative h-48 bg-[#003399]/5">
                              <Image
                                src={speaker.image || "/placeholder.svg"}
                                alt={speaker.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-[#003399]">{speaker.name}</h4>
                              <p className="text-[#003399]/70 text-sm">{speaker.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "documents" && (
                    <div>
                      <h2>Documentos do Evento</h2>
                      <p>Aceda aos documentos relacionados com este evento.</p>

                      <div className="space-y-4 not-prose mt-8">
                        {event.documents.map((doc) => (
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
                  {/* Registration Widget */}
                  <div className="bg-[#003399] text-white rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Inscreva-se no Evento</h3>
                    <p className="text-white/80 mb-6">
                      As inscrições estão abertas até 15 de Maio de 2025. Vagas limitadas!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Preço:</span>
                        <span className="font-bold">€25,00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Estudantes:</span>
                        <span className="font-bold">€15,00</span>
                      </div>
                      <Button className="w-full bg-[#FFCC00] text-[#003399] hover:bg-white group">
                        <span>Inscrever-se agora</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-[#003399]/5 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-[#003399] mb-4">Local</h3>
                    <div className="space-y-4">
                      <div className="relative h-40 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt="Mapa do local"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#003399]">Fundação Calouste Gulbenkian</h4>
                        <p className="text-[#003399]/70 text-sm">
                          Av. de Berna, 45A
                          <br />
                          1067-001 Lisboa
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <MapPin size={16} className="mr-2" />
                        <span>Ver no mapa</span>
                      </Button>
                    </div>
                  </div>

                  {/* Related Events */}
                  <div>
                    <h3 className="text-xl font-bold text-[#003399] mb-4">Eventos Relacionados</h3>
                    <div className="space-y-4">
                      {event.relatedEvents.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/eventos/${related.slug}`}
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
                            <p className="text-[#003399]/70 text-sm">Ver evento</p>
                          </div>
                        </Link>
                      ))}
                    </div>
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
              <h2 className="text-3xl font-bold text-[#003399] mb-4">Não perca os nossos próximos eventos</h2>
              <p className="text-[#003399]/70 text-lg mb-8">
                Inscreva-se na nossa newsletter para receber informações sobre os próximos eventos da FNEE.
              </p>
              <Button className="bg-[#003399] text-white hover:bg-[#003399]/90 group">
                <span>Ver todos os eventos</span>
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

