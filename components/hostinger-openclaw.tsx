"use client"

import { Server, CreditCard, Shield, Globe, Zap, ArrowUpRight, Check, TrendingUp, Calculator, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Precios en EUR - Plan 24 meses
const eurToClp = 1050 // Tipo de cambio aproximado
const ivaRate = 0.19

const pricingItems = [
    {
        name: "Plan KVM 2",
        period: "Periodo de 24 meses",
        eur: 153.41,
        icon: <Server className="h-5 w-5" />,
        featured: true,
        original: 527.76
    },
    {
        name: "Nexos AI Credits 5",
        period: "Créditos para IA (OpenAI, Anthropic, etc.)",
        eur: 5.99,
        icon: <Zap className="h-5 w-5" />,
        featured: false
    },
    {
        name: "Nombre de Dominio",
        period: "Dominio personalizado incluido",
        eur: 0.00,
        icon: <Globe className="h-5 w-5" />,
        featured: false,
        original: 59.99
    },
    {
        name: "Protección de Privacidad",
        period: "WHOIS Privacy incluido",
        eur: 0.00,
        icon: <Shield className="h-5 w-5" />,
        featured: false,
        original: 0.00
    }
]

// Cálculos en EUR
const subtotalEUR = pricingItems.reduce((acc, item) => acc + item.eur, 0)
const referralDiscount = subtotalEUR * 0.20 // -20% REFERRALDISCOUNT
const totalEUR = subtotalEUR - referralDiscount

// Cálculos en CLP
const subtotalCLP = subtotalEUR * eurToClp
const ivaCLP = subtotalCLP * ivaRate
const totalCLP = subtotalCLP + ivaCLP

const formatCLP = (amount: number) => {
    return new Intl.NumberFormat('es-CL', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(Math.round(amount))
}

const formatEUR = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount)
}

