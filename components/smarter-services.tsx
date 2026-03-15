"use client"

import { Zap, Bot, Brain, Layout, Terminal, ExternalLink, ShieldCheck, CreditCard } from "lucide-react"

const softProducts = [
  {
    id: "comfy-nodes",
    name: "ComfyUI · Flux Pro",
    tagline: "IA Generativa de Imagen y Video",
    description: "Acceso a tu propia instancia de ComfyUI con nodos optimizados para Flux.1, SDXL y flujos de video. Ideal para agencias de diseño y marketing.",
    price: "$49.900",
    period: "/ mes",
    features: ["Memoria GPU Dedicada", "Modelos Flux.1 [dev] pre-cargados", "API de conexión externa", "Soporte para video estable"],
    icon: Layout,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    link: "https://flow.smarterbot.cl"
  },
  {
    id: "agents-pack",
    name: "AI Agents Enterprise",
    tagline: "Agentes Autónomos para Odoo",
    description: "Despliega agentes que concilian facturas, responden WhatsApp de ventas y gestionan stock automáticamente en tu ERP Odoo v19.",
    price: "$199.900",
    period: "/ agente",
    features: ["Integración Odoo Nativa", "Entrenamiento con tus datos", "Ejecución 24/7 en origen.smarterbot.cl", "Conectividad WhatsApp Business"],
    icon: Bot,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    link: "https://flow.smarterbot.cl"
  },
  {
    id: "skills-kit",
    name: "Skill Marketplace",
    tagline: "Habilidades para Ag-Kit",
    description: "Librería de habilidades pre-configuradas para Smarter Bolt. Carga lógica de negocios avanzada sin programar desde cero.",
    price: "$12.900",
    period: "/ skill",
    features: ["Lógica de Cobranza", "Agendamiento con Google/iOS", "Traducción en tiempo real", "Validación de Identidad (ACS)"],
    icon: Terminal,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    link: "https://flow.smarterbot.cl"
  }
]

export function SmarterServices() {
  return (
    <section id="servicios" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Marketplace de IA</span>
            </div>
            <h2 className="text-5xl font-black tracking-tight sm:text-7xl mb-6">
              Vende con <span className="text-primary">IA Nativa</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-xl">
              Activa flujos avanzados de ComfyUI, Agentes de Venta y Skills de automatización en segundos.
              Gestiona el acceso de tus clientes en <span className="text-white font-mono font-bold">flow.smarterbot.cl</span>
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50" />
            <img 
              src="/Users/mac/.gemini/antigravity/brain/c1fe47ba-8b59-466e-94dc-2a9a2e92701a/smarter_software_marketplace_1773595873801.png" 
              alt="Smarter Marketplace" 
              className="rounded-3xl border border-zinc-800 shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {softProducts.map((p) => (
            <div 
              key={p.id}
              className={`group flex flex-col rounded-3xl border ${p.border} ${p.bg} p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                <p.icon className="w-24 h-24" />
              </div>

              <div className={`w-14 h-14 rounded-2xl ${p.bg} flex items-center justify-center border ${p.border} mb-6`}>
                <p.icon className={`w-8 h-8 ${p.color}`} />
              </div>

              <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
              <p className={`text-sm font-semibold ${p.color} mb-4 uppercase tracking-wider`}>{p.tagline}</p>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {p.description}
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-zinc-500 text-sm font-medium">{p.period}</span>
                </div>
                <p className="text-[10px] text-zinc-500 mt-1 font-bold uppercase tracking-tighter">CLP + IVA</p>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-white text-black font-black text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors"
              >
                Activar en flow.smarterbot.cl
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                <CreditCard className="w-3 h-3" />
                Pago Seguro via Transbank
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
            <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 shrink-0">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse blur-xl" />
                    <Brain className="w-24 h-24 text-primary relative z-10" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-bold mb-2">¿Ya tienes tu licencia activa?</h4>
                    <p className="text-zinc-400">Accede directamente a tu consola centralizada de agentes y monitoreo en tiempo real.</p>
                </div>
                <a 
                    href="https://origin.smarterbot.cl"
                    className="px-8 py-4 rounded-2xl border border-primary/50 text-white font-bold hover:bg-primary/10 transition-colors whitespace-nowrap"
                >
                    Entrar a origin.smarterbot.cl
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}
