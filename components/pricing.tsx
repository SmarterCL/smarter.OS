"use client"

import { Check, MessageSquare, TrendingUp, Factory, type LucideIcon } from "lucide-react"
import { useCatalog } from "@/hooks/use-catalog"

const ICON_MAP: Record<string, LucideIcon> = {
    MessageSquare,
    TrendingUp,
    Factory,
}

const fallbackPlans = [
    {
        name: "Startup",
        slug: "startup",
        description: "CRM + Chat + Automatización",
        icon: MessageSquare,
        iconColor: "text-sky-400",
        iconBg: "from-sky-500/20 to-sky-500/5",
        badge: null,
        discount: "-15% descuento",
        originalPrice: "$29.000",
        price: "$25.000",
        commission: "Tu comisión: $38.000",
        roi: "Ahorra 5hrs admin/mes",
        features: [
            "CRM básico con pipeline",
            "Chat omnicanal (WhatsApp + Telegram)",
            "Automatizaciones básicas con N8N",
            "Gestión de contactos y leads",
            "Reportes básicos",
        ],
        highlighted: false,
    },
    {
        name: "Comercio",
        slug: "comercio",
        description: "ERP + Facturación + Bolt Studio IA",
        icon: TrendingUp,
        iconColor: "text-primary",
        iconBg: "from-primary/20 to-primary/5",
        badge: "Más popular",
        discount: "-20% descuento",
        originalPrice: "$49.000",
        price: "$39.000",
        commission: "Tu comisión: $75.000",
        roi: "Ahorra 15hrs admin/mes",
        features: [
            "WhatsApp Business + CRM completo",
            "Facturación electrónica SII",
            "Cobros por Flow / Transbank",
            "Bolt Studio IA incluido",
            "Conciliación automática",
        ],
        highlighted: true,
    },
    {
        name: "Empresa",
        slug: "empresa",
        description: "Full Control Industrial + IA Avanzada",
        icon: Factory,
        iconColor: "text-emerald-400",
        iconBg: "from-emerald-500/20 to-emerald-500/5",
        badge: null,
        discount: "-25% descuento",
        originalPrice: "$99.000",
        price: "$74.000",
        commission: "Tu comisión: $140.000",
        roi: "Ahorra 40hrs admin/mes",
        features: [
            "Todo Plan Comercio +",
            "ERP completo (Odoo v19)",
            "SmarterOS Box v1 (RK3588)",
            "Soporte prioritario 24/7",
            "Automatizaciones avanzadas + API",
        ],
        highlighted: false,
    },
]

export function Pricing() {
    const { data, loading } = useCatalog({
        endpoint: "/v1/hub/catalog",
        autoFetch: true,
    })

    const plans = data?.products?.length ? data.products : fallbackPlans

    return (
        <section id="planes" className="py-24 bg-white text-zinc-900 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
                        Planes
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                        El mensaje clave no es el precio.{" "}
                        <span className="text-primary">Es el ROI.</span>
                    </h2>
                    <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-600 max-w-2xl mx-auto">
                        Si automatizas facturación y cobranza, ahorras horas administrativas y reduces errores.
                        Eso es valor tangible.
                    </p>
                </div>

                {loading && (
                    <div className="text-center py-12">
                        <p className="text-zinc-500">Cargando planes...</p>
                    </div>
                )}

                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {plans.map((plan: any, index: number) => {
                            const Icon = (typeof plan.icon === "string" ? ICON_MAP[plan.icon] : plan.icon) || TrendingUp
                            return (
                                <div
                                    key={plan.slug || index}
                                    className={`relative flex flex-col items-center p-8 rounded-3xl bg-white border transition-all duration-300 ${plan.highlighted
                                        ? "border-primary shadow-lg shadow-primary/10 mt-0 lg:-mt-4"
                                        : "border-zinc-200 mt-0"
                                        }`}
                                >
                                    {plan.badge && (
                                        <div className="absolute -top-3 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                                            {plan.badge}
                                        </div>
                                    )}

                                    {/* Plan icon */}
                                    {plan.icon && (
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.iconBg || "from-primary/20 to-primary/5"} flex items-center justify-center mb-4`}>
                                            <Icon className={`h-5 w-5 ${plan.iconColor || "text-primary"}`} />
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold mt-2 text-zinc-900">{plan.name}</h3>
                                    <p className="text-zinc-500 text-sm mt-2 mb-6 text-center">{plan.description}</p>

                                    <div className="px-3 py-1 bg-green-500/10 text-green-600 text-xs font-semibold rounded-full mb-3">
                                        {plan.discount}
                                    </div>

                                    <div className="text-zinc-400 line-through text-sm">
                                        {plan.originalPrice}
                                    </div>

                                    <div className="flex items-end gap-1 mt-1 mb-2 text-zinc-900">
                                        <span className="text-5xl font-black">{plan.price}</span>
                                        <span className="text-zinc-500 mb-2">/mes + IVA</span>
                                    </div>

                                    {/* ROI */}
                                    <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
                                        <TrendingUp className="w-4 h-4" />
                                        {plan.roi}
                                    </div>

                                    <div className="text-primary font-bold text-sm mb-8">
                                        {plan.commission}
                                    </div>

                                    <ul className="space-y-4 w-full mb-8 text-left">
                                        {plan.features?.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-green-500 shrink-0" />
                                                <span className="text-sm font-medium text-zinc-800">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="w-full mt-auto">
                                        <a
                                            href={`https://app.smarteros.cl/onboarding?plan=${plan.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-xl transition-colors ${plan.highlighted
                                                ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20"
                                                : "border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50"
                                                }`}
                                        >
                                            Activar ahora
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {/* Footer note */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-zinc-500">
                        Valores en pesos chilenos + IVA. Solo para empresas con RUT chileno.
                    </p>
                </div>
            </div>
        </section>
    )
}
