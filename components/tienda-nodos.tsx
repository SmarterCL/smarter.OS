"use client"

import { ShieldCheck, HardDrive, Zap, Wifi, Server, ExternalLink, Package } from "lucide-react"

const products = [
  {
    id: "picoclaw",
    tier: "Edge · Industrial",
    badge: "🟢 PicoClaw",
    badgeBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    name: "Smarter Box",
    tagline: "Orange Pi 5 Plus + PiLink DIN",
    specs: "NPU 6 TOPS",
    specBg: "bg-emerald-100 text-emerald-800",
    description:
      "El nodo que se envía por correo a Arica o Punta Arenas. El cliente conecta el cable de red y el chorro de servicios empieza a correr. NPU dedicada para IA local, montaje en Riel DIN, alimentación 12–24V DC industrial.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    iconColor: "text-emerald-600",
    features: [
      "NPU 6 TOPS · IA 100% local",
      "Riel DIN · 12-24V DC industrial",
      "RS485 / CAN Bus (máquinas reales)",
      "NVMe SSD + doble 2.5G Ethernet",
      "4G LTE Backup (opcional)",
    ],
    highlight: false,
    buttonText: "Consultar con Elia",
    link: `https://wa.me/56979540471?text=Quiero%20info%20del%20PicoClaw`,
    isWhatsApp: true,
  },
  {
    id: "openclaw24",
    tier: "Startup · Oficina",
    badge: "🟡 OpenClaw 24",
    badgeBg: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    name: "Mac Mini M4",
    tagline: "El cerebro ágil",
    specs: "24 GB RAM",
    specBg: "bg-sky-100 text-sky-800",
    description:
      "Ideal para estudios contables, startups y comercios en crecimiento. Odoo v19 + agente CLAW + Smarter Studio corriendo 24/7 en tu oficina. Sin nube de terceros.",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop",
    iconColor: "text-sky-500",
    features: [
      "Odoo v19 pre-instalado",
      "Agente CLAW activo",
      "Smarter Studio IA incluido",
      "Operación segura 24x7",
    ],
    highlight: false,
    buttonText: "Comprar en MercadoLibre",
    link: "https://www.mercadolibre.cl/perfil/SMARTER+SPA",
    isWhatsApp: false,
  },
  {
    id: "openclaw32",
    tier: "Comercio · Alto Volumen",
    badge: "🟠 OpenClaw 32",
    badgeBg: "bg-primary/10 text-primary border-primary/20",
    name: "Mac Mini M4",
    tagline: "Motor de catálogos IA",
    specs: "32 GB RAM",
    specBg: "bg-primary/10 text-primary",
    description:
      "Mayor capacidad para procesar catálogos masivos con Elia Studio y gestionar alto volumen de ventas. ComfyUI corre fluido para transformar fotos de bodega en fichas ML-ready.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    iconColor: "text-primary",
    features: [
      "Motor ComfyUI (Elia Studio)",
      "CRM + ERP de alto volumen",
      "Facturación SII multi-empresa",
      "Multi-agente paralelo",
    ],
    highlight: true,
    buttonText: "Comprar en MercadoLibre",
    link: "https://www.mercadolibre.cl/perfil/SMARTER+SPA",
    isWhatsApp: false,
  },
  {
    id: "openclaw64",
    tier: "Empresa · Enterprise",
    badge: "🔵 OpenClaw 64",
    badgeBg: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    name: "Mac Mini M4",
    tagline: "Servidor enterprise",
    specs: "64 GB RAM",
    specBg: "bg-indigo-100 text-indigo-800",
    description:
      "Servidor de alta disponibilidad multi-tenant. Múltiples agentes en paralelo, conciliación masiva y bases de datos aisladas por cliente. Para operaciones que no se pueden detener.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop",
    iconColor: "text-indigo-500",
    features: [
      "Multi-tenant aislado",
      "Alta disponibilidad 99.9%",
      "Agentes paralelos 24x7",
      "Backups automáticos NVMe",
    ],
    highlight: false,
    buttonText: "Comprar en MercadoLibre",
    link: "https://www.mercadolibre.cl/perfil/SMARTER+SPA",
    isWhatsApp: false,
  },
]

export function TiendaNodos() {
  return (
    <section id="tienda" className="relative border-t border-border py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Hardware & Nodos · The Smarter Core
          </p>
          <h2 className="text-balance text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl mb-6">
            Adquiere tu Nodo Operativo
          </h2>
          <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Pre-configurado en Providencia. Enviado a cualquier ciudad de Chile.
            El cliente conecta el cable y el sistema empieza a correr.
          </p>
        </div>

        {/* Smarter Box concept banner */}
        <div className="mb-12 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-zinc-50 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Package className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-zinc-900 text-base">
                📦 Smarter Box: Plug &amp; Play a todo Chile
              </p>
              <p className="text-sm text-zinc-600 mt-0.5">
                Cada equipo llega con <span className="font-semibold">Odoo v19 + CLAW + n8n</span> pre-instalados.
                Un código QR activa el bot de WhatsApp y termina la configuración en minutos. Sin Zoom, sin técnicos remotos.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://wa.me/56979540471?text=Quiero%20info%20Smarter%20Box"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-white text-sm font-bold hover:bg-emerald-700 transition-colors"
              >
                Consultar distribución
              </a>
            </div>
          </div>
        </div>

        {/* 4 product grid: 1+3 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* PicoClaw — featured vertical card */}
          {(() => {
            const item = products[0]
            return (
              <div className="lg:col-span-1 flex flex-col rounded-3xl border border-emerald-200 bg-gradient-to-b from-zinc-950 to-zinc-900 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 lg:h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center opacity-50"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">{item.tier}</p>
                  <h3 className="text-xl font-black text-white mb-0.5">{item.name}</h3>
                  <p className="text-xs text-emerald-400 font-semibold mb-4">{item.tagline}</p>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5 flex-grow">{item.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    {item.buttonText}
                  </a>
                </div>
              </div>
            )
          })()}

          {/* OpenClaw 24 / 32 / 64 */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {products.slice(1).map((item, idx) => (
              <div
                key={item.id}
                className={`flex flex-col rounded-3xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${item.highlight
                  ? "border-primary shadow-lg shadow-primary/10 bg-white"
                  : "border-zinc-200 bg-zinc-50"
                  }`}
              >
                <div className="relative h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm bg-white/85 ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>
                  {item.highlight && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-mono mb-0.5">{item.tier}</p>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-zinc-900">{item.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold ${item.specBg}`}>{item.specs}</span>
                  </div>
                  <p className="text-xs font-semibold text-primary mb-3">{item.tagline}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-grow">{item.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                        <ShieldCheck className={`w-3.5 h-3.5 ${item.iconColor} shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${item.highlight
                      ? "bg-[#FFE600] text-[#2D3277] hover:bg-[#FFD100]"
                      : "bg-[#FFE600] text-[#2D3277] hover:bg-[#FFD100]"
                      } shadow-sm`}
                  >
                    {item.buttonText}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereignty note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">
            <span className="font-semibold text-zinc-800">🔒 Soberanía de datos total</span>
            {" — "}Tu IA vive en tu equipo. Sin suscripciones ocultas, sin latencia, sin dependencia de terceros.
          </p>
        </div>
      </div>
    </section>
  )
}
