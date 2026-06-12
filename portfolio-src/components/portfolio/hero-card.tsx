"use client"

import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileCard } from "./profile-card"
import { useLanguage } from "@/lib/language-context"

export function HeroCard() {
  const { t } = useLanguage()

  return (
    <section id="home" className="col-span-full min-h-[70vh] flex items-center relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-20 animate-pulse hidden lg:block">
        <Star className="w-6 h-6 text-primary fill-primary/30" />
      </div>
      <div className="absolute top-32 left-40 animate-bounce hidden lg:block" style={{ animationDuration: "3s" }}>
        <Sparkles className="w-4 h-4 text-accent" />
      </div>
      <div className="absolute bottom-20 left-10 animate-pulse" style={{ animationDelay: "1s" }}>
        <Star className="w-4 h-4 text-primary fill-primary/30" />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-accent/15 to-primary/15 blur-3xl" />
      
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
        <div className="max-w-2xl flex-1">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">{t.hero.status}</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Brenda
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4">
            {t.hero.role}
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            {t.hero.description}
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
              asChild
            >
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                {t.hero.contactBtn}
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full border-2 hover:bg-secondary/50"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full border-2 hover:bg-secondary/50"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Profile Card - Right side */}
        <div className="hidden lg:block flex-shrink-0">
          <ProfileCard />
        </div>
        </div>
      </div>
    </section>
  )
}
