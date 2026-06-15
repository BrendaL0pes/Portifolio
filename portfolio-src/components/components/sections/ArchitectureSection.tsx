"use client"

import { useState } from "react"

export function ArchitectureSection() {
  const [tab, setTab] = useState("java")

  return (
    <div className="col-span-full mt-4">
      <div className="p-6 bg-card rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-lg font-semibold">Architecture</h3>
          <div className="ml-auto flex gap-2">
            <button className={`px-3 py-1 rounded ${tab==='java'? 'bg-primary/10': 'bg-border'}`} onClick={() => setTab('java')}>Java</button>
            <button className={`px-3 py-1 rounded ${tab==='next'? 'bg-primary/10': 'bg-border'}`} onClick={() => setTab('next')}>Next.js</button>
            <button className={`px-3 py-1 rounded ${tab==='flutter'? 'bg-primary/10': 'bg-border'}`} onClick={() => setTab('flutter')}>Flutter</button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          {tab === 'java' && <p>Layered architecture, REST APIs, Spring Boot modules.</p>}
          {tab === 'next' && <p>App Router, static export, incremental rendering patterns.</p>}
          {tab === 'flutter' && <p>Cross-platform UI, widgets and responsive layouts.</p>}
        </div>
      </div>
    </div>
  )
}
