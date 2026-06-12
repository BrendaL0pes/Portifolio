"use client"

import { Star, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ProfileCard() {
  const { t } = useLanguage()

  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />
      
      {/* Card container */}
      <div className="relative bg-[#0f0a1a]/95 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 shadow-2xl shadow-purple-500/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-purple-500/30">
        {/* Decorative stars */}
        <div className="absolute top-3 right-3">
          <Star className="w-4 h-4 text-purple-400 fill-purple-400/30 animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-4 animate-bounce" style={{ animationDuration: "4s" }}>
          <Sparkles className="w-3 h-3 text-fuchsia-400" />
        </div>
        <div className="absolute top-12 left-3 animate-pulse" style={{ animationDelay: "1s" }}>
          <Star className="w-3 h-3 text-purple-300 fill-purple-300/30" />
        </div>
        
        {/* Glassmorphism inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/10 pointer-events-none" />
        
        <div className="relative flex flex-col items-center gap-4">
          {/* Profile photo with glowing border */}
          <div className="relative">
            {/* Animated glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 rounded-full blur-sm animate-pulse" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-fuchsia-400 to-purple-600 rounded-full" />
            
            {/* Photo container */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-purple-400/50 bg-gradient-to-br from-purple-900 to-fuchsia-900">
              <Image
                src="/profile.jpg" // Substitua pelo caminho da sua foto
                alt="Foto de perfil"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#0f0a1a] rounded-full flex items-center justify-center">
              <div className="relative">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 border border-green-300"></span>
              </div>
            </div>
          </div>
          
          {/* Name */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-0.5">
              Brenda Medeiros
            </h3>
            <p className="text-sm font-medium bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
              {t.hero.role}
            </p>
          </div>
          
          {/* Status badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-xs font-medium text-purple-200">
              {t.profile.available}
            </span>
          </div>
          
          {/* Decorative bottom line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mt-1" />
          
          {/* Quick stats */}
          <div className="flex items-center justify-center gap-6 text-center">
            <div>
              <p className="text-lg font-bold text-white">3+</p>
              <p className="text-xs text-purple-300/70">{t.profile.projects}</p>
            </div>
            <div className="w-px h-8 bg-purple-500/30" />
            <div>
              <p className="text-lg font-bold text-white">Java</p>
              <p className="text-xs text-purple-300/70">{t.profile.focus}</p>
            </div>
            <div className="w-px h-8 bg-purple-500/30" />
            <div>
              <p className="text-lg font-bold text-white">AI</p>
              <p className="text-xs text-purple-300/70">{t.profile.interest}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
