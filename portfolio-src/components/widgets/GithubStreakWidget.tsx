"use client"

import Image from "next/image"

export function GithubStreakWidget({ username = "BrendaL0pes" }: { username?: string }) {
  // Cores personalizadas para combinar com o portfólio (roxo/neon e o novo verde neon)
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&title_color=cb6ce6&text_color=a3a3a3&icon_color=e879f9&text_bold=false&ring=95d67a&fire=e879f9&sideNums=a3a3a3&sideLabels=a3a3a3&dates=a3a3a3&currStreakNum=95d67a&currStreakLabel=95d67a`

  return (
    <div className="p-2 sm:p-3 bg-card rounded-xl border border-white/[0.09] overflow-hidden flex flex-col justify-center backdrop-blur-md hover:bg-white/[0.06] transition-colors relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <Image src={streakUrl} alt="GitHub Streak Stats" width={500} height={200} className="w-full object-contain relative z-10" />
    </div>
  )
}
