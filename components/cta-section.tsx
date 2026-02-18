import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="relative border-t border-border py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card">
          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-[80px]" />

            <div className="relative text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {"Smarter OS es open source"}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {"Infraestructura + Seguridad + Multi-tenant + Automatizacion + Canal movil = Modelo SaaS replicable. Explora el codigo, auditalo, replicalo."}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://github.com/SmarterCL/smarter.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  Ver Repositorio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  En produccion
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
