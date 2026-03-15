"use client"

import { useState } from "react"
import { Box, Check, Cpu, Globe, Layout, Rocket, Server, Shield, Smartphone, Zap, MessageCircle, Send, FileDown, ShoppingCart, CreditCard, FileText, Brain } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const configurations = [
    {
        id: "ready",
        title: "Modelo Ready to Use",
        subtitle: "Recomendado para Negocios",
        description: "La experiencia definitiva plug-and-play. Conecta, usa y factura en menos de 2 minutos.",
        icon: <Rocket className="h-6 w-6 text-primary" />,
        features: [
            "Software pre-instalado y configurado",
            "Soporte premium incluido",
            "Actualizaciones automáticas",
        ],
        inBox: ["SmarterOS Box v1", "Fuente de poder", "Cable Ethernet Pro", "Tarjeta Guía Rápida", "QR de Activación"],
        steps: ["Conectar Internet", "Conectar Energía", "Abrir Dashboard (smarteros.local)"],
        status: "popular"
    },
    {
        id: "installer",
        title: "Modelo Installer",
        subtitle: "Para Implementadores",
        description: "Caja con asistente de instalación automático para configurar idioma, empresa y red.",
        icon: <Layout className="h-6 w-6 text-primary" />,
        features: [
            "Instalación en 5-10 minutos",
            "Configuración personalizada desde el inicio",
            "Menos dependencia de soporte técnico",
        ],
        inBox: ["SmarterOS Box", "Fuente de poder", "Software Installer"],
        steps: ["Elegir Idioma", "Configurar Red", "Registrar Empresa", "Instalación Automática"],
    },
    {
        id: "dev",
        title: "Developer Kit",
        subtitle: "Para Experimentadores",
        description: "Hardware crudo con imagen oficial y documentación completa para integradores y partners.",
        icon: <Cpu className="h-6 w-6 text-primary" />,
        features: [
            "Acceso total al sistema",
            "Imagen OS oficial disponible",
            "Documentación técnica profunda",
        ],
        inBox: ["Hardware compatible", "Imagen del OS", "Acceso a Docs de Partner"],
        steps: ["Flashear Imagen (NVMe/eMMC)", "Configurar Entorno", "Instalar Stack SmarterOS"],
    },
]

const preInstalled = [
    { name: "Linux OS", icon: <Server className="h-4 w-4" /> },
    { name: "Docker", icon: <Box className="h-4 w-4" /> },
    { name: "n8n (Workflows)", icon: <Zap className="h-4 w-4" /> },
    { name: "SmarterOS Services", icon: <Shield className="h-4 w-4" /> },
    { name: "Flow Connector", icon: <Globe className="h-4 w-4" /> },
    { name: "Identity Engine", icon: <Smartphone className="h-4 w-4" /> },
    { name: "Dashboard UI", icon: <Layout className="h-4 w-4" /> },
]

