"use client"

import { Network } from "lucide-react"

export function GlobalInfrastructure() {
    return (
        <section id="labs" className="relative overflow-hidden py-32 sm:py-40">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Central Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08] pointer-events-none animate-pulse">
                <Network className="w-full h-full text-primary" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center">
                    <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 mb-8 backdrop-blur-sm">
                        <div className="flex gap-1">
                            <span className="h-2 w-2 rounded-full bg-red-500/80"></span>
                            <span className="h-2 w-2 rounded-full bg-yellow-500/80"></span>
                            <span className="h-2 w-2 rounded-full bg-green-500/80"></span>
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">OpenClaw Infrastructure</span>
                    </div>

                    <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl uppercase italic leading-none mb-8">
                        Inteligencia de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">Negocios</span>
                    </h2>

                    <p className="text-lg leading-relaxed text-zinc-400 font-medium max-w-2xl mx-auto">
                        Infraestructura de capital e inteligencia distribuida por{" "}
                        <span className="text-white font-bold">Cortical Labs</span>.
                        Conectando Chile, Suiza, Australia y la nube global.
                    </p>
                </div>

                {/* Connection Lines Visualization */}
                <div className="mt-32 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="relative flex justify-center items-center gap-8 md:gap-16">
                        <div className="text-center">
                            <div className="text-2xl font-black text-white uppercase italic">Chile</div>
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Latam Hub</div>
                        </div>
                        <div className="h-px w-12 bg-zinc-800 hidden md:block"></div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-white uppercase italic">Suiza</div>
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">AI Research</div>
                        </div>
                        <div className="h-px w-12 bg-zinc-800 hidden md:block"></div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-white uppercase italic">Australia</div>
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Bio Computing</div>
                        </div>
                        <div className="h-px w-12 bg-zinc-800 hidden md:block"></div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-white uppercase italic">Global</div>
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Cloud Network</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
