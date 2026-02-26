import { ArrowRight } from "lucide-react"

const workflowSteps = [
  { step: "Venta", icon: "📥" },
  { step: "Registro", icon: "📝" },
  { step: "Facturación", icon: "🧾" },
  { step: "Cobro", icon: "💳" },
  { step: "Conciliación", icon: "✅" },
  { step: "Reporte", icon: "📊" },
]

export function WhySmarterOS() {
  return (
    <section id="porque" className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Por Qué SmarterOS
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            La diferencia es profunda
          </h2>
        </div>

        {/* Problem statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left: The problem */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Un CRM es una herramienta.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Un ERP es una herramienta. WhatsApp Business es un canal. Por separado, 
                crean silos, duplican trabajo y generan fricción administrativa.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                SmarterOS los convierte en un flujo operativo único.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No es software. Es sistema operativo empresarial para Chile. 
                Centralización operativa para empresas con RUT. Facturación electrónica real. 
                Integración con medios de pago locales como Flow sin conciliaciones manuales.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                Esto es arquitectura
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Y eso hay que explicarlo arriba, antes de los planes. Porque la infraestructura 
                digital para pymes chilenas no es opcional: es lo que transforma visión en flujo de caja.
              </p>
            </div>
          </div>

          {/* Right: The workflow visualization */}
          <div className="relative">
            <div className="sticky top-24">
              {/* Flow diagram */}
              <div className="relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm">
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary">
                  Flujo SmarterOS
                </div>

                {/* Workflow steps */}
                <div className="flex flex-col gap-3">
                  {workflowSteps.map((item, index) => (
                    <div key={item.step} className="relative">
                      <div className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:bg-secondary/20">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold text-foreground">{item.step}</span>
                        {index < workflowSteps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground/50 absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block" />
                        )}
                      </div>
                      {index < workflowSteps.length - 1 && (
                        <div className="absolute left-6 top-full h-3 w-px bg-border hidden lg:block" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom message */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-center text-sm font-medium text-primary">
                    → Un solo flujo. Cero fricción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key message */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed italic">
              "SmarterOS no controla empresas.<br />
              <span className="text-primary font-semibold">SmarterOS elimina fricción administrativa.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
