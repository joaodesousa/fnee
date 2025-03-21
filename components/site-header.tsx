"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image src="/images/fnee-logo.png" alt="FNEE Logo" fill className="object-contain" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold leading-none">FNEE</p>
            <p className="text-xs text-muted-foreground">Federação Nacional dos Estudos Europeus</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/sobre" className="text-sm font-medium hover:text-[#003399] transition-colors">
            Sobre Nós
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-[#003399] transition-colors">
              Iniciativas
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/iniciativas/investigacao" className="w-full">
                  Investigação
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/iniciativas/eventos" className="w-full">
                  Eventos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/iniciativas/educacao" className="w-full">
                  Educação
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/eventos" className="text-sm font-medium hover:text-[#003399] transition-colors">
            Eventos
          </Link>
          <Link href="/recursos" className="text-sm font-medium hover:text-[#003399] transition-colors">
            Recursos
          </Link>
          <Link href="/noticias" className="text-sm font-medium hover:text-[#003399] transition-colors">
            Notícias
          </Link>
          <Link href="/contactos" className="text-sm font-medium hover:text-[#003399] transition-colors">
            Contactos
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-[#003399] text-[#003399] hover:bg-[#003399]/5">
            PT / EN
          </Button>
          <Button className="bg-[#003399] hover:bg-[#003399]/90">Participar</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/sobre"
              className="px-4 py-2 text-sm font-medium hover:bg-[#003399]/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <div className="px-4 py-2 text-sm font-medium">
              <p className="mb-2">Iniciativas</p>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  href="/iniciativas/investigacao"
                  className="text-sm text-muted-foreground hover:text-[#003399]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investigação
                </Link>
                <Link
                  href="/iniciativas/eventos"
                  className="text-sm text-muted-foreground hover:text-[#003399]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Eventos
                </Link>
                <Link
                  href="/iniciativas/educacao"
                  className="text-sm text-muted-foreground hover:text-[#003399]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Educação
                </Link>
              </div>
            </div>
            <Link
              href="/eventos"
              className="px-4 py-2 text-sm font-medium hover:bg-[#003399]/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link
              href="/recursos"
              className="px-4 py-2 text-sm font-medium hover:bg-[#003399]/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </Link>
            <Link
              href="/noticias"
              className="px-4 py-2 text-sm font-medium hover:bg-[#003399]/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Notícias
            </Link>
            <Link
              href="/contactos"
              className="px-4 py-2 text-sm font-medium hover:bg-[#003399]/5 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactos
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" className="border-[#003399] text-[#003399] hover:bg-[#003399]/5">
                PT / EN
              </Button>
              <Button className="bg-[#003399] hover:bg-[#003399]/90">Participar</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

