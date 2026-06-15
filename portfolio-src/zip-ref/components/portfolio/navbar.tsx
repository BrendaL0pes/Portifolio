"use client"

import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "./language-toggle"

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
      <span className="text-sm font-medium text-accent tracking-tight">{t.nav.logo}</span>
      <div className="flex items-center gap-5">
        <div className="hidden sm:flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/40 hover:text-white/80 transition-colors"
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