export function HostingerOpenClaw() {
    return (
        <section id="hostinger" className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 mb-8 backdrop-blur-sm">
                        <Server className="h-4 w-4 text-orange-500" />
                        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.3em]">Hostinger Infrastructure</span>
                    </div>

                    <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl uppercase italic leading-none mb-8">
                        OpenClaw <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                            Hosting Stack
                        </span>
                    </h2>

                    <p className="text-lg leading-relaxed text-zinc-400 font-medium max-w-2xl mx-auto">
                        Infraestructura VPS empresarial desplegada en Hostinger. 
                        Potencia, velocidad y soberanía de datos para tu empresa digital.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Pricing Breakdown */}
                    <div className="rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl p-8 lg:p-10">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-black text-white uppercase italic">Resumen del Pedido</h3>
                            <Badge className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                                REFERRALDISCOUNT -20%
                            </Badge>
                        </div>

                        <div className="space-y-4 mb-8">
                            {pricingItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`relative flex items-center justify-between p-5 rounded-2xl transition-all ${
                                        item.featured 
                                            ? "bg-orange-500/10 border border-orange-500/30" 
                                            : "bg-zinc-800/30 border border-zinc-700/50"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                                            item.featured 
                                                ? "bg-orange-500/20 text-orange-400" 
                                                : "bg-zinc-700/50 text-zinc-400"
                                        }`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className={`font-bold ${item.featured ? "text-white" : "text-zinc-300"}`}>
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-zinc-500">{item.period}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        {item.original && item.original > 0 && (
                                            <p className="text-xs text-zinc-500 line-through">
                                                €{formatEUR(item.original)}
                                            </p>
                                        )}
                                        <p className={`text-lg font-black ${item.eur === 0 ? "text-emerald-400" : "text-white"}`}>
                                            {item.eur === 0 ? "GRATIS" : `€${formatEUR(item.eur)}`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="border-t border-zinc-700 pt-6 space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-400">Subtotal EUR</span>
                                <span className="font-bold text-white">€{formatEUR(subtotalEUR)}</span>
                            </div>
                            <div className="flex justify-between text-sm items-center">
                                <span className="text-zinc-400">REFERRALDISCOUNT (-20%)</span>
                                <span className="font-bold text-emerald-400">- €{formatEUR(referralDiscount)}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 bg-emerald-500/10 rounded-xl px-4 border border-emerald-500/20">
                                <div className="flex items-center gap-2">
                                    <Tag className="h-4 w-4 text-emerald-400" />
                                    <span className="text-sm font-bold text-emerald-400">Total con Descuento</span>
                                </div>
                                <span className="text-xl font-black text-emerald-400">€{formatEUR(totalEUR)}</span>
                            </div>
                            <div className="border-t border-zinc-700 pt-4 space-y-2">
                                <div className="flex justify-between text-xs">
                                    <span className="text-zinc-500">Subtotal (sin IVA)</span>
                                    <span className="font-medium text-zinc-300">$ {formatCLP(subtotalCLP)}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-zinc-500">IVA (19%)</span>
                                    <span className="font-medium text-zinc-300">$ {formatCLP(ivaCLP)}</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-zinc-700">
                                <div>
                                    <p className="text-xs font-bold text-zinc-400">Total CLP + IVA</p>
                                    <p className="text-[10px] text-zinc-500">Tipo de cambio: 1 EUR = $ {formatCLP(eurToClp)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                        $ {formatCLP(totalCLP)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button - Single with Referral */}
                        <div className="mt-8">
                            <a
                                href="https://cart.hostinger.com/pay/bfbc22a2-789f-4ef3-8a86-f40af5f2326a?_ga=GA1.1.686974759.1763658354&_ga_73N1QWLEMH=GS2.1.s1773615754%24o52%24g1%24t1773618248%24j53%24l0%24h978034236%24dloW2derTtzknWgL0J0xlIFSFArFReNQ6hA&session_id=1773615754&device_id=a2f48c23-6f6f-4712-86aa-866f67100041&from=websites"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-base font-black text-white transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/25 active:scale-[0.98] w-full"
                            >
                                <CreditCard className="h-6 w-6" />
                                Adquirir con REFERRALDISCOUNT -20%
                                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <p className="text-center text-xs text-zinc-500 mt-3">
                                <Tag className="h-3 w-3 inline mr-1" />
                                Descuento aplicado automáticamente en el checkout
                            </p>
                        </div>

                        {/* Exchange Rate Note */}
                        <div className="mt-6 flex items-start gap-3 rounded-xl bg-zinc-800/30 border border-zinc-700/50 p-4">
                            <Calculator className="h-5 w-5 text-zinc-500 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-xs text-zinc-400 font-medium">
                                    <span className="text-zinc-300 font-bold">Tipo de cambio referencial: </span>
                                    1 EUR = $ {formatCLP(eurToClp)} CLP
                                </p>
                                <p className="text-[10px] text-zinc-500 mt-1">
                                    Precios sujetos a variación según tipo de cambio del día. Pago en Hostinger puede ser en EUR o USD.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Features & Benefits */}
                    <div className="space-y-6">
                        {/* Main Feature Card */}
                        <div className="rounded-[2.5rem] border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-xl p-8 lg:p-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400">
                                    <TrendingUp className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white uppercase italic">Inversión Inteligente</h3>
                                    <p className="text-sm text-zinc-400">Infraestructura escalable desde el día 1</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: "Ahorro con REFERRAL", value: "-20%", color: "text-emerald-400" },
                                    { label: "Periodo de contrato", value: "24 meses", color: "text-white" },
                                    { label: "Créditos IA incluidos", value: `€${formatEUR(5.99)}`, color: "text-primary" },
                                    { label: "Dominio + Privacidad", value: "GRATIS", color: "text-emerald-400" }
                                ].map((stat) => (
                                    <div key={stat.label} className="flex justify-between items-center p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
                                        <span className="text-sm font-medium text-zinc-400">{stat.label}</span>
                                        <span className={`text-lg font-black ${stat.color}`}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: <Server className="h-5 w-5" />,
                                    title: "VPS KVM 2",
                                    desc: "2 vCPU • 8 GB RAM • 100 GB NVMe",
                                    color: "text-orange-400",
                                    bg: "bg-orange-500/10",
                                    border: "border-orange-500/20"
                                },
                                {
                                    icon: <Zap className="h-5 w-5" />,
                                    title: "AI Credits",
                                    desc: "100 créditos Nexos.ai incluidos",
                                    color: "text-primary",
                                    bg: "bg-primary/10",
                                    border: "border-primary/20"
                                },
                                {
                                    icon: <Globe className="h-5 w-5" />,
                                    title: "Dominio Gratis",
                                    desc: ".com • .net • .org incluido",
                                    color: "text-emerald-400",
                                    bg: "bg-emerald-500/10",
                                    border: "border-emerald-500/20"
                                },
                                {
                                    icon: <Shield className="h-5 w-5" />,
                                    title: "Privacidad Total",
                                    desc: "Protección de dominio incluida",
                                    color: "text-sky-400",
                                    bg: "bg-sky-500/10",
                                    border: "border-sky-500/20"
                                }
                            ].map((feature) => (
                                <div
                                    key={feature.title}
                                    className={`group p-6 rounded-2xl border ${feature.border} ${feature.bg} backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-zinc-800/50`}
                                >
                                    <div className={`mb-4 ${feature.color}`}>{feature.icon}</div>
                                    <h4 className="text-base font-bold text-white mb-1">{feature.title}</h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Trust Badge */}
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                            <p className="text-xs text-zinc-500 mb-3 uppercase tracking-widest font-bold">Infraestructura Oficial</p>
                            <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
                                <Check className="h-4 w-4 text-emerald-500" />
                                <span>Despliegue verificado en Hostinger</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
