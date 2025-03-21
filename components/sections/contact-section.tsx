"use client"

import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-[#003399] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/map-pattern.png')] opacity-5"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-4">
              <MapPin size={14} className="text-[#FFCC00]" />
              <span>Contacto</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Fale connosco</h2>

            <p className="text-white/80 text-lg mb-8">
              Tem alguma questão ou sugestão? Entre em contacto connosco através do formulário ou dos nossos canais de
              comunicação.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FFCC00] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Morada</p>
                  <p className="text-white/70">
                    Rua dos Estudos Europeus, 12
                    <br />
                    1000-123 Lisboa, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FFCC00] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-white/70">info@fnee.pt</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Envie-nos uma mensagem</h3>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/80 text-sm">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/50"
                    placeholder="O seu nome"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/80 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/50"
                    placeholder="O seu email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white/80 text-sm">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/50"
                    placeholder="A sua mensagem"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-[#FFCC00] text-[#003399] hover:bg-white group">
                  <span>Enviar mensagem</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

