"use client"

import { useState, useRef, useEffect } from "react"
import { Database, HardDrive, Cpu, Shield, Layers, Smartphone, Repeat, Lock, Zap, ShoppingCart } from "lucide-react"

const stackItems = [
    {
        id: "software",
        title: "Software (.OS)",
        subtitle: "El sistema que 'lo acomoda todo'",
        icon: Database,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        content: (
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">Odoo ERP v19 + n8n + IA Local</h3>
                <p className="text-muted-foreground text-lg">
                    Automatización total de flujos de venta y gestión. No es solo un ERP, es un sistema operativo que orquesta tu negocio.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30">Odoo v19</span>
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm border border-pink-500/30">n8n Workflow</span>
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm border border-amber-500/30">IA Local</span>
                </div>
            </div>
        )
    },
    {
        id: "mcp",
        title: "Smarter MCP",
        subtitle: "Solución Todo en Uno",
        icon: Cpu,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        content: (
            <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-mono mb-2 uppercase tracking-widest border border-purple-500/30">
                    Open Source
                </div>
                <h3 className="text-2xl font-bold">La Conexión Inteligente</h3>
                <p className="text-muted-foreground text-lg">
                    El protocolo que permite a tu IA interactuar con el mundo real, conectando agentes autónomos con tu base de datos y herramientas sin fricción.
                </p>
            </div>
        )
    },
    {
        id: "hardware",
        title: "Hardware Autónomo",
        subtitle: "Procesamiento Local",
        icon: HardDrive,
        color: "text-zinc-400",
        bg: "bg-zinc-500/10",
        border: "border-zinc-500/20",
        content: (
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">Mac mini M4</h3>
                <p className="text-muted-foreground text-lg">
                    Setup con 24GB/32GB RAM para procesar tu propia IA sin depender de la nube. Control total de tus datos y latencia cero.
                </p>
                <div className="relative mt-6 h-32 w-full rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="text-center z-10">
                        <p className="text-white font-bold text-xl tracking-tight">M4 Chip</p>
                        <p className="text-zinc-400 text-xs mt-1">Neural Engine de próxima generación</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "security",
        title: "Seguridad y Diseño",
        subtitle: "Infraestructura Blindada",
        icon: Shield,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        content: (
            <ul className="space-y-4">
                <li className="flex gap-3">
                    <Lock className="h-6 w-6 text-emerald-500 shrink-0" />
                    <div>
                        <strong className="block text-foreground">Firewall UFW + Docker</strong>
                        <span className="text-muted-foreground">Solo puertos 80/443 públicos. SSH restringido.</span>
                    </div>
                </li>
                <li className="flex gap-3">
                    <Layers className="h-6 w-6 text-emerald-500 shrink-0" />
                    <div>
                        <strong className="block text-foreground">Multi-Tenant Real</strong>
                        <span className="text-muted-foreground">Aislamiento total por cliente (Subdominio + DB propia).</span>
                    </div>
                </li>
            </ul>
        )
    },
    {
        id: "scalability",
        title: "Escalabilidad",
        subtitle: "Modelo SaaS Replicable",
        icon: Repeat,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        content: (
            <ul className="space-y-4">
                <li className="flex gap-3">
                    <Repeat className="h-6 w-6 text-orange-500 shrink-0" />
                    <div>
                        <strong className="block text-foreground">Infraestructura Elástica</strong>
                        <span className="text-muted-foreground">La misma infraestructura sirve a N clientes. Escalar es crear un subdominio.</span>
                    </div>
                </li>
                <li className="flex gap-3">
                    <Smartphone className="h-6 w-6 text-orange-500 shrink-0" />
                    <div>
                        <strong className="block text-foreground">Canal Móvil Nativo</strong>
                        <span className="text-muted-foreground">App conectada a Odoo para gestionar tu negocio desde cualquier lugar.</span>
                    </div>
                </li>
            </ul>
        )
    },
    {
        id: "value",
        title: "Checkout",
        subtitle: "El Valor Real",
        icon: ShoppingCart,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        content: (
            <div className="text-center space-y-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <Zap className="h-8 w-8 text-primary animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold">Automatización Comercial</h3>
                <p className="text-muted-foreground">
                    De webhook a venta en minutos. Generación automática de links de pago e integración con ERP.
                </p>
                <div className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-sm font-mono text-primary">Estado: LISTO PARA VENDER</p>
                </div>
            </div>
        )
    }
]

export function InteractiveStack() {
    const [activeId, setActiveId] = useState(stackItems[0].id)
    const activeItem = stackItems.find(item => item.id === activeId) || stackItems[0]

    return (
        <section id="propuesta" className="py-8 lg:py-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="mx-auto mb-8 max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            Smarter OS
                        </span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                        Solución comercial todo en una sola plataforma
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Un solo pago
                    </p>
                </div>

                {/* Mobile View: Sequential List */}
                <div className="flex flex-col gap-6 lg:hidden">
                    {stackItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.id} className={`overflow-hidden rounded-2xl border ${item.border} bg-card/40 backdrop-blur-sm shadow-sm`}>
                                <div className={`px-6 py-5 flex items-center gap-4 border-b border-border/50 ${item.bg}`}>
                                    <div className={`p-2 rounded-lg bg-background/50`}>
                                        <Icon className={`h-6 w-6 ${item.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                        <p className="text-xs text-foreground/70">{item.subtitle}</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    {item.content}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Desktop View: Interactive Grid */}
                <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
                    {/* Navigation (The Stack Layers) */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {stackItems.map((item) => {
                            const isActive = activeId === item.id
                            const Icon = item.icon
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    className={`group flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 ${isActive
                                        ? `${item.border} ${item.bg} shadow-lg ring-1 ring-primary/20`
                                        : "border-transparent hover:bg-secondary/50 hover:border-border"
                                        }`}
                                >
                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${isActive ? "bg-background shadow-sm" : "bg-secondary group-hover:bg-background"
                                        }`}>
                                        <Icon className={`h-6 w-6 ${isActive ? item.color : "text-muted-foreground group-hover:text-foreground"}`} />
                                    </div>
                                    <div>
                                        <span className={`block font-semibold transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                                            {item.title}
                                        </span>
                                        <span className="text-xs text-muted-foreground/80 hidden sm:block">
                                            {item.subtitle}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    {/* Active Content Area */}
                    <div className="lg:col-span-8">
                        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm min-h-[500px] flex flex-col">
                            {/* Header of the card */}
                            <div className={`px-8 py-6 border-b border-border/50 flex items-center gap-4 ${activeItem.bg}`}>
                                {(() => {
                                    const Icon = activeItem.icon
                                    return <Icon className={`h-8 w-8 ${activeItem.color}`} />
                                })()}
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{activeItem.title}</h3>
                                    <p className="text-sm text-foreground/70">{activeItem.subtitle}</p>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-8 flex-1 flex flex-col justify-center">
                                <div key={activeId} className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    {activeItem.content}
                                </div>
                            </div>

                            {/* Footer/Decoration */}
                            <div className="px-8 py-4 bg-secondary/20 border-t border-border/50 text-xs font-mono text-muted-foreground flex justify-between uppercase tracking-widest">
                                <span>Smarter OS Stack</span>
                                <span>Module: {activeItem.id.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
