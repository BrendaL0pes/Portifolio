"use client"

import { Star } from "lucide-react"

export function GitHubWidget({ username = "BrendaL0pes" }: { username?: string }) {
  return (
    <div className="p-4 bg-card rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">GitHub</h3>
        <Star className="w-4 h-4 text-yellow-400" />
      </div>
      <div className="text-xs text-muted-foreground">Public repositories for <span className="font-medium">{username}</span></div>
      <ul className="mt-3 space-y-2 text-sm">
        <li>• https://github.com/BrendaL0pes/BrifAi</li>
        <li>• https://github.com/BrendaL0pes/Graphic-Generator</li>
      </ul>
    </div>
  )
}
