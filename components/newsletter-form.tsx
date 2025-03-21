"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 rounded-full bg-[#003399] flex items-center justify-center text-white mb-4">
          <Check size={24} />
        </div>
        <h3 className="text-xl font-bold text-[#003399] mb-2">Obrigado pela subscrição!</h3>
        <p className="text-[#003399]/70 text-center">Receberá em breve as nossas novidades no seu email.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="O seu email"
        className="flex-1 bg-white border border-[#003399]/20 rounded-lg px-4 py-3 text-[#003399] placeholder:text-[#003399]/50 focus:outline-none focus:ring-2 focus:ring-[#003399]/30"
        required
      />
      <Button type="submit" className="bg-[#003399] text-white hover:bg-[#003399]/90 group whitespace-nowrap">
        <span>Subscrever</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  )
}

