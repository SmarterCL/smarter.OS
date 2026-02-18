import { Lock, Users, Repeat, Smartphone, Cloud, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "Seguridad por diseno",
    description: "Firewall UFW, DOCKER-USER controlado, SSH restringido. Solo puertos 80/443 publicos. Nada se deja al azar.",
  },
  {
    icon: Users,
    title: "Multi-Tenant real",
    description: "Cada cliente tiene su subdominio y su base de datos. Aislamiento total dentro del mismo sistema.",
  },
  {
    icon: Repeat,
    title: "Modelo SaaS replicable",
    description: "La misma infraestructura sirve a N clientes. Escalar es crear un subdominio, no un nuevo servidor.",
  },
  {
    icon: Smartphone,
    title: "Canal movil nativo",
    description: "App movil conectada directamente a Odoo. Gestion del negocio desde cualquier lugar.",
  },
  {
    icon: Cloud,
    title: "Infraestructura auditada",
    description: "Logs auditables, reglas iptables persistentes, volumenes Docker definidos. Todo documentado.",
  },
  {
    icon: BarChart3,
    title: "Automatizacion comercial",
    description: "De webhook a venta en minutos. Generacion de links de pago, integracion con ERP automatica.",
  },
]

export function Features() {
  return (
    <section id="capas" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Capacidades
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"No es un proyecto. Es un stack operativo comercial."}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/50 transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                <feature.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
