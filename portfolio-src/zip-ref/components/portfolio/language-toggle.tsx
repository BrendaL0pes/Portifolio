"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-white/50 hover:text-white/90 bg-white/[0.04] hover:bg-white/[0.08] rounded-full transition-all border border-white/[0.08]"
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <span className={language === "pt" ? "text-accent" : ""}>PT</span>
      <span className="text-white/20">/</span>
      <span className={language === "en" ? "text-accent" : ""}>EN</span>
    </button>
  )
}
