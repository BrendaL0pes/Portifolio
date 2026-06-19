"use client"

import { Star } from "lucide-react"

export function GitHubWidget({ username = "BrendaL0pes" }: { username?: string }) {
  return (
    <div className="p-4 bg-card rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">GitHub</h3>
        <Star className="w-4 h-4 text-primary fill-primary/30" />
      </div>
      <div className="text-xs text-muted-foreground">Public repositories for <span className="font-medium">{username}</span></div>
      <ul className="mt-3 space-y-2 text-sm">
        <li>
          <a
            href="https://github.com/BrendaL0pes/BrifAi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            BrendaL0pes/BrifAi
          </a>
        </li>
        <li>
          <a
            href="https://github.com/BrendaL0pes/Graphic-Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            BrendaL0pes/Graphic-Generator
          </a>
        </li>
      </ul>
    </div>
  )
}
