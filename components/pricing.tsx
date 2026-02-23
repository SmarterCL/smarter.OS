import { Check, MessageSquare } from "lucide-react"

const plans = [
    {
        name: "Startup",
        description: "Para emprendimientos",
        discount: "-15% descuento",
        originalPrice: "$29.000",
        price: "$25.000",
        commission: "Tu comisión: $38.000",
        features: [
            "CRM básico",
            "Chat omnicanal",
            "Automatizaciones básicas",
            "Gestión de contactos",
            "Reportes básicos",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        description: "Para operación completa",
        badge: "Más popular",
        discount: "-20% descuento",
        originalPrice: "$49.000",
        price: "$39.000",
        commission: "Tu comisión: $75.000",
        features: [
            "WhatsApp Business + CRM",
            "Facturación electrónica",
            "Gestión de clientes",
            "Cobros por Flow",
            "Conciliación automática",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        description: "Para operación avanzada",
        discount: "-25% descuento",
        originalPrice: "$99.000",
        price: "$74.000",
        commission: "Tu comisión: $140.000",
        features: [
            "Todo Plan Pro +",
            "ERP completo",
            "Integraciones API",
            "Soporte prioritario",
            "Automatizaciones avanzadas",
        ],
        highlighted: false,
    },
]

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white text-zinc-900 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col items-center p-8 rounded-3xl bg-white border transition-all duration-300 ${plan.highlighted ? "border-primary shadow-lg shadow-primary/10 mt-0 lg:-mt-4" : "border-zinc-200 mt-0"
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-3 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                                    {plan.badge}
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mt-4 text-zinc-900">{plan.name}</h3>
                            <p className="text-zinc-500 text-sm mt-2 mb-6">{plan.description}</p>

                            <div className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-semibold rounded-full mb-3">
                                {plan.discount}
                            </div>

                            <div className="text-zinc-500 line-through text-sm">
                                {plan.originalPrice}
                            </div>

                            <div className="flex items-end gap-1 mt-1 mb-4 text-zinc-900">
                                <span className="text-5xl font-black">{plan.price}</span>
                                <span className="text-zinc-500 mb-2">/mes</span>
                            </div>

                            <div className="text-primary font-bold text-sm mb-8">
                                {plan.commission}
                            </div>

                            <ul className="space-y-4 w-full mb-8 text-left">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-sm font-medium text-zinc-800">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="w-full flex justify-center gap-2 mt-auto pt-4">
                                <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 transition-colors">
                                    <MessageSquare className="w-4 h-4" /> WhatsApp
                                </button>
                                <a
                                    href="https://app.smarterbot.cl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors shadow-sm"
                                >
                                    Comprar
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
