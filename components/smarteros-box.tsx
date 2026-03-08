"use client"

import { Box, Check, Cpu, Globe, Layout, Rocket, Server, Shield, Smartphone, Zap } from "lucide-react"

const models = [
    {
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
    return (
        <section id="box" className="relative overflow-hidden bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary">SmarterOS Box v1</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        AI Automation Appliance
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        El hardware diseñado para correr tu cerebro digital localmente.
                        Sin suscripciones ocultas, con el poder del chip RK3588 (Orange Pi 5 Plus).
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-2 shadow-2xl">
                            <img
                                src="/smarteros_box_v1_mockup_1772989966038.png"
                                alt="SmarterOS Box Mockup"
                                className="w-full rounded-xl object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                                {preInstalled.map((item) => (
                                    <div key={item.name} className="flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm border border-border/50">
                                        {item.icon}
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-border/50 bg-secondary/30 p-8 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-foreground">¿Por qué este modelo?</h3>
                            <p className="mt-2 text-muted-foreground">
                                Similar a como Synology es para almacenamiento o Ubiquiti para redes,
                                SmarterOS Box es para la **automatización de procesos empresariales**.
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    <div className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">SYNO</div>
                                    <div className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">UBI</div>
                                    <div className="h-10 w-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">SMT</div>
                                </div>
                                <p className="text-sm font-medium text-foreground">El nuevo estándar en Hardware IA.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {models.map((model) => (
                            <div
                                key={model.title}
                                className={`relative rounded-3xl border p-8 transition-all hover:shadow-lg ${model.status === 'popular'
                                        ? 'border-primary/50 bg-primary/5 shadow-primary/10 scale-105 z-10'
                                        : 'border-border bg-card hover:border-border/80'
                                    }`}
                            >
                                {model.status === 'popular' && (
                                    <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                                        Recomendado
                                    </span>
                                )}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border/50">
                                        {model.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{model.title}</h3>
                                        <p className="text-sm text-primary font-medium">{model.subtitle}</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-muted-foreground">{model.description}</p>

                                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/70">Qué llega en la caja</h4>
                                        <ul className="mt-3 space-y-2">
                                            {model.inBox.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <Check className="h-3 w-3 text-primary" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/70">Tu experiencia</h4>
                                        <ul className="mt-3 space-y-2">
                                            {model.steps.map((step, idx) => (
                                                <li key={step} className="flex items-center gap-2 text-xs font-medium text-foreground">
                                                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-[10px] text-primary">{idx + 1}</span>
                                                    {step}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prep Section */}
                <div className="mt-24 rounded-3xl border border-border/50 bg-card p-8 lg:p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                    <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground">Cómo lo preparamos por ti</h2>
                            <p className="mt-4 text-muted-foreground">
                                Cada SmarterOS Box pasa por un riguroso proceso de preparación antes de llegar a tus manos.
                            </p>
                            <div className="mt-8 space-y-6">
                                {[
                                    { title: "Grabar Imagen", desc: "Instalación del kernel optimizado en NVMe de alta velocidad." },
                                    { title: "Configurar Stack", desc: "Docker, n8n, Node.js y SmarterOS Services pre-configurados." },
                                    { title: "Tests Críticos", desc: "Pruebas de red, latencia de dashboard y pasarela de pagos." },
                                    { title: "Empaquetado", desc: "Seguridad y manuales listos para el cliente final." },
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">{idx + 1}</div>
                                        <div>
                                            <h4 className="font-bold text-foreground">{step.title}</h4>
                                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-sm rounded-2xl border border-border/50 bg-background p-8 shadow-xl">
                                <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500/50" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                                        <div className="h-3 w-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground">smarteros-deploy.sh</span>
                                </div>
                                <div className="space-y-2 font-mono text-[11px]">
                                    <p className="text-primary"># Iniciando despliegue SmarterOS Box...</p>
                                    <p className="text-foreground/70">Checking NVMe health... [OK]</p>
                                    <p className="text-foreground/70">Installing Linux Kernel... Done</p>
                                    <p className="text-foreground/70">Pulling Docker images... 100%</p>
                                    <p className="text-foreground/70">n8n core status: enabled</p>
                                    <p className="text-foreground/70">Identity Engine: secured</p>
                                    <p className="text-primary animate-pulse">Ready for packaging.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
