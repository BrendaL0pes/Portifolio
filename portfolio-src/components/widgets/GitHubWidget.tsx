"use client"

import { Star } from "lucide-react"

export function GitHubWidget({ username = "brendamedeiros" }: { username?: string }) {
  return (
    <div className="p-4 bg-card rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">GitHub</h3>
        <Star className="w-4 h-4 text-yellow-400" />
      </div>
      <div className="text-xs text-muted-foreground">Public repositories for <span className="font-medium">{username}</span></div>
      <ul className="mt-3 space-y-2 text-sm">
        <li>• example-repo-1</li>
        <li>• example-repo-2</li>
        <li>• example-repo-3</li>
      </ul>
    </div>
  )
}
