"use client"

import { useState, useRef, useEffect } from "react"
import { Database, HardDrive, Cpu, Shield, Layers, Smartphone, Repeat, Lock, Zap, ShoppingCart, LineChart } from "lucide-react"

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
        id: "kpi",
        title: "Observabilidad & IA",
        subtitle: "Control Total",
        icon: LineChart,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        content: (
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">Dashboards & Métricas</h3>
                <p className="text-muted-foreground text-lg">
                    Visualización en tiempo real de tu operación comercial y el rendimiento de tu IA local.
                </p>
                <div className="mt-4 overflow-hidden rounded-lg border border-border bg-card/50">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border/50 bg-secondary/30">
                                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Subdominio</th>
                                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Herramienta</th>
                                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Función</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                <tr className="group transition-colors hover:bg-secondary/20">
                                    <td className="px-4 py-3 font-mono text-xs text-rose-400">ai.smarterbot.cl</td>
                                    <td className="px-4 py-3 font-semibold">Grafana</td>
                                    <td className="px-4 py-3 text-muted-foreground">Dashboards de IA (Prometheus)</td>
                                </tr>
                                <tr className="group transition-colors hover:bg-secondary/20">
                                    <td className="px-4 py-3 font-mono text-xs text-rose-400">ia.smarterbot.cl</td>
                                    <td className="px-4 py-3 font-semibold">Grafana</td>
                                    <td className="px-4 py-3 text-muted-foreground">Dashboards de IA (Alias)</td>
                                </tr>
                                <tr className="group transition-colors hover:bg-secondary/20">
                                    <td className="px-4 py-3 font-mono text-xs text-blue-400">kpi.smarterbot.cl</td>
                                    <td className="px-4 py-3 font-semibold">Metabase</td>
                                    <td className="px-4 py-3 text-muted-foreground">Análisis de Datos (Supabase)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground font-mono bg-secondary/30 p-2 rounded border border-border/50">
                    <span className="text-rose-400">Note:</span>
                    <span>kpi.smarterbot.cl redirige a tu instancia privada de Metabase.</span>
                </div>
            </div>
        )
    },
    {
        id: "value",
        title: "Experiencia de Compra",
        subtitle: "Cierre de Venta",
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
                    De webhook a venta en minutos. Tus clientes pagan en tu propio dominio.
                </p>

                <div className="rounded-lg border border-border bg-card overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2">
                        <div className="flex gap-1.5">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <div className="mx-auto flex w-full max-w-[200px] items-center justify-center rounded-md bg-background py-0.5 text-[10px] text-muted-foreground font-mono">
                            <Lock className="mr-1 h-3 w-3" />
                            flow.smarterbot.cl
                        </div>
                    </div>
                    <div className="p-4 bg-background/50">
                        <div className="flex items-center justify-between gap-4 rounded border border-border/50 bg-card p-3">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center">
                                    <ShoppingCart className="h-4 w-4 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="text-sm font-bold">Smarter OS Plan</div>
                                    <div className="text-xs text-muted-foreground">Suscripción Mensual</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold">$990 USD</div>
                                <div className="text-xs text-green-500">Pagado</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    Estado: LISTO PARA VENDER
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
                        Solución comercial todo en uno
                    </h2>
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
