export function DividerLabel({ label }: { label: string }) {
  return (
    <div className="px-6 pt-6 pb-2 text-[10px] text-accent animate-drop-shadow-neon font-mono tracking-wider">
      {label}
    </div>
  )
}
