"use client"

import { Camera, Wand2, FileText, Upload, ArrowRight, Sparkles } from "lucide-react"

const steps = [
    {
        icon: Camera,
        step: "01",
        title: "Foto desde bodega",
        description: "Subes una foto con tu celular. Sin estudio, sin luz especial, sin cámara profesional.",
        color: "text-violet-400",
        bg: "from-violet-500/20 to-violet-500/5",
        border: "border-violet-500/25",
        link: "https://wa.me/56979540471?text=Quiero%20probar%20Bolt%20Studio%2C%20env%C3%ADo%20una%20foto"
    },
    {
        icon: Wand2,
        step: "02",
        title: "Motor ComfyUI procesa",
        description: "Fondo blanco puro estándar ML, lifestyle pro en escenas reales, texto de ficha SEO generado automáticamente.",
        color: "text-primary",
        bg: "from-primary/20 to-primary/5",
        border: "border-primary/25",
    },
    {
        icon: FileText,
        step: "03",
        title: "Ficha técnica lista",
        description: "Título, descripción, palabras clave y atributos optimizados para Mercado Libre y tienda online.",
        color: "text-sky-400",
        bg: "from-sky-500/20 to-sky-500/5",
        border: "border-sky-500/25",
    },
    {
        icon: Upload,
        step: "04",
        title: "Publicación One-Click",
        description: "Sincronización automática con Odoo v19. El producto queda activo en tu catálogo sin ningún paso manual.",
        color: "text-emerald-400",
        bg: "from-emerald-500/20 to-emerald-500/5",
        border: "border-emerald-500/25",
    },
]

const outputs = [
    { label: "Fondo blanco puro", subtitle: "Estándar MercadoLibre", emoji: "⬜" },
    { label: "Lifestyle Pro", subtitle: "Oficinas, talleres, hogares", emoji: "🏠" },
    { label: "Copywriting IA", subtitle: "Fichas SEO que venden", emoji: "✍️" },
    { label: "Odoo Sync", subtitle: "Publicado en segundos", emoji: "⚡" },
]

export function BoltStudio() {
    return (
        <section id="studio" className="relative border-t border-border py-24 lg:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                        <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Bolt Studio IA</span>
                    </div>
                    <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                        Del Bit al{" "}
                        <span className="text-primary">Átomo</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Una foto fea desde la bodega → una venta real en{" "}
                        <span className="text-foreground font-semibold">5 minutos</span>.{" "}
                        Sin cámaras, sin fotógrafos, sin estudios.
                    </p>
                </div>

                {/* Promise banner */}
                <div className="mb-16 mx-auto max-w-2xl">
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 px-8 py-6 text-center">
                        <p className="text-xl font-bold text-foreground">
                            "Te entregamos{" "}
                            <span className="text-primary">10 productos</span>{" "}
                            listos para vender en 24 horas."
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Sin cámaras · Sin fotógrafos · Sincronizado con tu Odoo v19
                        </p>
                    </div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {steps.map((s: any, idx) => {
                        const Icon = s.icon
                        const StepContent = (
                            <div className={`flex flex-col p-6 rounded-2xl border bg-card/40 ${s.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full`}>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`h-5 w-5 ${s.color}`} />
                                    </div>
                                    <span className="text-4xl font-black text-border/30 leading-none">{s.step}</span>
                                </div>
                                <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{s.description}</p>
                            </div>
                        )

                        return (
                            <div key={idx} className="relative group">
                                {/* Connector line */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(100%+0px)] w-full h-px bg-gradient-to-r from-border to-transparent z-10 pointer-events-none" style={{ width: "calc(100% - 100% + 24px)", left: "calc(100% - 12px)" }}>
                                        <ArrowRight className="absolute -top-2 right-0 h-4 w-4 text-border" />
                                    </div>
                                )}
                                {s.link ? (
                                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                        {StepContent}
                                    </a>
                                ) : StepContent}
                            </div>
                        )
                    })}
                </div>

                {/* Output showcase */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {outputs.map((o, idx) => (
                        <div key={idx} className="rounded-xl border border-border bg-card/30 p-5 text-center hover:bg-card/60 transition-colors">
                            <div className="text-3xl mb-3">{o.emoji}</div>
                            <p className="text-sm font-bold text-foreground">{o.label}</p>
                            <p className="text-xs text-muted-foreground mt-1">{o.subtitle}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href={`https://wa.me/56979540471?text=Quiero%20probar%20Bolt%20Studio%2C%20env%C3%ADo%20una%20foto`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-primary-foreground font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-primary/25"
                    >
                        <Camera className="h-5 w-5" />
                        Enviar mi primera foto por WhatsApp
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <p className="mt-4 text-sm text-muted-foreground">
                        Envíanos una foto de cualquier producto y te devolvemos la ficha de Odoo lista.
                    </p>
                </div>
            </div>
        </section>
    )
}
