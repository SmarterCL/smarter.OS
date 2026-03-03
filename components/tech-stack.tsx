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
        </div>
      </div>
    </section>
  )
}
