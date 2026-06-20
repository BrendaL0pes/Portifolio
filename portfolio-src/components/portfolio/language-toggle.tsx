"use client"

import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-logo-green animate-drop-shadow-neon-green hover:text-logo-green/80 bg-secondary/50 hover:bg-secondary rounded-full transition-all border border-logo-green/20 hover:border-logo-green/50"
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase tracking-wide">{language === "pt" ? "PT-BR" : "EN"}</span>
    </button>
  )
}
