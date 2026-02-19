import { Database, Server, Cpu, Briefcase, LineChart } from "lucide-react"

const tools = [
  {
    name: "CRM + ERP",
    role: "Suite de Negocio",
    description: "Odoo V19 + Chatwoot + WABA. Orquestado por n8n para flujos de venta automatizados y omnicanalidad.",
    icon: Briefcase,
  },
  {
    name: "Smarter Runtime MCP",
    role: "Gateway IA",
    description: "Caddy + FastAPI. Implementación del Model Context Protocol para conectar agentes con el mundo real.",
    icon: Cpu,
  },
  {
    name: "KPI Smarter",
    role: "Business Intelligence",
    description: "Grafana + Metabase. Tableros de control unificados para visualización de métricas en tiempo real.",
    icon: LineChart,
  },
  {
    name: "Infraestructura",
    role: "VPS + Dokploy",
    description: "Docker en Hostinger VPS. Gestión simplificada con Dokploy para despliegue de contenedores aislados.",
    icon: Server,
  },
  {
    name: "Supabase",
    role: "Base de Datos",
    description: "Motor único compartido con aislamiento total por base de datos. Backups independientes por tenant.",
    icon: Database,
  },
]

export function TechStack() {
  return (
    <section id="stack" className="relative border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Column: Text and Grid */}
          <div className="flex-1">
            <div className="mb-12 max-w-2xl">
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

          {/* Right Column: Burger Image */}
          <div className="flex items-center justify-center lg:w-1/3">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-secondary/30 p-8">
              {/* User requested "la foto de la hambueguesa" here */}
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                {/* Placeholder for the burger image. User needs to provide burger.png */}
                <img
                  src="/burger.png"
                  alt="Smarter OS Hamburguesa Tech Stack"
                  className="h-full w-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
