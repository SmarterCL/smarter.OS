import { NextResponse } from "next/server"

const catalog = {
    source: "local",
    last_updated: new Date().toISOString(),
    products: [
        {
            slug: "startup",
            name: "Startup",
            description: "CRM + Chat + Automatización",
            icon: "MessageSquare",
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
            slug: "comercio",
            name: "Comercio",
            description: "ERP + Facturación + Smarter Studio IA",
            icon: "TrendingUp",
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
                "Smarter Studio IA incluido",
                "Conciliación automática",
            ],
            highlighted: true,
        },
        {
            slug: "empresa",
            name: "Empresa",
            description: "Full Control Industrial + IA Avanzada",
            icon: "Factory",
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
                "Nodo RPi Industrial (riel DIN)",
                "Soporte prioritario 24/7",
                "Automatizaciones avanzadas + API",
            ],
            highlighted: false,
        },
    ],
}

export async function GET() {
    return NextResponse.json(catalog)
}
