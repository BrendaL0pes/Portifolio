"use client"

export function SpotifyWidget({ playlistId = "37i9dQZF1DXcBWIGoYBM5M" }: { playlistId?: string }) {
  const src = `https://open.spotify.com/embed/playlist/37i9dQZF1EQpj7X7UK8OOF`
  return (
    <div className="p-0 bg-card rounded-lg overflow-hidden">
      <iframe
        title="Spotify playlist"
        src={src}
        width="100%"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
        className="block"
      />
    </div>
  )
}
