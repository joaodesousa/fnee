"use client"

import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 bg-[#003399] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FFCC00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#003399" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#gradient)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-4">
            <Star size={14} className="text-[#FFCC00]" />
            <span>As nossas notícias</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">As notícias em destaque</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Inquérito Nacional"
            description="Um dos maiores estudos sobre a percepção dos jovens portugueses em relação à União Europeia."
            image="/images/academia.png"
            category="Investigação"
            link="#"
          />

          <ProjectCard
            title="Encontro Nacional"
            description="O maior evento anual dedicado aos estudos europeus em Portugal, reunindo estudantes e especialistas."
            image="/images/sessao.png"
            category="Eventos"
            link="#"
          />

          <ProjectCard
            title="Academia Europa"
            description="Programa educativo que leva o conhecimento sobre a União Europeia às escolas de todo o país."
            image="/images/enee.png"
            category="Educação"
            link="#"
          />
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 group">
            <span>Ver todos os projetos</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

