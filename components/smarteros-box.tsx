"use client"

import { useState } from "react"
import { Box, Check, Cpu, Globe, Layout, Rocket, Server, Shield, Smartphone, Zap, MessageCircle, Send, FileDown, ShoppingCart } from "lucide-react"
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
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">SmarterOS Box v1</h2>
                    <p className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        AI Automation Appliance
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        El hardware diseñado para correr tu cerebro digital localmente.
                        Sin suscripciones ocultas, con el poder del chip RK3588.
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
                        <BoxDetail board="Orange Pi 5 Plus" processor="RK3588 (Standard)" currentConfig={currentConfig} setSelectedConfig={setSelectedConfig} />
                    </TabsContent>
                    <TabsContent value="6plus" className="mt-0 focus-visible:outline-none">
                        <BoxDetail board="Orange Pi 6 Plus" processor="RK3588 (Next Gen)" currentConfig={currentConfig} setSelectedConfig={setSelectedConfig} />
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
                            src="/smarteros_box_v1_mockup_1772989966038.png"
                            alt="SmarterOS Box Mockup"
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
                    <h3 className="text-xl font-bold text-foreground">¿Por qué este modelo?</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed italic">
                        Similar a como Synology es para almacenamiento o Ubiquiti para redes,
                        SmarterOS Box es para la **automatización de procesos empresariales**.
                    </p>
                    <div className="mt-8 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            <div className="h-12 w-12 rounded-2xl border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] font-black text-white shadow-xl">SYNO</div>
                            <div className="h-12 w-12 rounded-2xl border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] font-black text-white shadow-xl">UBI</div>
                            <div className="h-12 w-12 rounded-2xl border-2 border-background bg-primary flex items-center justify-center text-[10px] font-black text-primary-foreground shadow-xl shadow-primary/20">SMT</div>
                        </div>
                        <p className="text-sm font-black text-foreground uppercase tracking-widest">El nuevo estándar en Hardware IA.</p>
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
                        <p className="text-[11px] text-center text-muted-foreground italic mb-2">
                            *Hardware configurado con {processor}. Optimizado para Chile 2026.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <a
                                href="https://wa.me/569XXXXXXXX?text=Hola,%20busco%20información%20del%20SmarterOS%20Box%20Modelo%20"
                                target="_blank"
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-black text-white shadow-xl shadow-green-500/10 transition-all hover:scale-[1.02] active:scale-95"
                            >
                                <MessageCircle className="h-5 w-5" />
                                WHATSAPP
                            </a>
                            <a
                                href="https://t.me/SmarterOSBot"
                                target="_blank"
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#0088cc] px-6 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-95"
                            >
                                <Send className="h-5 w-5" />
                                TELEGRAM
                            </a>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 py-4 text-xs font-black text-primary hover:bg-primary/10 transition-all uppercase tracking-widest mt-2">
                            <FileDown className="h-4 w-4" />
                            Descargar Invoice Proforma (PDF)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
