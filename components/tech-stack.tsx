import { MessageSquare, Database, Container, Webhook } from "lucide-react"

const tools = [
  {
    name: "Chatwoot",
    role: "Chat omnicanal",
    description: "Atención unificada para WhatsApp, redes y web. Conversaciones centralizadas que se convierten en ventas registradas.",
    icon: MessageSquare,
  },
  {
    name: "Odoo ERP v19",
    role: "Núcleo de negocio",
    description: "CRM, inventario, facturación electrónica y gestión comercial. Multi-tenant: cada cliente con su propia base de datos.",
    icon: Database,
  },
  {
    name: "Docker",
    role: "Aislamiento de procesos",
    description: "Contenedores que garantizan separación lógica, escalabilidad y seguridad. Infraestructura preparada para crecer.",
    icon: Container,
  },
  {
    name: "Webhooks en tiempo real",
    role: "Automatización",
    description: "De webhook a venta en minutos. Integración directa con medios de pago locales como Flow. Sin conciliaciones manuales.",
    icon: Webhook,
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left Column: Text and Grid */}
          <div className="flex-1">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
                Stack Tecnológico
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                No es PowerPoint. Es infraestructura real.
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                Herramientas probadas que demuestran que esto no es marketing inflado.
                Credibilidad técnica que respalda la promesa.
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
                Integración en Tiempo Real
              </div>
              <div className="h-full w-full p-6 flex items-center justify-center">
                <img
                  src="/smarter_burguer.png"
                  alt="SmarterBOT Software Stack"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Architecture diagram placeholder */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card/30 to-primary/10">
              <div className="absolute top-3 left-3 z-10 rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium text-foreground backdrop-blur-md border border-border">
                Infraestructura
              </div>
              <div className="h-full w-full p-6 flex flex-col items-center justify-center text-center">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                    Escalable
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Preparado para crecer sin fricción técnica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
