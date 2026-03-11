"use client"

import { Network, Mic2, Building2, Smartphone, Home, Zap } from "lucide-react"

const layers = [
    {
        id: "cpaas",
        title: "1. CPaaS",
        subtitle: "Communications Platform as a Service",
        example: "Ejemplo: Twilio",
        description: "La infraestructura base. Son las \"tuberías\" y los cables.",
        role: "Proveedor de conectividad pura (APIs de SMS, voz, red global). Es lo que permite que las otras capas funcionen. Sin un CPaaS, no hay señal.",
        icon: <Network className="h-6 w-6 text-sky-400" />,
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        analogy: "Instalación eléctrica y agua (Infraestructura)."
    },
    {
        id: "ai-voice",
        title: "2. Agentes de Voz con IA",
        subtitle: "Conversational AI Layer",
        example: "Ejemplo: Vapi",
        description: "La inteligencia. No es una empresa de teléfonos, es software que \"piensa\" y usa a los proveedores de CPaaS para hablar.",
        role: "El cerebro que automatiza procesos. Si tu OS necesita que un bot llame a un cliente y agende una cita, usas Vapi.",
        icon: <Mic2 className="h-6 w-6 text-primary" />,
        bg: "bg-primary/10",
        border: "border-primary/20",
        analogy: "Recepcionista robot inteligente que atiende 24/7 (Automatización)."
    },
    {
        id: "ucaas",
        title: "3. UCaaS",
        subtitle: "Unified Communications as a Service",
        example: "Ejemplo: Zadarma",
        description: "El sistema telefónico empresarial. Software listo para que una oficina trabaje (centralita, CRM, menús).",
        role: "Provee la estructura organizacional. Gestión de extensiones y números fijos para humanos.",
        icon: <Building2 className="h-6 w-6 text-emerald-400" />,
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        analogy: "Oficina de recepción con teléfonos y secretarios (Gestión)."
    },
    {
        id: "retail",
        title: "4. App de Consumo",
        subtitle: "Retail VoIP",
        example: "Ejemplo: Yolla Calls",
        description: "El producto final. Herramienta cerrada diseñada para que una persona marque y hable.",
        role: "Herramienta de usuario aislada más que una pieza core de la arquitectura industrial.",
        icon: <Smartphone className="h-6 w-6 text-zinc-400" />,
        bg: "bg-zinc-500/10",
        border: "border-zinc-500/20",
        analogy: "Teléfono móvil personal en el bolsillo (Uso individual)."
    }
]

export function TelcoArchitecture() {
    return (
        <section id="telco" className="relative overflow-hidden bg-background py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Ecosistema Telco</h2>
                    <p className="mt-2 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
                        Capas de Servicio Inteligente
                    </p>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        En Smarter OS, no vemos la tecnología como una sola "caja". La dividimos por capas para entender dónde ocurre la magia.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {layers.map((layer) => (
                        <div
                            key={layer.id}
                            className={`relative flex flex-col p-8 rounded-3xl border ${layer.border} bg-card/40 backdrop-blur-sm transition-all hover:scale-[1.02]`}
                        >
                            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${layer.bg}`}>
                                {layer.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{layer.title}</h3>
                            <p className="text-xs font-bold text-primary mb-2 uppercase tracking-tighter">{layer.subtitle}</p>
                            <p className="text-sm font-semibold text-muted-foreground mb-4 italic">{layer.example}</p>

                            <div className="space-y-4 mt-auto">
                                <p className="text-xs leading-relaxed">
                                    <strong className="text-foreground">Qué es:</strong> {layer.description}
                                </p>
                                <p className="text-xs leading-relaxed border-t border-border/50 pt-4">
                                    <strong className="text-primary font-bold uppercase tracking-widest text-[10px]">Rol en Smarter OS:</strong><br />
                                    {layer.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-3xl border border-primary/20 bg-primary/5 p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/3">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/20 mb-6">
                                <Home className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-black text-foreground uppercase italic tracking-tighter">La Analogía del Edificio</h3>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                Si Smarter OS fuera una estructura física, así se distribuirían las responsabilidades de sus componentes.
                            </p>
                        </div>

                        <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {layers.map((layer) => (
                                <div key={layer.id} className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border/50 transition-all hover:border-primary/30">
                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${layer.bg}`}>
                                        <Zap className={`h-5 w-5 ${layer.id === 'ai-voice' ? 'text-primary' : 'text-zinc-600'}`} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-primary tracking-widest leading-none mb-1">{layer.title.split('. ')[1]}</p>
                                        <p className="text-xs font-medium text-foreground">{layer.analogy}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
