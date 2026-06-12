"use client"

import { Github, Linkedin, Mail, ArrowUpRight, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const contacts = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    handle: "@brendamedeiros",
    color: "hover:bg-foreground/10"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    handle: "/in/brendamedeiros",
    color: "hover:bg-blue-500/10"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contato@brendamedeiros.dev",
    handle: "contato@brendamedeiros.dev",
    color: "hover:bg-primary/10"
  }
]

export function ContactCard() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="col-span-full bg-card/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50 relative overflow-hidden transition-all duration-300 hover:border-primary/30">
      {/* Decorative elements */}
      <div className="absolute top-6 right-6">
        <Sparkles className="w-6 h-6 text-primary/30" />
      </div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Send className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">{t.contact.title}</h2>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
          {t.contact.description}
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-5 rounded-2xl bg-secondary/40 ${contact.color} border border-transparent hover:border-primary/20 transition-all group hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">{contact.name}</p>
                <p className="text-sm text-muted-foreground truncate">{contact.handle}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            asChild
          >
            <a href="mailto:contato@brendamedeiros.dev">
              <Mail className="w-4 h-4 mr-2" />
              {t.contact.sendEmail}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
