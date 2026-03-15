"use client"

import { Play, ShieldCheck, Sprout, Droplets, Sun, Zap, TrendingUp, Cpu } from "lucide-react"

export function AgroBusiness() {
  return (
    <section id="agro" className="relative py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Visual / Video Simulation */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-video bg-zinc-900">
              {/* Image representing the video/scene */}
              <img 
                src="/Users/mac/.gemini/antigravity/brain/c1fe47ba-8b59-466e-94dc-2a9a2e92701a/nvidia_jetson_agro_future_1773603148480.png" 
                alt="AgroBusiness Tech" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Video Overlay Info */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl shadow-primary/40">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.3em] text-white">Ver Demo En Vivo: Invernadero Nodo 01</p>
              </div>

              {/* Real-time telemetry overlay simulation */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                    <Droplets className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px] font-bold text-white">Humedad: 64%</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                    <Sun className="w-3 h-3 text-yellow-400" />
                    <span className="text-[10px] font-bold text-white">UV Index: 4.2</span>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-primary/20 backdrop-blur-xl border border-primary/30">
                  <Cpu className="w-5 h-5 text-primary mb-1" />
                  <p className="text-[8px] font-black text-white uppercase">NVIDIA JETSON ORIN</p>
                  <p className="text-[10px] font-bold text-emerald-400 leading-none">66 TOPS ACTIVE</p>
                </div>
              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-8 -right-8 p-6 rounded-3xl bg-white text-zinc-900 shadow-2xl max-w-[240px] hidden md:block border border-zinc-100 italic transition-transform group-hover:translate-y-[-10px]">
                <TrendingUp className="w-8 h-8 text-primary mb-2" />
                <p className="text-sm font-bold leading-tight">"La inversión en IA para el Agro es la más rentable de la década por eficiencia hídrica."</p>
                <p className="mt-3 text-[10px] font-black uppercase text-zinc-400 tracking-widest">— Nunex Lat Group</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-6">
              <Sprout className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Inversión AgroBusiness</span>
            </div>
            
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-6xl mb-6 leading-none uppercase italic">
              Cultivando el <span className="text-primary italic">Futuro Digital</span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed font-medium">
              Aprovecha el poder de la <strong>NVIDIA Jetson Orin Nano</strong> para automatizar el control de nutrientes, riego y detección de plagas en tiempo real. Máxima soberanía en tu producción.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Análisis multiespectral de cultivos con visión artificial.",
                "Reducción de consumo hídrico hasta en un 40%.",
                "Integración con Smart Contracts para exportación directa.",
                "Monitoreo soberano (sin dependencia de nubes externas)."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <ShieldCheck className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-bold tracking-tight">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://flow.smarterbot.cl"
                className="px-8 py-4 rounded-2xl bg-primary text-white font-black text-sm flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/20 uppercase"
              >
                Invertir en Agro IA
                <Zap className="h-4 w-4 fill-current" />
              </a>
              <div className="px-8 py-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 flex flex-col justify-center">
                 <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Desde</p>
                 <p className="text-lg font-black text-white">$1.099.000 <span className="text-xs text-zinc-500">CLP + IVA</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
