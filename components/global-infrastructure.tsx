"use client"

import { Globe, Cpu, Atom, Zap, Server, Database, Brain, ArrowUpRight } from "lucide-react"

const strategyTiers = [
    {
        name: "Startup / Pyme",
        hardware: "Orange Pi 5 & 6",
        region: "Latinoamérica (Nunex.lat)",
        description: "Optimización de costos con arquitectura ARM64. Ideal para CRM Chatwoot, ERP Odoo v19 y automatizaciones n8n locales.",
        tech: "Eficiencia Local",
        color: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        icon: <Server className="h-6 w-6" />
    },
    {
        name: "Comercio / Scaleup",
        hardware: "NVIDIA Jetson Orin Nano",
        region: "Suiza (Neuronal Silicio)",
        description: "Potencia de 66 TOPS para visión artificial y procesamiento de facturación exacta. Inteligencia soberana para retail avanzado.",
        tech: "Edge AI Soberana",
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        icon: <Cpu className="h-6 w-6" />
    },
    {
        name: "Enterprise / Industrial",
        hardware: "Cortical Labs Cloud / Físico",
        region: "Australia (Cortical Labs)",
        description: "Integración con neuronas biológicas (DishBrain). Ultra bajo consumo y procesamiento cortical para tareas de alta complejidad.",
        tech: "IA Biológica",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        icon: <Atom className="h-6 w-6" />
    },
    {
        name: "Académico / Gobiernos",
        hardware: "Smarter Cluster M4 Cloud",
        region: "Global Distributed",
        description: "Nodos distribuidos para investigación en neuroderechos y ética de IA. Sandbox seguro para desarrollo de neurotecnologías.",
        tech: "Infraestructura Global",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        icon: <Globe className="h-6 w-6" />
    }
]

export function GlobalInfrastructure() {
    return (
        <section id="labs" className="relative overflow-hidden py-24 sm:py-32">
            {/* Background Map Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                <Globe className="w-full h-full text-white" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-20">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Estrategia de Capital e Inteligencia</span>
                    </div>
                    <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl uppercase italic leading-none">
                        Propuesta de Inversión <br />
                        <span className="text-primary">Nunex Lat Group</span>
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-zinc-400 font-medium">
                        Infraestructura tecnológica distribuida por <span className="text-white font-bold">nunex.lat</span>. 
                        Cuatro niveles de despliegue para el futuro de la IA soberana.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {strategyTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`group relative flex flex-col p-6 rounded-[2rem] border ${tier.border} bg-zinc-900/40 backdrop-blur-xl transition-all hover:-translate-y-2 hover:bg-zinc-900/60`}
                        >
                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${tier.bg} border ${tier.border} ${tier.color} shadow-inner`}>
                                {tier.icon}
                            </div>
                            
                            <div className="mb-2">
                                <h3 className="text-lg font-black text-white italic uppercase tracking-tighter">{tier.name}</h3>
                                <p className={`text-sm font-bold ${tier.color} uppercase tracking-widest`}>{tier.hardware}</p>
                            </div>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600"></span>
                                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{tier.region}</p>
                            </div>
                            
                            <p className="text-zinc-400 text-xs leading-relaxed font-medium mb-8">
                                {tier.description}
                            </p>

                            <div className="mt-auto pt-4 border-t border-zinc-800 flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-800/50 px-3 py-1 text-[9px] font-bold text-zinc-300 border border-zinc-700">
                                    {tier.tech}
                                </span>
                                <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-primary transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Quote */}
                <div className="mt-20 rounded-[2.5rem] border border-primary/20 bg-primary/5 p-8 lg:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Database className="w-32 h-32 text-primary" />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tighter">Smarter Labs x Nunex Capital</h4>
                        <blockquote className="text-lg md:text-xl font-medium text-zinc-300 leading-relaxed italic">
                            "No vendemos software, distribuimos soberanía operativa. A través de Nunex Lat Group, conectamos el hardware más eficiente del mundo con las leyes de neuroderechos de Chile, creando el primer ecosistema de IA segura y rentable."
                        </blockquote>
                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                            <span>Chile</span>
                            <span className="text-zinc-700">•</span>
                            <span>Suiza</span>
                            <span className="text-zinc-700">•</span>
                            <span>Australia</span>
                            <span className="text-zinc-700">•</span>
                            <span>Global Cloud</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
