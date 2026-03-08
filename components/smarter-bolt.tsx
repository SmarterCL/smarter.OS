"use client"

import { Bot, CheckCircle2, Clock, Zap, Shield, ExternalLink } from "lucide-react"

export function SmarterBolt() {
    return (
        <section id="bolt" className="border-t border-border bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
                        Asistente Virtual 24/7
                    </p>
                    <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Smarter Bolt
                    </h2>
                    <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                        Smarter Bolt se entrena con la información de tu negocio y responde preguntas frecuentes,
                        toma pedidos, agenda citas y guía a tus clientes en el proceso de compra.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-start">
                    {/* Features */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <Bot className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Smarter Bolt</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Smarter Bolt se entrena con la información de tu negocio y responde preguntas frecuentes, toma pedidos, agenda citas y guía a tus clientes en el proceso de compra.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-2xl font-bold text-foreground">&lt; 48h</p>
                                <p className="text-xs text-muted-foreground mt-1">Para probarlo con tu web</p>
                            </div>
                            <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                                <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-2xl font-bold text-foreground">Setup gratuito</p>
                                <p className="text-xs text-muted-foreground mt-1">Sin coste de implementación</p>
                            </div>
                            <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-2xl font-bold text-foreground">24/7</p>
                                <p className="text-xs text-muted-foreground mt-1">Siempre disponible</p>
                            </div>
                            <div className="rounded-xl border border-border bg-secondary/30 p-4 text-center">
                                <CheckCircle2 className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-2xl font-bold text-foreground">+Ventas</p>
                                <p className="text-xs text-muted-foreground mt-1">Tu equipo vende más</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Cards */}
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://app.smarterbot.cl/demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center transition-all hover:bg-primary/15 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <Bot className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Pruébalo ahora</h3>
                                <p className="text-sm text-muted-foreground mt-1">Demo interactiva con Smarter Bolt</p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                                Iniciar demo <ExternalLink className="h-4 w-4" />
                            </span>
                        </a>

                        <a
                            href="https://app.smarterbot.cl/onboarding?plan=bolt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-8 text-center transition-all hover:bg-secondary/30 hover:shadow-md"
                        >
                            <Zap className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Montar en mi web</h3>
                                <p className="text-sm text-muted-foreground mt-1">Implementación en &lt; 48h</p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                                Comenzar ahora <ExternalLink className="h-4 w-4" />
                            </span>
                        </a>

                        <div className="rounded-xl bg-secondary/40 p-4 text-xs text-muted-foreground border border-border">
                            <p>
                                * Smarter Bolt se integra con tu sitio web actual. Compatible con WordPress, Shopify, WooCommerce y sitios custom.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
