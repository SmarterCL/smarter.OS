import { Database, Box, GitBranch, MessageSquare, ShoppingCart, Bot } from "lucide-react"

const tools = [
  {
    name: "Odoo",
    role: "ERP Multi-Tenant",
    description: "CRM, ecommerce, inventario, facturacion. Un subdominio por cliente, una base de datos por tenant.",
    icon: ShoppingCart,
  },
  {
    name: "PostgreSQL",
    role: "Base de Datos",
    description: "Motor unico compartido con aislamiento total por base de datos. Backups independientes por tenant.",
    icon: Database,
  },
  {
    name: "Docker",
    role: "Contenedores",
    description: "Cada servicio vive aislado. Red interna privada, sin puertos expuestos. Solo Caddy habla con el mundo.",
    icon: Box,
  },
  {
    name: "Caddy",
    role: "Reverse Proxy",
    description: "HTTPS automatico, certificados gestionados, unico punto de entrada. Cero configuracion SSL manual.",
    icon: GitBranch,
  },
  {
    name: "n8n",
    role: "Automatizacion",
    description: "Workflows visuales que conectan webhooks, pagos, notificaciones y ERP. De conversacion a venta.",
    icon: Bot,
  },
  {
    name: "Chatwoot",
    role: "Comunicacion",
    description: "Atencion omnicanal integrada. WhatsApp, email, chat web. Todo conectado al flujo comercial.",
    icon: MessageSquare,
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Stack Tecnologico
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Herramientas que ya funcionan"}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Cada pieza elegida por rendimiento, estabilidad y porque ya demostro su valor en produccion."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
    </section>
  )
}
