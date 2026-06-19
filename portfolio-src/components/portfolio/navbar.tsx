"use client"

import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "./language-toggle"

import Image from "next/image"

export function Navbar() {
  const { t } = useLanguage()

  const links = [
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.architecture, href: "#architecture" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-12 px-6 bg-background/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="w-[280px] h-full relative flex-shrink-0">
        <a href="#home" className="absolute top-1 left-0 z-[60]">
          <Image
            src="/brenda-logo.svg"
            alt="Brenda Lopes Logo"
            width={280}
            height={70}
            className="object-contain animate-drop-shadow-neon transition-all duration-300 hover:scale-105 origin-top-left"
            priority
          />
        </a>
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-accent animate-drop-shadow-neon hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <LanguageToggle />
      </div>
    </nav>
  )
}
