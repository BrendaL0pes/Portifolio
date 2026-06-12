"use client"

export function StatusWidget() {
  return (
    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
      <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
      <div>
        <div className="text-sm font-medium">Service status</div>
        <div className="text-xs text-muted-foreground">All systems operational</div>
      </div>
    </div>
  )
}
