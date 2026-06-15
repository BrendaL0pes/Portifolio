"use client"

import { Github, Linkedin, Mail, ArrowUpRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileCard } from "./profile-card"
import { useLanguage } from "@/lib/language-context"

export function HeroCard() {
  const { t } = useLanguage()

  return (
    <section id="home" className="col-span-full min-h-screen flex items-center relative bg-background overflow-hidden">
      {/* Decorative stars - Background layer */}
      <Star className="absolute top-10 left-10 w-8 h-8 text-accent/40 z-0" />
      <Star className="absolute bottom-20 left-20 w-6 h-6 text-accent/40 z-0" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-20 w-64 h-64 rounded-full bg-accent/15 blur-3xl pointer-events-none z-0" />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-full mb-8 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-accent">Brenda</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Software Engineer
            </p>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              {t.hero.description || "Passionate about building scalable applications with modern technologies. Specialized in Java backend development and AI-driven solutions."}
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in touch
                </a>
              </Button>
              
              <Button 
                size="lg"
                className="rounded-full bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-colors"
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
                className="rounded-full bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-colors"
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
          
          {/* RIGHT COLUMN - Profile Card */}
          <div className="hidden lg:flex justify-center">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  )
}
