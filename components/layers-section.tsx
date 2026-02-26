import { Smartphone, Users, Package, CreditCard } from "lucide-react"

const layers = [
  {
    number: "Capa 1",
    icon: Smartphone,
    name: "Canales",
    description: "Puntos de entrada",
    items: ["WhatsApp Business", "Redes sociales", "Web", "Email"],
    color: "text-emerald-400",
    bg: "from-emerald-500/15 to-emerald-500/5",
    border: "border-emerald-500/25",
  },
  {
    number: "Capa 2",
    icon: Users,
    name: "Gestión Comercial",
    description: "CRM y seguimiento",
    items: ["Registro de leads", "Seguimiento de ventas", "Gestión de clientes", "Pipeline comercial"],
    color: "text-sky-400",
    bg: "from-sky-500/15 to-sky-500/5",
    border: "border-sky-500/25",
  },
  {
    number: "Capa 3",
    icon: Package,
    name: "Operación",
    description: "ERP y facturación",
    items: ["Facturación electrónica", "Inventario", "Órdenes de venta", "Gestión de productos"],
    color: "text-amber-400",
    bg: "from-amber-500/15 to-amber-500/5",
    border: "border-amber-500/25",
  },
  {
    number: "Capa 4",
    icon: CreditCard,
    name: "Financiera",
    description: "Pagos y reportes",
    items: ["Cobros por Flow", "Conciliación automática", "Reportes financieros", "Flujo de caja"],
    color: "text-rose-400",
    bg: "from-rose-500/15 to-rose-500/5",
    border: "border-rose-500/25",
  },
]

export function LayersSection() {
  return (
    <section id="capas" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Arquitectura por Capas
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Capas claras. Riesgo técnico controlado.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Cuando un inversionista ve capas separadas, entiende que la infraestructura está bajo control.
          </p>
        </div>

        {/* Layers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {layers.map((layer) => {
            const Icon = layer.icon
            return (
              <div
                key={layer.name}
                className={`group relative overflow-hidden rounded-2xl border bg-card/50 p-8 transition-all hover:bg-secondary/20 ${layer.border}`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${layer.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10`}>
                      <Icon className={`h-6 w-6 ${layer.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {layer.number}
                      </p>
                      <h3 className="text-xl font-bold text-foreground">{layer.name}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">
                    {layer.description}
                  </p>

                  {/* Items list */}
                  <ul className="space-y-3">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className={`h-1.5 w-1.5 rounded-full ${layer.color} bg-current`} />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl border border-border bg-card/30 px-8 py-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-primary">Venta → Registro → Facturación → Cobro → Conciliación → Reporte</span>
              <br />
              Un flujo operativo único. Sin silos. Sin fricción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
