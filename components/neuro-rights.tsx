"use client"

import { Shield, Lock, Fingerprint, Brain, Scale, Gavel, FileText, Download } from "lucide-react"

export function NeuroRights() {
    return (
        <section id="neuroderechos" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: Content */}
                    <div className="lg:w-3/5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-8">
                            <Shield className="h-4 w-4 text-emerald-400" />
                            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Marco Legal Chileno</span>
                        </div>
                        
                        <h2 className="text-4xl font-black tracking-tight sm:text-6xl mb-8 leading-tight">
                            Protección de los <span className="text-primary">Neuroderechos</span> y la Integridad Mental
                        </h2>
                        
                        <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                            Smarter Labs opera bajo los más altos estándares de soberanía digital. En Chile, el <strong>Proyecto de Ley N° 13828-19</strong> (Neuroderechos) establece las bases para proteger la privacidad mental y la identidad personal frente a las neurotecnologías.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-colors">
                                <Lock className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Privacidad Mental</h4>
                                <p className="text-sm text-zinc-500">Tus datos neuronales y patrones de pensamiento se consideran datos sensibles bajo la Ley N° 19.628.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-colors">
                                <Fingerprint className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Identidad y Autonomía</h4>
                                <p className="text-sm text-zinc-500">Derecho a la continuidad psicológica y protección contra manipulaciones externas directas.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-colors">
                                <Brain className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Libre Albedrio</h4>
                                <p className="text-sm text-zinc-500">Garantizamos que los procesos automatizados de toma de decisiones no vulneren la autodeterminación.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-colors">
                                <Scale className="h-8 w-8 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Protección de Sesgos</h4>
                                <p className="text-sm text-zinc-500">Control estricto sobre algoritmos para evitar discriminación o inequidades tecnológicas.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="https://facultadmedicina.uc.cl/wp-content/uploads/2024/08/Neuroderechos-y-Neurotecnologi%CC%81as.docx"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold transition-colors"
                            >
                                <Download className="h-4 w-4" />
                                Descargar Minuta Ley
                            </a>
                        </div>
                    </div>

                    {/* Right: Badge/Document details */}
                    <div className="lg:w-2/5 w-full">
                        <div className="sticky top-24 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                                    <Gavel className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-black text-xl uppercase tracking-tighter italic">Boletín 13828-19</h3>
                                    <p className="text-xs text-primary font-bold uppercase tracking-widest">En Segundo Trámite Constitucional</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Última Actualización</p>
                                    <p className="text-sm font-bold">01 de Agosto, 2024</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Autores de la Moción</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Chahuán", "Coloma", "De Urresti", "Girardi", "Goic"].map(name => (
                                            <span key={name} className="px-2 py-1 rounded-md bg-zinc-800 text-[10px] font-bold">{name}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Estado Actual</p>
                                    <p className="text-sm text-zinc-300">Comisión de Futuro, Ciencias, Tecnología, Conocimiento e Innovación (Cámara de Diputados).</p>
                                </div>
                                
                                <div className="pt-6 border-t border-zinc-800">
                                    <div className="flex items-center gap-3 text-xs text-zinc-400 mb-4">
                                        <FileText className="h-4 w-4 text-primary" />
                                        <span>Modificación al Código Sanitario (Art. 145)</span>
                                    </div>
                                    <p className="text-[11px] leading-relaxed text-zinc-500 italic">
                                        "Lo mismo aplicará también para el caso del aprovechamiento de la actividad neuronal y los datos neuronales obtenidos a partir de ella."
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                                <p className="text-xs text-emerald-400 font-bold mb-1">CUMPLIMIENTO SMARTER LABS</p>
                                <p className="text-[10px] text-emerald-500/70">Nuestra arquitectura de IA Local (Jetson/M4) garantiza que el procesamiento ocurra dentro de tus dependencias, cumpliendo con la indemnidad mental y privacidad de datos exigida por el marco regulatorio chileno.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
