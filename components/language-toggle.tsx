"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const [language, setLanguage] = useState("PT")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 h-10 rounded-full p-0 text-white hover:bg-white/10">
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/10 backdrop-blur-md border-white/20">
        <DropdownMenuItem onClick={() => setLanguage("PT")} className="text-white hover:bg-white/10 cursor-pointer">
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("EN")} className="text-white hover:bg-white/10 cursor-pointer">
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

