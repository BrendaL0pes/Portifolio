import { X, ExternalLink, Github, ImageIcon } from "lucide-react"
import Image from "next/image"

export interface ProjectModalData {
  title: string
  description: string
  tags: string[]
  type: string
  backend: string
  frontend: string
  database: string
  overview: string
  githubUrl?: string
  liveUrl?: string
  imagePath?: string // e.g. "/projects/ai-req.webp"
}

interface ProjectModalProps {
  project: ProjectModalData
  labels: {
    type: string
    backend: string
    frontend: string
    database: string
    overview: string
    github: string
    visitSite: string
  }
  onClose: () => void
}

export function ProjectModal({ project, labels, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto w-full h-full custom-scrollbar">
          {/* Header com Imagem */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
            {project.imagePath ? (
              <Image 
                src={project.imagePath} 
                alt={project.title}
                fill
                className="object-cover opacity-90"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-accent/50">
                <ImageIcon className="w-16 h-16 mb-2 opacity-50" />
                <p className="text-sm font-medium">1200 x 800 (WebP)</p>
              </div>
            )}
            
            {/* Overlay com Título */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white/80 text-sm md:text-base max-w-2xl">{project.description}</p>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="p-6 md:p-10">
            {/* Tags e Links */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    {labels.visitSite}
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/10 text-foreground text-sm font-medium rounded-lg hover:bg-white/5 transition-colors">
                    <Github className="w-4 h-4" />
                    {labels.github}
                  </a>
                )}
              </div>
            </div>

            {/* Grid de Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-4 rounded-xl bg-white/5 border border-white/5">
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-wider">{labels.type}</p>
                <p className="text-sm font-medium text-foreground">{project.type}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-wider">{labels.backend}</p>
                <p className="text-sm font-medium text-foreground">{project.backend}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-wider">{labels.frontend}</p>
                <p className="text-sm font-medium text-foreground">{project.frontend}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-wider">{labels.database}</p>
                <p className="text-sm font-medium text-foreground">{project.database}</p>
              </div>
            </div>

            {/* Visão Geral */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">{labels.overview}</h3>
              <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
                <p>{project.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
