import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#003399] text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-full p-1">
                <Image src="/images/fnee-logo.png" alt="FNEE Logo" fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold leading-none">FNEE</p>
                <p className="text-xs text-white/70">Federação Nacional dos Estudos Europeus</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-6">
              Promovemos o debate, a investigação e a participação ativa dos jovens nas questões europeias.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-white/70 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/iniciativas" className="text-white/70 hover:text-white transition-colors">
                  Iniciativas
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-white/70 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-white/70 hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-white/70 hover:text-white transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="text-white/70 hover:text-white transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Iniciativas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/iniciativas/investigacao" className="text-white/70 hover:text-white transition-colors">
                  Investigação
                </Link>
              </li>
              <li>
                <Link href="/iniciativas/eventos" className="text-white/70 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/iniciativas/educacao" className="text-white/70 hover:text-white transition-colors">
                  Educação
                </Link>
              </li>
              <li>
                <Link href="/iniciativas/publicacoes" className="text-white/70 hover:text-white transition-colors">
                  Publicações
                </Link>
              </li>
              <li>
                <Link href="/iniciativas/parcerias" className="text-white/70 hover:text-white transition-colors">
                  Parcerias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contactos</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 text-[#FFCC00]" />
                <span className="text-white/70">info@fnee.pt</span>
              </li>
              <li>
                <p className="text-white/70">
                  Rua dos Estudos Europeus, 12
                  <br />
                  1000-123 Lisboa
                  <br />
                  Portugal
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Federação Nacional dos Estudos Europeus. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/politica-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-condicoes" className="hover:text-white transition-colors">
              Termos e Condições
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

