"use client"

import { Globe, Cpu, Atom, Zap, Server } from "lucide-react"

const locations = [
    {
        name: "Nunex.lat",
        region: "Latinoamérica",
        role: "El brazo ejecutor. Despliegue de infraestructura local y VPS de alto rendimiento (Hostinger).",
        tech: "Infraestructura Regional",
        icon: <Server className="h-6 w-6 text-sky-400" />,
        bg: "bg-sky-500/10",
        border: "border-sky-500/20"
    },
    {
        name: "Neuronal Silicio",
        region: "Suiza",
        role: "Precisión matemática y legal. Procesamiento exacto de facturas, RUTs y cumplimiento Ley REP.",
        tech: "Inteligencia Fría y Exacta",
        icon: <Cpu className="h-6 w-6 text-primary" />,
        bg: "bg-primary/10",
        border: "border-primary/20"
    },
    {
        name: "Cortical Hardware",
        region: "Australia",
        role: "Integración con Cortical Labs. Computación biológica, inteligencia orgánica y ultra bajo consumo.",
        tech: "Hardware Biológico Orgánico",
        icon: <Atom className="h-6 w-6 text-emerald-400" />,
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    }
]

export function GlobalInfrastructure() {
    return (
        <section id="labs" className="relative overflow-hidden bg-background py-24 sm:py-32">
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05]">
                <Globe className="w-full h-full text-primary" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-[0.3em]">Smarter Labs</h2>
                    <p className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-6xl uppercase italic">
                        Infraestructura Global
                    </p>
                    <p className="mt-6 text-xl leading-8 text-muted-foreground font-medium">
                        No somos software. Somos una red distribuida de capital e inteligencia operando en tres continentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="absolute top-0 right-0 p-8 z-20 hidden lg:block">
                        <div className="bg-background/80 backdrop-blur-md border border-primary/20 rounded-2xl p-4 shadow-xl">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">LightRAG Ignition</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[11px] font-bold text-foreground">Vueltas Autónomas: 5/5</p>
                                <p className="text-[11px] font-medium text-emerald-400">Energía Recibida (Flow Webhook OK)</p>
                            </div>
                        </div>
                    </div>
                    {locations.map((loc) => (
                        <div
                            key={loc.name}
                            className={`relative flex flex-col p-8 rounded-3xl border ${loc.border} bg-card/60 backdrop-blur-xl transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-primary/5`}
                        >
                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${loc.bg} shadow-inner`}>
                                {loc.icon}
                            </div>
                            <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tighter">{loc.name}</h3>
                            <p className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">{loc.region}</p>
                            
                            <div className="space-y-4 mb-8">
                                <p className="text-muted-foreground leading-relaxed font-medium">
                                    {loc.role}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-border/50">
                                <span className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-3 py-1 text-[10px] font-bold text-foreground border border-border">
                                    <Zap className="h-3 w-3 text-primary" />
                                    {loc.tech}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 rounded-[2rem] border border-primary/20 bg-primary/5 p-8 lg:p-16 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-black text-foreground uppercase italic mb-6">El Guión de Nunex Capital Group</h3>
                        <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                            "Smarterbot.cl es la interfaz; Smarter Labs es el motor. A través de Nunex Capital Group, traremos a Latinoamérica el poder del Silicio suizo para la gestión exacta y el Hardware Cortical australiano para el futuro de la IA biológica."
                        </blockquote>
                        <p className="mt-8 text-primary font-bold tracking-widest uppercase text-sm">
                            Arquitectura LightRAG &bull; Costo Operativo Eficiente
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
