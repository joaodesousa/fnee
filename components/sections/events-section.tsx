"use client"

import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"

export function EventsSection() {
  return (
    <section id="events" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FFCC00]/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#003399]/5 rounded-tr-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#003399]/10 px-3 py-1 rounded-full text-[#003399]/80 text-sm mb-4">
              <Calendar size={14} className="text-[#003399]" />
              <span>Agenda</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#003399]">Próximos eventos</h2>
          </div>

          <Button className="mt-4 md:mt-0 bg-[#003399] text-white hover:bg-[#003399]/90 group">
            <span>Ver todos</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            title="Percepção dos Jovens sobre a União Europeia"
            description="Workshop interativo para discutir e analisar a visão dos jovens portugueses sobre o projeto europeu."
            image="/images/event-workshop.png"
            date="15 Abril, 2025"
            location="Lisboa, Portugal"
            category="Workshop"
            link="#"
          />

          <EventCard
            title="IV Encontro Nacional dos Estudos Europeus"
            description="O maior encontro nacional dedicado aos estudos europeus, com palestrantes nacionais e internacionais."
            image="/images/event-conference.png"
            date="22-23 Maio, 2025"
            location="Porto, Portugal"
            category="Conferência"
            link="#"
          />

          <EventCard
            title="O Futuro da União Europeia: Desafios e Oportunidades"
            description="Debate sobre as perspectivas futuras da UE e o papel de Portugal no contexto europeu."
            image="/images/event-debate.png"
            date="10 Junho, 2025"
            location="Coimbra, Portugal"
            category="Debate"
            link="#"
          />
        </div>
      </div>
    </section>
  )
}

