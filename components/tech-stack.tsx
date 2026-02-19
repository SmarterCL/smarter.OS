import { Database, Server, Cpu, Briefcase, LineChart, HardDrive } from "lucide-react"

const tools = [
  {
    name: "Software (.OS)",
    role: "El sistema que 'lo acomoda todo'",
    description: "Odoo ERP v19 + n8n + IA Local. Automatización total de flujos de venta y gestión.",
    icon: Database,
  },
  {
    name: "Hardware Autónomo",
    role: "Procesamiento Local",
    description: "Configuración high-end con Mac mini M4 Pro, hasta 64GB RAM unificada y Neural Engine 16-core para IA local.",
    icon: HardDrive,
  },
]

export function TechStack() {
  return (
    <section id="propuesta" className="relative border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Column: Text and Grid */}
          <div className="flex-1">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
                La Propuesta
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {"Exoesqueleto Comercial"}
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {"Es hora de cambiar el juego con un sistema diseñado en Chile que lo acomoda todo."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-secondary/20"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{tool.name}</h3>
                      <p className="text-xs font-mono text-muted-foreground">{tool.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            {/* Software Visualization - Smarter Burger */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary/30">
              <div className="absolute top-3 left-3 z-10 rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium text-foreground backdrop-blur-md border border-border">
                Software (.OS)
              </div>
              <div className="h-full w-full p-6 flex items-center justify-center">
                <img
                  src="/smarter_burguer.png"
                  alt="Smarter OS Software Stack"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Hardware Visualization - Mac Mini M4 Simulation */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-secondary/30">
              <div className="absolute top-3 left-3 z-10 rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium text-foreground backdrop-blur-md border border-border">
                Hardware Autónomo
              </div>
              <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-900 flex items-center justify-center p-6">
                {/* CSS Mac Mini */}
                <div className="relative group">
                  {/* Glow under device */}
                  <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                  {/* Device Body */}
                  <div className="relative h-16 w-40 sm:h-20 sm:w-48 rounded-xl bg-gradient-to-b from-zinc-300 to-zinc-400 shadow-xl flex items-center justify-center border-t border-white/50">
                    {/* Apple Logo Placeholder */}
                    <div className="h-6 w-6 opacity-20 text-black">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.3-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.72-3.06 1.61-.69.8-1.27 1.95-1.11 3.07 1.19.09 2.4-.6 3.1-1.57z" />
                      </svg>
                    </div>
                  </div>

                  {/* Front Indicator Light */}
                  <div className="absolute bottom-1.5 right-3 h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_8px_1px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Specs Floating */}
                <div className="absolute bottom-3 right-3 text-[9px] text-zinc-500 font-mono text-right opacity-60">
                  <div className="flex items-center gap-1 justify-end">
                    <span>M4</span> <Cpu className="h-2 w-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
