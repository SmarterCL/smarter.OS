"use client"

import { useState } from "react"
import { Menu, X, Github } from "lucide-react"

const navLinks = [
  { label: "Hostinger", href: "/#hostinger" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 overflow-hidden rounded-xl border border-border transition-transform group-hover:scale-105">
            <img src="/icon.jpg" alt="OpenClaw Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-foreground">
              {"Open"}<span className="text-primary">{"Claw"}</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">by Cortical Labs</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="https://origin.smarterbot.cl/"
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
            >
              Ingresar al Sistema
            </a>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground transition-all hover:bg-secondary/80 md:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background backdrop-blur-xl transition-all duration-300 md:hidden ${open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-foreground transition-all hover:text-primary"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center gap-6 w-full">
            <a
              href="https://origin.smarterbot.cl/"
              className="w-full max-w-xs rounded-2xl bg-primary px-8 py-4 text-center text-lg font-bold text-primary-foreground"
            >
              Ingresar al Sistema
            </a>
            <a
              href="https://github.com/SmarterCL/smarter.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
            >
              <Github className="h-5 w-5" />
              OpenClaw Source
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
