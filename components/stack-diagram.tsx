"use client"

import { useState } from "react"
import {
  Globe,
  Shield,
  Container,
  Server,
  Workflow,
  Database,
  HardDrive,
} from "lucide-react"

const layers = [
  {
    id: "pan-superior",
    icon: Globe,
    name: "Interfaz Publica",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    accentColor: "text-primary",
    items: ["Dominios .cl y .store", "HTTPS automatico con Caddy", "App movil conectada a Odoo", "Atencion omnicanal con Chatwoot"],
    description: "Entrada limpia, segura y profesional.",
  },
  {
    id: "capa-1",
    icon: Shield,
    name: "Gateway & Seguridad",
    color: "from-emerald-500/15 to-emerald-500/5",
    borderColor: "border-emerald-500/25",
    accentColor: "text-emerald-400",
    items: ["Firewall UFW", "DOCKER-USER controlado", "Solo 80 / 443 publicos", "SSH restringido"],
    description: "El perimetro manda. Docker obedece.",
  },
  {
    id: "capa-2",
    icon: Container,
    name: "Orquestacion",
    color: "from-sky-500/15 to-sky-500/5",
    borderColor: "border-sky-500/25",
    accentColor: "text-sky-400",
    items: ["Docker aislando procesos", "Red interna privada", "expose en vez de ports", "Caddy como unico entrypoint"],
    description: "Servicios invisibles desde Internet.",
  },
  {
    id: "capa-3",
    icon: Server,
    name: "Nucleo de Negocio",
    color: "from-amber-500/15 to-amber-500/5",
    borderColor: "border-amber-500/25",
    accentColor: "text-amber-400",
    items: ["ERP multi-tenant en Odoo V19", "Subdominio = Base de datos", "PostgreSQL unico, multiples DB", "CRM, ecommerce, pagos"],
    description: "Cada cliente vive aislado dentro del mismo sistema.",
  },
  {
    id: "capa-4",
    icon: Workflow,
    name: "Automatizacion & Flujo",
    color: "from-rose-500/15 to-rose-500/5",
    borderColor: "border-rose-500/25",
    accentColor: "text-rose-400",
    items: ["Webhook a Automatizacion", "Generacion de link de pago", "Conversacion a Venta", "Integracion con ERP"],
    description: "Respuesta en minutos, no en horas.",
  },
  {
    id: "capa-5",
    icon: Database,
    name: "Persistencia & Datos",
    color: "from-indigo-500/15 to-indigo-500/5",
    borderColor: "border-indigo-500/25",
    accentColor: "text-indigo-400",
    items: ["Backups por base", "Reglas iptables persistentes", "Volumenes Docker definidos", "Logs auditables"],
    description: "Nada depende de la suerte.",
  },
  {
    id: "pan-inferior",
    icon: HardDrive,
    name: "Hardware",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
    accentColor: "text-primary",
    items: ["Mac mini M4 Pro", "Hasta 64GB RAM", "Neural Engine 16-core", "1TB-8TB SSD"],
    description: "Sin base solida no hay plataforma.",
  },
]

export function StackDiagram() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  return (
    <section id="arquitectura" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Arquitectura
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {"El total sobre el plato"}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Cada capa cumple una funcion. Cada capa esta documentada. Cada capa esta funcionando."}
          </p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {layers.map((layer, index) => {
            const isActive = activeLayer === layer.id
            const Icon = layer.icon

            return (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(isActive ? null : layer.id)}
                className={`group relative overflow-hidden rounded-xl border text-left transition-all duration-300 ${isActive
                  ? `${layer.borderColor} bg-gradient-to-r ${layer.color}`
                  : "border-border bg-card hover:border-border/80 hover:bg-secondary/30"
                  }`}
              >
                {/* Layer number indicators */}
                {index > 0 && index < layers.length - 1 && (
                  <div className={`absolute top-3 right-4 text-xs font-mono ${isActive ? layer.accentColor : "text-muted-foreground/40"}`}>
                    {"Capa "}{index}
                  </div>
                )}

                <div className="flex items-center gap-4 p-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${isActive ? `bg-background/20 ${layer.accentColor}` : "bg-secondary text-muted-foreground"
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold transition-colors ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                      {layer.name}
                    </h3>
                    <p className={`mt-0.5 text-sm ${isActive ? layer.accentColor : "text-muted-foreground"}`}>
                      {layer.description}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <div className="border-t border-border/30 px-5 pb-5 pt-4">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {layer.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-lg bg-background/30 px-3 py-2"
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${layer.accentColor} bg-current`} />
                          <span className="text-sm text-foreground/90 font-mono">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
