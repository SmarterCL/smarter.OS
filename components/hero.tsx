"use client"

import { Shield, Layers, Zap, ArrowRight } from "lucide-react"

export function Hero() {

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-2 pb-12 lg:pt-4 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Pain point header */}
          <div className="mb-6 inline-flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                Sistema Operativo Empresarial para Chile
              </span>
            </div>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Si tienes una Startup, Comercio o Empresa
            <br />
            <span className="text-primary mt-2 block">tienes ventaja con SmarterOS</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl font-medium">
            Centraliza ventas, gestión y cobros en un solo flujo.
            Ahora con <span className="text-foreground font-semibold">SmarterOS Box</span> y <span className="text-foreground font-semibold">Elia</span>:
            tu cerebro digital local y tu asistente IA siempre activa para facturar.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://flow.smarteros.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
            >
              Activar ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#recomendacion"
              className="flex items-center gap-2 rounded-lg border border-muted-foreground/30 bg-secondary/30 px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/50"
            >
              Recomendar y obtener comisión
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col items-center justify-center space-y-4">
            <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Sin formularios. Activación inmediata por WhatsApp o Email.<br />
              Valores en pesos chilenos + IVA. Solo para empresas con RUT.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <span className="flex items-center gap-2 text-sm font-medium text-foreground bg-secondary/20 px-4 py-2 rounded-lg border border-border/30">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#25D366] fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Business
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-foreground bg-secondary/20 px-4 py-2 rounded-lg border border-border/30">
                <Layers className="h-4 w-4 text-primary" />
                CRM + ERP + Tienda
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-foreground bg-secondary/20 px-4 py-2 rounded-lg border border-border/30">
                <Shield className="h-4 w-4 text-blue-500" />
                Facturación electrónica
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
