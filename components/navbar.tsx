"use client"

import { useState } from "react"
import { Menu, X, Github } from "lucide-react"

const navLinks = [
  { label: "El Flujo", href: "/#porque" },
  { label: "SmarterOS Box", href: "/#box" },
  { label: "Bolt Studio", href: "/#studio" },
  { label: "Asistente", href: "/#bolt" },
  { label: "Planes", href: "/#planes" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 overflow-hidden rounded-xl border border-border/50 transition-transform group-hover:scale-105">
            <img src="/icon.jpg" alt="SmarterOS Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-foreground">
              {"Smarter"}<span className="text-primary">{"OS"}</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">BORN TO RUN</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="https://flow.smarterbot.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:opacity-90 active:scale-95"
            >
              Activar Box
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/50 text-foreground transition-all hover:bg-secondary md:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-foreground transition-all hover:text-primary active:scale-90"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center gap-6 w-full">
            <a
              href="https://flow.smarterbot.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs rounded-2xl bg-primary px-8 py-4 text-center text-lg font-bold text-primary-foreground shadow-xl shadow-primary/20"
            >
              Activar SmarterOS Box
            </a>
            <a
              href="https://github.com/SmarterCL/smarter.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
            >
              <Github className="h-5 w-5" />
              SmarterOS Source
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
