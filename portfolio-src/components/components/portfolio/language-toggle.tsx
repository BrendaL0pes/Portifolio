"use client"

import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-all border border-transparent hover:border-border/50"
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase tracking-wide">{language === "pt" ? "EN" : "PT"}</span>
    </button>
  )
}
