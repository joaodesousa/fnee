"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Calendar, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  scrollToSection: (id: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#002266] via-[#003399] to-[#0044cc]"
    >
      {/* Glass-like Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blurred Gradient Circles */}
        <div className="absolute top-0 left-0 w-full h-full">
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

          <motion.div
            className="absolute top-2/3 right-1/3 w-[25vw] h-[25vw] rounded-full bg-[#FFCC00]/10 blur-[60px]"
            animate={{
              x: [0, 20, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Glass Panels */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 p-8 opacity-20 pointer-events-none">
  {Array.from({ length: 12 }).map((_, colIndex) =>
    Array.from({ length: 6 }).map((_, rowIndex) => {
      // Use a seeded random based on the position instead of pure random
      const seed = colIndex * 10 + rowIndex;
      const opacity = ((seed * 7) % 40 + 10) / 100; // This will give a stable value between 0.1 and 0.5
      
      return (
        <div
          key={`${colIndex}-${rowIndex}`}
          className="border border-white/10 rounded-lg backdrop-blur-sm bg-white/5"
          style={{
            gridColumn: colIndex + 1,
            gridRow: rowIndex + 1, 
            opacity
          }}
        />
      );
    })
  )}
</div>
      </div>

      <div className="container relative z-10 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm"
            >
              <Star size={14} className="text-[#FFCC00]" />
              <span>Federação Nacional dos Estudos Europeus</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
            >
              A Europa <br />
              <span className="text-[#FFCC00]">mais perto</span> <br />
              de ti
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg max-w-md"
            >
              Promovemos o debate, a investigação e a participação ativa dos jovens nas questões europeias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection("about")}
                className="bg-[#FFCC00] text-[#003399] hover:bg-white group"
              >
                <span>Descobrir</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                onClick={() => scrollToSection("events")}
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Próximos Eventos
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              {/* Glass effect behind image */}
              <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-[#FFCC00]/20 blur-3xl"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden">
                <Image src="/images/enee.png" alt="Jovens e a União Europeia" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 rounded-3xl border border-white/20"></div>
            </div>

            {/* Floating Elements - Now with correct z-index */}
            <motion.div
              className="absolute top-10 -right-5 z-20 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center text-[#003399] font-bold">
                  EU
                </div>
                <div>
                  <p className="text-white font-medium">Inquérito Nacional</p>
                  <p className="text-white/70 text-xs">5.000+ participantes</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 z-20 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center text-[#003399] font-bold">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-white font-medium">ENEE 2025</p>
                  <p className="text-white/70 text-xs">12 Abril 2025</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Button - Fixed position at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute mt-28 left-1/2 -translate-x-1/2 z-10"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-white hover:text-[#FFCC00] transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs uppercase tracking-widest mb-2 group-hover:translate-y-1 transition-transform">
              Scroll
            </span>
            <motion.div
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronRight size={20} className="rotate-90 text-[#FFCC00]" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

