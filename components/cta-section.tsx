import { ArrowRight, MapPin, Globe, ShoppingBag, Github, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section id="invitacion" className="relative border-t border-border py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />

            <div className="relative text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {"Invitación Presencial"}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {"Ven a conocer la demo en vivo y postula tu proyecto en nuestro centro de operaciones:"}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-foreground font-medium">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Hub Metropolitano San Isidro 85 (A pasos del Metro Santa Lucía)</span>
              </div>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {"Pasa la tarjeta, entra en demo y deja que el sistema trabaje por ti 24/7."}
              </p>

              <div className="mt-[5px] text-xl font-bold text-primary">
                {"SmarterBot – Inteligencia Real. Resultados Reales."}
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56979540471"}?text=agenda%20demo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  <Calendar className="h-4 w-4" />
                  Genera tu Agenda
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://www.smarterbot.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <ShoppingBag className="h-4 w-4" />
                  www.smarterbot.store
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  En producción
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Documentado
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Auditado
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4">
                <a
                  href="https://mcpservers.org/search?query=smarterMCP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  <Github className="h-3 w-3" />
                  GitHub: SmarterMCP
                </a>
                <div className="text-xs text-muted-foreground/50">
                  Propuesta basada en la infraestructura de Smarter SPA (RUT: 78.233.417-4).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
