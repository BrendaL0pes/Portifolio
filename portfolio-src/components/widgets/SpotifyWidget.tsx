"use client"

import { Music } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useState } from "react"
import Image from "next/image"

export function SpotifyWidget() {
  const { t } = useLanguage()
  const [data, setData] = useState<{
    isPlaying: boolean
    trackName?: string
    artistName?: string
    albumImageUrl?: string
    songUrl?: string
  } | null>(null)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const username = "brendalopes_"
        const apiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY

        if (!apiKey) return

        const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`)
        if (res.ok) {
          const data = await res.json()
          const tracks = data.recenttracks?.track

          if (!tracks || tracks.length === 0) {
            setData({ isPlaying: false })
            return
          }

          const track = tracks[0]
          const isPlaying = track["@attr"]?.nowplaying === "true"

          setData({
            isPlaying,
            trackName: track.name,
            artistName: track.artist["#text"],
            albumImageUrl: track.image[3]["#text"] || track.image[2]["#text"],
            songUrl: track.url,
          })
        }
      } catch (error) {
        console.error("Failed to fetch now playing data", error)
      }
    }

    fetchNowPlaying()
    
    // Poll every 30 seconds only if the tab is active
    const interval = setInterval(() => {
      if (!document.hidden) {
        fetchNowPlaying()
      }
    }, 30000)

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchNowPlaying()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const isPlaying = data?.isPlaying
  const trackName = isPlaying ? data.trackName : t.widgets.trackName
  const trackDesc = isPlaying ? data.artistName : t.widgets.trackDesc
  const imageUrl = isPlaying ? data.albumImageUrl : null
  
  return (
    <a 
      href={data?.songUrl || "https://open.spotify.com/playlist/37i9dQZF1EQpj7X7UK8OOF"}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center gap-3.5 p-3 rounded-xl border border-white/[0.09] bg-white/[0.03] overflow-hidden backdrop-blur-md hover:bg-white/[0.06] transition-colors group"
      aria-label={`${isPlaying ? t.widgets.nowPlaying : t.widgets.lastPlayed}: ${trackName} - ${trackDesc}`}
    >
      {/* Imagem/Ícone do Álbum */}
      <div className="relative w-12 h-12 rounded-md bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center flex-shrink-0 border border-white/5 overflow-hidden">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${trackName} album cover`} width={48} height={48} className="w-full h-full object-cover" />
        ) : (
          <Music className="w-5 h-5 text-white/70" aria-hidden="true" />
        )}
      </div>
      
      {/* Informações da Música */}
      <div className="flex flex-col min-w-0 flex-1">
        <p className="text-[9px] font-medium uppercase tracking-widest text-accent mb-0.5 flex items-center gap-1.5" aria-hidden="true">
          {isPlaying ? t.widgets.nowPlaying : t.widgets.lastPlayed}
          {/* Animação do Equalizador só aparece se estiver tocando */}
          {isPlaying && (
            <span className="flex items-end gap-[2px] h-2.5">
              <span className="w-[2px] bg-accent/80 rounded-full animate-[bounce_1s_infinite_ease-in-out] motion-reduce:animate-none" style={{ height: '60%' }} />
              <span className="w-[2px] bg-accent/80 rounded-full animate-[bounce_1s_infinite_ease-in-out] motion-reduce:animate-none" style={{ height: '100%', animationDelay: '-0.2s' }} />
              <span className="w-[2px] bg-accent/80 rounded-full animate-[bounce_1s_infinite_ease-in-out] motion-reduce:animate-none" style={{ height: '40%', animationDelay: '-0.4s' }} />
            </span>
          )}
        </p>
        <p className="text-sm font-medium text-white truncate group-hover:text-accent transition-colors">{trackName}</p>
        <p className="text-[11px] text-white/45 truncate">{trackDesc}</p>
      </div>

      {/* Ícone do Spotify / Link (SVG) */}
      <svg viewBox="0 0 24 24" className="absolute top-3 right-3 w-4 h-4 fill-white/10 group-hover:fill-accent/50 transition-colors" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.021zM18.84 14.1c-.3.42-.84.54-1.26.24-3.36-2.04-8.52-2.64-12.54-1.44-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.56-1.32 10.2-0.6 14.04 1.68.48.3.6.84.3 1.26zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.781-.18-.6.18-1.2.78-1.38 4.2-1.26 11.28-1.02 15.72 1.62.539.3.719 1.02.419 1.56-.299.42-1.02.599-1.559.3z" />
      </svg>
    </a>
  )
}
