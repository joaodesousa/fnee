import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link
        href="https://facebook.com"
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFCC00] hover:text-[#003399] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook size={18} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://instagram.com"
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFCC00] hover:text-[#003399] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={18} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://twitter.com"
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFCC00] hover:text-[#003399] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter size={18} />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="https://linkedin.com"
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FFCC00] hover:text-[#003399] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={18} />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  )
}

