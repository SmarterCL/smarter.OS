"use client"

import { Briefcase, Store, BarChart, Palette, Code, Coins } from "lucide-react"

export function TargetAudience() {
    const handleSelection = async (audienceTitle: string) => {
        try {
            await fetch('http://localhost:3051/v1/leads/track', { // Tu endpoint de SmarterOS
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    source: "landing_page",
                    segment: audienceTitle,
                    timestamp: new Date().toISOString()
                })
            });
            console.log(`Interés registrado: ${audienceTitle}`);
        } catch (error) {
            console.error("Error conectando con SmarterOS:", error);
        }
    };

    const audiences = [
        {
            icon: Briefcase,
            title: "Empresas en crecimiento",
            description: "Que necesitan automatización operativa",
        },
        {
            icon: Store,
            title: "Comercios físicos",
            description: "Que venden online y presencial",
        },
        {
            icon: BarChart,
            title: "Estudios contables",
            description: "Que facturan y necesitan integración",
        },
        {
            icon: Palette,
            title: "Agencias de marketing",
            description: "Que manejan múltiples negocios",
        },
        {
            icon: Code,
            title: "Emprendedores digitales",
            description: "Que escalan desde cero",
        },
        {
            icon: Coins,
            title: "Consultores de negocios",
            description: "Que recomiendan soluciones reales",
        },
    ]

    return (
        <section className="py-24 bg-white text-zinc-900 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl mb-16 text-zinc-500 leading-relaxed max-w-4xl mx-auto">
                    Si tu negocio opera en Chile y necesita integrar ventas, gestion y cobros, <span className="text-zinc-900 font-bold">SmarterBOT es para ti.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {audiences.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={idx}
                                onClick={() => handleSelection(item.title)}
                                className="group cursor-pointer flex flex-col items-start p-8 rounded-2xl bg-white border border-zinc-200 transition-all hover:border-primary/50 text-left hover:shadow-lg hover:shadow-zinc-100"
                            >
                                <div className="p-3 bg-primary/10 rounded-xl mb-6">
                                    <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-zinc-900">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-500 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
