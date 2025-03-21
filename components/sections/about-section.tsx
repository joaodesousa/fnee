"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Globe, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#003399]/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#003399]/5 -translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#FFCC00]/5 -translate-y-1/3"></div>
      {/* Add a subtle pattern to the background for more visual interest */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC4wMjcgMGwuMDY1LjAwNS4wNTQuMDA4LjA1NC4wMTIuMDUyLjAxNi4wNTIuMDIuMDUuMDI0LjA0OC4wMjcuMDQ3LjAzLjA0Ni4wMzQuMDQ0LjAzNi4wNDIuMDQuMDQuMDQyLjAzOC4wNDQuMDM2LjA0Ny4wMzMuMDQ4LjAzLjA1LjAyOC4wNTIuMDI1LjA1My4wMjIuMDU0LjAyLjA1NS4wMTYuMDU1LjAxMy4wNTYuMDEuMDU2LjAwNi4wNTcuMDA0LjA1N3Y1My45M2wtLjAwNC4wNTgtLjAwNi4wNTctLjAxLjA1Ni0uMDEzLjA1Ni0uMDE2LjA1NS0uMDIuMDU1LS4wMjIuMDU0LS4wMjUuMDUzLS4wMjguMDUyLS4wMy4wNS0uMDMzLjA0OC0uMDM2LjA0Ny0uMDM4LjA0NC0uMDQuMDQyLS4wNDIuMDQtLjA0NC4wMzYtLjA0Ni4wMzQtLjA0Ny4wMy0uMDQ4LjAyNy0uMDUuMDI0LS4wNTIuMDItLjA1Mi4wMTYtLjA1NC4wMTItLjA1NC4wMDgtLjA2NS4wMDVINi4wMzNsLS4wNjUtLjAwNS0uMDU0LS4wMDgtLjA1NC0uMDEyLS4wNTItLjAxNi0uMDUyLS4wMi0uMDUtLjAyNC0uMDQ4LS4wMjctLjA0Ny0uMDMtLjA0Ni0uMDM0LS4wNDQtLjAzNi0uMDQyLS4wNC0uMDQtLjA0Mi0uMDM4LS4wNDQtLjAzNi0uMDQ3LS4wMzMtLjA0OC0uMDMtLjA1LS4wMjgtLjA1Mi0uMDI1LS4wNTMtLjAyMi0uMDU0LS4wMi0uMDU1LS4wMTYtLjA1NS0uMDEzLS4wNTYtLjAxLS4wNTYtLjAwNi0uMDU3LS4wMDQtLjA1N1Y2LjA3bC4wMDQtLjA1Ny4wMDYtLjA1Ny4wMS0uMDU2LjAxMy0uMDU2LjAxNi0uMDU1LjAyLS4wNTUuMDIyLS4wNTQuMDI1LS4wNTMuMDI4LS4wNTIuMDMtLjA1LjAzMy0uMDQ4LjAzNi0uMDQ3LjAzOC0uMDQ0LjA0LS4wNDIuMDQyLS4wNC4wNDQtLjAzNi4wNDYtLjAzNC4wNDctLjAzLjA0OC0uMDI3LjA1LS4wMjQuMDUyLS4wMi4wNTItLjAxNi4wNTQtLjAxMi4wNTQtLjAwOC4wNjUtLjAwNWg0Ny45OTRtMC0zSC4wMzN2NjBoNjBWMHoiIGZpbGw9IiMwMDMzOTkiIGZpbGwtb3BhY2l0eT0iLjAyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KPC9zdmc+Cg==')] opacity-10"></div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#003399]/10 px-3 py-1 rounded-full text-[#003399]/80 text-sm">
                  <span>Sobre Nós</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-[#003399]">A nossa missão</h2>

                <p className="text-[#003399]/70">
                  Aproximar a União Europeia da sociedade civil, com foco especial nos estudantes e jovens portugueses.
                </p>

                <div className="pt-4">
                  <Button className="bg-[#003399] text-white hover:bg-[#003399]/90 group">
                    <span>Conhecer a equipa</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-16">
                <motion.div
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#FFCC00]/20 flex items-center justify-center text-[#003399] shrink-0 group-hover:bg-[#FFCC00] transition-colors">
                      <Globe size={24} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#003399] group-hover:text-[#FFCC00] transition-colors">
                        Investigação
                      </h3>
                      <p className="text-[#003399]/70">
                        Promovemos estudos e pesquisas sobre temas europeus relevantes para Portugal e para os jovens. O
                        nosso inquérito nacional sobre a percepção da União Europeia é um dos maiores estudos realizados
                        em Portugal sobre este tema, com mais de 5.000 participantes.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Análise de políticas europeias</span>
                        </li>
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Estudos de opinião pública</span>
                        </li>
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Publicações académicas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#FFCC00]/20 flex items-center justify-center text-[#003399] shrink-0 group-hover:bg-[#FFCC00] transition-colors">
                      <Calendar size={24} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#003399] group-hover:text-[#FFCC00] transition-colors">
                        Eventos
                      </h3>
                      <p className="text-[#003399]/70">
                        Organizamos conferências, workshops e debates sobre temas europeus, promovendo o diálogo entre
                        jovens, académicos, políticos e representantes das instituições europeias. O nosso Encontro
                        Nacional dos Estudos Europeus é o maior evento anual dedicado a este tema em Portugal.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Conferências e seminários</span>
                        </li>
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Workshops interativos</span>
                        </li>
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Debates e mesas redondas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-[#FFCC00]/20 flex items-center justify-center text-[#003399] shrink-0 group-hover:bg-[#FFCC00] transition-colors">
                      <Search size={24} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#003399] group-hover:text-[#FFCC00] transition-colors">
                        Educação
                      </h3>
                      <p className="text-[#003399]/70">
                        Desenvolvemos programas educativos sobre a União Europeia para escolas e universidades,
                        promovendo o conhecimento sobre as instituições europeias e o seu funcionamento. A nossa
                        Academia Europa leva o conhecimento sobre a UE a escolas de todo o país.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Materiais educativos</span>
                        </li>
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Formação para professores</span>
                        </li>
                        <li className="flex items-center gap-2 text-[#003399]/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></div>
                          <span>Simulações do Parlamento Europeu</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

