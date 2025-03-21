"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  link: string
}

export function ProjectCard({ title, description, image, category, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/80 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <div className="inline-block px-3 py-1 text-xs font-medium bg-[#FFCC00] text-[#003399] rounded-full">
            {category}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 bg-[#003399]/40 backdrop-blur-sm"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={link}>
            <Button className="bg-white text-[#003399] hover:bg-white/90">
              <span>Ver projeto</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFCC00] transition-colors">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        <Link href={link}>
          <Button variant="link" className="p-0 h-auto text-[#FFCC00] hover:text-white group/btn">
            <span>Saber mais</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

