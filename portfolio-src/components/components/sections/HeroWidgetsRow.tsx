"use client"

import { StatusWidget } from "../widgets/StatusWidget"
import { GitHubWidget } from "../widgets/GitHubWidget"
import { SpotifyWidget } from "../widgets/SpotifyWidget"

export function HeroWidgetsRow() {
  return (
    <div className="col-span-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatusWidget />
        <GitHubWidget />
        <SpotifyWidget />
      </div>
    </div>
  )
}