export function SmarterOSBox() {
    const [selectedConfig, setSelectedConfig] = useState("ready")

    const currentConfig = configurations.find(c => c.id === selectedConfig) || configurations[0]

    return (
        <section id="box" className="relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">OpenClaw v1</h2>
                    <p className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl uppercase italic">
                        AI Automation Appliance
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        La infraestructura física de OpenClaw. Hardware diseñado para correr tu cerebro digital localmente.
                        Sin suscripciones ocultas, con el poder de la serie Rockchip RK35xx.
                    </p>
                </div>

                <Tabs defaultValue="5plus" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-muted/50 p-1 rounded-2xl border border-border/50">
                            <TabsTrigger value="5plus" className="rounded-xl px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all font-bold">
                                Orange Pi 5 Plus
                            </TabsTrigger>
                            <TabsTrigger value="6plus" className="rounded-xl px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all font-bold">
                                Orange Pi 6 Plus
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="5plus" className="mt-0 focus-visible:outline-none">
                        <BoxDetail board="Orange Pi 5 Plus" processor="RK3588 (8 núcleos)" currentConfig={currentConfig} setSelectedConfig={setSelectedConfig} />
                    </TabsContent>
                    <TabsContent value="6plus" className="mt-0 focus-visible:outline-none">
                        <BoxDetail board="Orange Pi 6 Plus" processor="RK3599 (12 núcleos)" currentConfig={currentConfig} setSelectedConfig={setSelectedConfig} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}

function BoxDetail({ board, processor, currentConfig, setSelectedConfig }: { board: string, processor: string, currentConfig: typeof configurations[0], setSelectedConfig: (id: string) => void }) {
    return (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* VISTA DEL PRODUCTO / HARDWARE */}
            <div className="space-y-8">
                <div className="relative group">
                    <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-card/50 to-background p-2 shadow-2xl transition-all group-hover:shadow-primary/5">
                        <img
                            src="/Users/mac/.gemini/antigravity/brain/84ad6398-f213-47bf-80ee-cb5f67a5777a/orangepi_hardware_mockup_1773590543542.png"
                            alt="Orange Pi Hardware Mockup"
                            className="w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                            {preInstalled.map((item) => (
                                <div key={item.name} className="flex items-center gap-1.5 rounded-full bg-background/60 px-3 py-1.5 text-[10px] font-bold text-foreground backdrop-blur-md border border-white/10 uppercase tracking-tight">
                                    {item.icon}
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-border/50 bg-secondary/20 p-8 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Cpu className="h-24 w-24" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground uppercase tracking-tighter italic">¿Por qué este modelo?</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed italic">
                        Similar a como Synology es para almacenamiento o Ubiquiti para redes,
                        <strong className="text-foreground"> OpenClaw</strong> es para la **automatización de procesos empresariales y soberanía de datos**.
                    </p>
                    <div className="mt-8 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            <div className="h-12 w-12 rounded-2xl border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] font-black text-white shadow-xl">SYNO</div>
                            <div className="h-12 w-12 rounded-2xl border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] font-black text-white shadow-xl">UBI</div>
                            <div className="h-12 w-12 rounded-2xl border-2 border-background bg-primary flex items-center justify-center text-[10px] font-black text-primary-foreground shadow-xl shadow-primary/20">OCW</div>
                        </div>
                        <p className="text-sm font-black text-foreground uppercase tracking-widest">El nuevo estándar en Hardware IA Biológica.</p>
                    </div>
                </div>
            </div>

            {/* CONFIGURACIÓN Y CARRO */}
            <div className="space-y-6">
                <div className="flex flex-col gap-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary italic">Configuraciones Disponibles</h3>
                    <div className="grid grid-cols-1 gap-3">
                        {configurations.map((config) => (
                            <button
                                key={config.id}
                                onClick={() => setSelectedConfig(config.id)}
                                className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${currentConfig.id === config.id
                                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/5 ring-1 ring-primary/20"
                                    : "border-border bg-card/50 hover:border-primary/30"
                                    }`}
                            >
                                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background ${currentConfig.id === config.id ? 'text-primary' : 'text-muted-foreground'}`}>
                                    {config.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-bold text-foreground">{config.title}</h4>
                                        {config.status === 'popular' && (
                                            <span className="text-[8px] font-black uppercase bg-primary/20 text-primary px-1.5 py-0.5 rounded-sm">Recomendado</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground">{config.subtitle}</p>
                                </div>
                                {currentConfig.id === config.id && (
                                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                                        <Check className="h-3 w-3 text-primary-foreground" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* DETALLE DE LA CONFIG SELECCIONADA */}
                <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <h4 className="text-lg font-black text-foreground uppercase tracking-tight flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                        Tu Resumen de Hardware
                    </h4>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-4">Qué llega en la caja</h5>
                            <ul className="space-y-3">
                                {currentConfig.inBox.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-xs font-medium text-foreground">
                                        <Check className="h-4 w-4 text-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-4">Tu experiencia</h5>
                            <ul className="space-y-3">
                                {currentConfig.steps.map((step, idx) => (
                                    <li key={step} className="flex items-center gap-3 text-xs font-bold text-foreground">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-[10px] text-primary">{idx + 1}</span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-primary/10 flex flex-col gap-4">
                        <p className="text-[11px] text-center text-muted-foreground italic mb-4">
                            *Hardware configurado con {processor}. Optimizado para Chile 2026.
                        </p>

                        <a
                            href="https://www.mercadolibre.cl/" // User requested Mercado Libre link
                            target="_blank"
                            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-[#009EE3] px-8 py-5 text-lg font-black text-white shadow-xl shadow-blue-500/20 transition-all hover:translate-y-[-2px] hover:shadow-blue-500/40 active:scale-95"
                        >
                            <CreditCard className="h-6 w-6" />
                            PAGAR CON MERCADO PAGO
                        </a>

                        <div className="grid grid-cols-2 gap-3">
                            <a
                                href="https://wa.me/569XXXXXXXX?text=Hola,%20busco%20información%20del%20SmarterOS%20Box%20Modelo%20"
                                target="_blank"
                                className="flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-background/50 py-3 text-[10px] font-bold text-foreground transition-all hover:bg-white hover:text-[#25D366] hover:border-[#25D366]/30 uppercase tracking-widest"
                            >
                                <MessageCircle className="h-4 w-4" />
                                WhatsApp
                            </a>
                            <a
                                href="https://t.me/SmarterOSBot"
                                target="_blank"
                                className="flex items-center justify-center gap-2 rounded-xl border border-border/50 bg-background/50 py-3 text-[10px] font-bold text-foreground transition-all hover:bg-white hover:text-[#0088cc] hover:border-[#0088cc]/30 uppercase tracking-widest"
                            >
                                <Send className="h-4 w-4" />
                                Telegram
                            </a>
                        </div>

                        <button
                            onClick={() => window.print()}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-primary/20 bg-primary/5 text-[10px] font-black text-primary hover:bg-primary/10 transition-all uppercase tracking-widest mt-2"
                        >
                            <FileText className="h-4 w-4" />
                            Descargar Ficha Técnica (PDF)
                        </button>
                    </div>
                </div>
            </div>

            {/* AREA IMPRIMIBLE (OCULTA EN PANTALLA) */}
            <div className="hidden print:block fixed inset-0 bg-white p-12 text-black z-[9999]">
                <div className="max-w-4xl mx-auto border-b-2 border-primary pb-8 mb-8">
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter text-primary">SmarterOS Technical Analysis</h1>
                    <p className="text-xl font-bold mt-2">Hardware Specification: {board} ({processor})</p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    <div>
                        <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                            <Cpu className="h-6 w-6 text-primary" />
                            Orange Pi 5 Plus vs. Orange Pi 6 Plus
                        </h2>
                        <p className="text-lg leading-relaxed mb-8 italic">
                            ¿Por qué elegimos el chip RK3588 para alimentar el núcleo de SmarterOS y OpenClaw?
                        </p>

                        <table className="w-full border-collapse border border-zinc-200">
                            <thead>
                                <tr className="bg-zinc-100">
                                    <th className="border border-zinc-200 p-4 text-left font-black uppercase text-xs">Característica</th>
                                    <th className="border border-zinc-200 p-4 text-left font-black uppercase text-xs">Orange Pi 5 Plus</th>
                                    <th className="border border-zinc-200 p-4 text-left font-black uppercase text-xs">Orange Pi 6 Plus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { f: "CPU", r: "RK3588 (8 núcleos)", o: "RK3599 (12 núcleos Next-Gen)", i: "Arquitectura de procesamiento ultra-denso." },
                                    { f: "IA / NPU", r: "6 TOPS", o: "12 TOPS (Core Dual)", i: "Inferencia en tiempo real para visión y voz." },
                                    { f: "RAM", r: "Hasta 32 GB LPDDR4x", o: "Hasta 64 GB LPDDR5", i: "Carga de LLMs masivos localmente." },
                                    { f: "Network", r: "2x 2.5 Gigabit", o: "2x 10 Gigabit / Fiber Optic", i: "Backbone de datos para infraestructura crítica." }
                                ].map((row) => (
                                    <tr key={row.f}>
                                        <td className="border border-zinc-200 p-4 font-bold text-xs uppercase">{row.f}</td>
                                        <td className="border border-zinc-200 p-4 text-xs">{row.r}</td>
                                        <td className="border border-zinc-200 p-4 text-xs font-bold">{row.o}<br /><span className="text-[10px] font-normal italic opacity-60">{row.i}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-8 border-2 border-primary/20 bg-primary/5 rounded-3xl">
                        <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-3 mb-4">
                            <Brain className="h-6 w-6 text-primary" />
                            Veredicto Tecnológico
                        </h3>
                        <p className="text-sm leading-relaxed mb-4 font-medium">
                            Mientras que la Raspberry Pi 5 es una excelente placa educativa, el RK3588 ofrece una arquitectura de servidor para el mundo real.
                            Su NPU integrada permite que OpenClaw procese visión computacional y flujos de n8n simultáneamente sin cuellos de botella.
                        </p>
                        <div className="flex items-center gap-4 pt-6 border-t border-primary/20">
                            <span className="text-4xl font-black text-primary">92%</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">AI Efficiency<br />Increase for Bolt Studio</span>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-zinc-200 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">© 2026 SmarterOS - Confidential Technical Document</p>
                </div>
            </div>

            <style jsx>{`
                @media print {
                    body > *:not(.print-container) {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    )
}
