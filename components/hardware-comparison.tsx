"use client"

import { Download, Cpu, Zap, HardDrive, Monitor, Globe, Brain, Check, MessageCircle, Send, FileText } from "lucide-react"

const comparisonData = [
    {
        feature: "CPU",
        icon: <Cpu className="h-5 w-5" />,
        raspberry: "Broadcom BCM2712 (4 núcleos)",
        orange: "RK3588 (8 núcleos: 4xA76 + 4xA55)",
        impact: "El RK3588 ofrece arquitectura de servidor. Los agentes OpenClaw responden en milisegundos.",
        winner: "orange"
    },
    {
        feature: "IA / NPU",
        icon: <Brain className="h-5 w-5" />,
        raspberry: "No tiene (requiere HAT+)",
        orange: "6 TOPS (Integrada)",
        impact: "Visión Pro: Procesamiento de visión computacional nativo sin hardware extra.",
        winner: "orange"
    },
    {
        feature: "RAM Máxima",
        icon: <Zap className="h-5 w-5" />,
        raspberry: "8 GB LPDDR4X",
        orange: "Hasta 32 GB LPDDR4X",
        impact: "Súper Integración: Permite correr Odoo, Supabase, n8n y LLMs locales simultáneamente.",
        winner: "orange"
    },
    {
        feature: "Almacenamiento",
        icon: <HardDrive className="h-5 w-5" />,
        raspberry: "MicroSD / NVMe via HAT",
        orange: "Slot M.2 NVMe (Gen 3)",
        impact: "Velocidad de Logs: Acceso a disco ultra-rápido, crítico para bases vectoriales.",
        winner: "orange"
    },
    {
        feature: "Red",
        icon: <Globe className="h-5 w-5" />,
        raspberry: "1x Gigabit Ethernet",
        orange: "2x 2.5 Gigabit Ethernet",
        impact: "Gateway de Datos: Superior para mover grandes volúmenes de video de cámaras IP.",
        winner: "orange"
    },
    {
        feature: "Video In",
        icon: <Monitor className="h-5 w-5" />,
        raspberry: "No tiene",
        orange: "1x HDMI In (Ventaja nativa)",
        impact: "La Orange Pi destaca en captura de video directa para auditoría visual AI.",
        winner: "orange"
    }
]

export function HardwareComparison() {
    const handleDownload = () => {
        window.print();
    };

    return (
        <section id="hardware-comparison" className="py-24 sm:py-32 bg-slate-50 dark:bg-black/20 overflow-hidden relative border-t border-border/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* COLUMNA IZQUIERDA: TEXTO Y PDF */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Hardware Analysis</h2>
                            <p className="mt-2 text-3xl font-black tracking-tight text-foreground">
                                Orange Pi 5 Plus vs. Raspberry Pi 5
                            </p>
                            <p className="mt-6 text-lg leading-relaxed text-muted-foreground italic">
                                ¿Por qué elegimos el chip RK3588 para alimentar el núcleo de SmarterOS y OpenClaw?
                            </p>
                        </div>

                        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 relative overflow-hidden group">
                            <div className="absolute -top-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
                                <FileText className="h-24 w-24 text-primary" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground">Whitepaper Técnico</h4>
                            <p className="mt-2 text-sm text-muted-foreground">Analítica profunda sobre el rendimiento del RK3588 en entornos industriales.</p>

                            <button
                                onClick={handleDownload}
                                className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-black text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                            >
                                <Download className="h-4 w-4" />
                                DESCARGAR PDF
                            </button>

                            <div className="mt-4 grid grid-cols-2 gap-2">
                                <a href="#" className="flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase tracking-tighter text-[#25D366] border border-[#25D366]/20 bg-[#25D366]/5 rounded-lg">
                                    <MessageCircle className="h-3 w-3" /> WhatsApp
                                </a>
                                <a href="#" className="flex items-center justify-center gap-2 py-2 text-[10px] font-black uppercase tracking-tighter text-[#0088cc] border border-[#0088cc]/20 bg-[#0088cc]/5 rounded-lg">
                                    <Send className="h-3 w-3" /> Telegram
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl border border-border bg-card/50">
                            <h3 className="text-sm font-bold text-foreground flex items-center gap-2 uppercase tracking-widest">
                                <Brain className="h-4 w-4 text-primary" />
                                Veredicto
                            </h3>
                            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                                Mientras que la Raspberry Pi 5 es una excelente placa educativa, el <strong>RK3588</strong> ofrece una arquitectura de servidor para el mundo real.
                                Su NPU integrada permite que <strong>OpenClaw</strong> procese visión computacional y flujos de n8n simultáneamente sin cuellos de botella.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: TABLA */}
                    <div className="lg:col-span-2">
                        <div className="overflow-hidden rounded-3xl border border-border/50 bg-card shadow-2xl backdrop-blur-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-border/50 bg-muted/30">
                                            <th className="px-6 py-5 text-[10px] font-black text-foreground uppercase tracking-widest">Característica</th>
                                            <th className="px-6 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Raspberry Pi 5</th>
                                            <th className="px-4 py-5 font-black text-primary uppercase tracking-widest bg-primary/5 text-center">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-[10px]">Orange Pi</span>
                                                    <span className="text-lg">5 Plus</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        {comparisonData.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-muted/10 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                                            {row.icon}
                                                        </div>
                                                        <span className="font-bold text-foreground text-xs uppercase tracking-tight">{row.feature}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 text-xs text-muted-foreground">
                                                    {row.raspberry}
                                                </td>
                                                <td className="px-4 py-5 text-xs font-bold text-foreground bg-primary/[0.02]">
                                                    <div className="flex flex-col gap-2 italic text-center">
                                                        {row.orange}
                                                        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-[11px] font-medium leading-relaxed not-italic text-left group-hover:border-primary/30 transition-all">
                                                            {row.impact}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <div>
                                <h5 className="text-sm font-black text-foreground uppercase italic tracking-tighter">Optimizado para 2026</h5>
                                <p className="text-[11px] text-muted-foreground">Reducción del 40% en latencia para Bolt Studio.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-primary">92%</span>
                                <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none">AI Efficiency<br />Increase</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @media print {
                    body * { visibility: hidden; }
                    #hardware-comparison, #hardware-comparison * { visibility: visible; }
                    #hardware-comparison { position: absolute; left: 0; top: 0; width: 100%; }
                }
            `}</style>
        </section>
    )
}
