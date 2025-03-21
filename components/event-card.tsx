"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventCardProps {
  title: string
  description: string
  image: string
  date: string
  location: string
  category: string
  link: string
}

export function EventCard({ title, description, image, date, location, category, link }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-56 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>

          <div className="inline-block px-3 py-1 text-xs font-medium bg-[#FFCC00] text-[#003399] rounded-full">
            {category}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#003399] mb-2 group-hover:text-[#FFCC00] transition-colors">{title}</h3>
        <p className="text-[#003399]/70 mb-4 line-clamp-2">{description}</p>
        <Link href={link}>
          <Button variant="link" className="p-0 h-auto text-[#003399] hover:text-[#FFCC00] group/btn">
            <span>Saber mais</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

