"use client"

import { createContext, useContext, useState, useCallback, ReactNode } from "react"
import { translations, Language, TranslationKey } from "./translations"

interface LanguageContextType {
  language: Language
  t: TranslationKey
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  defaultLanguage?: Language
}

export function LanguageProvider({ children, defaultLanguage = "pt" }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "pt" ? "en" : "pt"))
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
