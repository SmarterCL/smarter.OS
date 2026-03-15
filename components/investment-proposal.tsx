"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Info, TrendingUp, Zap, Cpu, Globe, Server, FileText, BarChart3, TrendingDown } from "lucide-react"

const stackItems = [
    "SmarterOS",
    "AI Agents",
    "Chatwoot omnicanal",
    "Odoo ERP",
    "Automatización n8n",
    "OpenClaw AI",
    "Infraestructura VPS",
    "Economic Graph"
]

const costs = [
    { item: "VPS Hostinger", cost: "~200 USD" },
    { item: "OpenClaw", cost: "~200 USD" },
    { item: "Infraestructura AI", cost: "~200 USD" },
    { item: "Integración SmarterOS", cost: "~200 USD" },
    { item: "Operación / soporte", cost: "~200 USD" },
]

export function InvestmentProposal() {
    return (
        <section id="investment" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 uppercase tracking-widest bg-primary/5">
                        Propuesta nunex.lat
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-6">
                        AI Operating Stack <span className="text-primary italic">Empresarial</span>
                    </h2>
                    <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        No vendemos un VPS. Entregamos una empresa digital operativa desde el día 1.
                    </p>
                </div>

                <Tabs defaultValue="product" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-zinc-900/50 p-1 border border-zinc-800 rounded-2xl h-auto flex-wrap justify-center">
                            <TabsTrigger value="product" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-zinc-950 font-bold uppercase text-xs tracking-widest">
                                1. El Producto
                            </TabsTrigger>
                            <TabsTrigger value="cost" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-zinc-950 font-bold uppercase text-xs tracking-widest">
                                2. Costo & Retorno
                            </TabsTrigger>
                            <TabsTrigger value="investment" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-zinc-950 font-bold uppercase text-xs tracking-widest">
                                3. Inversión & ANR
                            </TabsTrigger>
                            <TabsTrigger value="structure" className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-zinc-950 font-bold uppercase text-xs tracking-widest">
                                4. Estructura & Activo
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="product" className="mt-0 focus-visible:outline-none">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm overflow-hidden border-l-4 border-l-primary flex flex-col">
                                <CardHeader className="p-8">
                                    <div className="flex items-center gap-3 mb-2 text-primary">
                                        <Cpu className="w-6 h-6" />
                                        <CardTitle className="uppercase italic text-2xl font-black text-white">The Stack</CardTitle>
                                    </div>
                                    <CardDescription className="text-zinc-400">Componentes integrados en el ecosistema operativo.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                    {stackItems.map((item) => (
                                        <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 group hover:border-primary/30 transition-all">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-zinc-950 transition-colors">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-bold text-zinc-100">{item}</span>
                                        </div>
                                    ))}
                                </CardContent>
                                <div className="p-8 bg-primary/5 mt-auto border-t border-zinc-800">
                                    <p className="text-sm italic font-medium text-zinc-300">
                                        "Por ~1000 USD desplegamos una empresa digital completa operada por IA."
                                    </p>
                                </div>
                            </Card>

                            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8 flex flex-col justify-center relative overflow-hidden">
                                <div className="absolute -right-20 -bottom-20 opacity-5">
                                    <Globe className="w-80 h-80" />
                                </div>
                                <h3 className="text-3xl font-black uppercase italic mb-6">Resultado Final:</h3>
                                <div className="space-y-6 relative z-10">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                                            <Check className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-white mb-1">Empresa Digital Operativa</p>
                                            <p className="text-zinc-400">Lista para facturar, cobrar y operar automáticamente desde el primer segundo.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                                            <BarChart3 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-white mb-1">Economic Graph</p>
                                            <p className="text-zinc-400">Visibilidad total de flujos económicos y red de conexiones empresariales.</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="cost" className="mt-0 focus-visible:outline-none">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8">
                                <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
                                    <TrendingDown className="w-6 h-6 text-emerald-400" />
                                    Costo de Despliegue (CAPEX)
                                </h3>
                                <div className="space-y-4">
                                    {costs.map((c) => (
                                        <div key={c.item} className="flex justify-between items-center p-4 rounded-xl border border-zinc-800 bg-zinc-800/20">
                                            <span className="text-sm font-bold text-zinc-300 uppercase tracking-widest">{c.item}</span>
                                            <span className="text-sm font-black text-primary">{c.cost}</span>
                                        </div>
                                    ))}
                                    <div className="mt-8 p-6 rounded-2xl bg-primary/10 border-2 border-primary/20 flex justify-between items-center">
                                        <span className="text-lg font-black uppercase italic">Total Paquete</span>
                                        <span className="text-3xl font-black text-primary italic">≈ 1.000 USD</span>
                                    </div>
                                </div>
                            </Card>

                            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8 flex flex-col">
                                <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                    Valor Percibido vs. Tradicional
                                </h3>
                                <div className="flex-1 space-y-8">
                                    <div className="relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-zinc-800" />
                                        <div className="pl-6 space-y-4">
                                            <div className="flex justify-between items-center opacity-50">
                                                <span className="text-sm uppercase font-bold">Modelo Tradicional</span>
                                                <span className="text-sm font-black line-through">80k – 120k USD</span>
                                            </div>
                                            <p className="text-xs text-zinc-500 italic">Servidores físicos + Licencias Enterprise + Consultoría + Equipo Técnico IT</p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                                        <div className="pl-6 space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm uppercase font-black text-primary">SmarterOS Stack</span>
                                                <span className="text-2xl font-black text-white">1k – 5k USD</span>
                                            </div>
                                            <p className="text-sm text-zinc-300 font-medium">El inversor no compra servidores; compra <span className="text-primary italic">capacidad de operación digital inmediata.</span></p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="investment" className="mt-0 focus-visible:outline-none">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8">
                                <h3 className="text-xl font-black uppercase italic mb-8">Uso de Fondos (100k USD)</h3>
                                <div className="space-y-6">
                                    {[
                                        { area: "Infraestructura", p: "15%", color: "bg-sky-500" },
                                        { area: "Desarrollo AI", p: "25%", color: "bg-primary" },
                                        { area: "Expansión Comercial", p: "40%", color: "bg-emerald-500" },
                                        { area: "Operación", p: "20%", color: "bg-zinc-500" }
                                    ].map((f) => (
                                        <div key={f.area} className="space-y-2">
                                            <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                                                <span>{f.area}</span>
                                                <span className="text-primary">{f.p}</span>
                                            </div>
                                            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                                <div className={`h-full ${f.color}`} style={{ width: f.p }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-xs text-zinc-500 font-medium uppercase tracking-tight italic">
                                    *Escala la infraestructura para cientos de empresas en Chile y Argentina.
                                </p>
                            </Card>

                            <Card className="bg-primary border-none text-zinc-950 p-8 flex flex-col justify-between overflow-hidden relative">
                                <div className="absolute -right-10 -top-10 opacity-20 transform rotate-12">
                                    <FileText className="w-64 h-64" />
                                </div>
                                <div>
                                    <Badge variant="outline" className="border-zinc-950/20 text-zinc-950 mb-4 px-4 py-1 uppercase tracking-widest bg-zinc-950/5">
                                        ANR Corfo / I+D+i
                                    </Badge>
                                    <h3 className="text-3xl font-black uppercase italic mb-4">Soberanía Tecnológica</h3>
                                    <p className="text-zinc-900/80 font-bold mb-6 italic">
                                        "SmarterOS encaja perfecto como infraestructura de IA para pymes."
                                    </p>
                                </div>
                                <div className="space-y-3 relative z-10">
                                    {["IA Aplicada", "Digitalización de Empresas", "Plataformas Tecnológicas"].map(item => (
                                        <div key={item} className="flex items-center gap-2 bg-zinc-950/10 p-2 rounded-lg border border-zinc-950/10">
                                            <Check className="w-4 h-4" />
                                            <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="structure" className="mt-0 focus-visible:outline-none">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm p-8 lg:col-span-2">
                                <h3 className="text-xl font-black uppercase italic mb-8">Estructura Corporativa: Smarter SPA</h3>
                                <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                                    {[
                                        "AI Operating System",
                                        "Infraestructura Cloud",
                                        "Red Económica Digital"
                                    ].map((step, i) => (
                                        <div key={step} className="flex flex-col items-center gap-4 flex-1">
                                            <div className="w-16 h-16 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-primary text-xl font-black">
                                                0{i+1}
                                            </div>
                                            <p className="text-xs font-black uppercase text-center tracking-widest leading-relaxed">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {["SaaS OS", "AI Agents", "Automatización", "Datos Económicos"].map(inc => (
                                        <div key={inc} className="bg-zinc-800/40 p-3 rounded-xl border border-zinc-700/30 text-[10px] font-black uppercase tracking-widest text-center text-primary">
                                            {inc}
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card className="bg-white border-none text-zinc-950 p-8 flex flex-col border-t-8 border-t-primary">
                                <h3 className="text-xl font-black uppercase italic mb-6">El Verdadero Activo</h3>
                                <p className="text-zinc-600 font-medium mb-8">
                                    No es el software. Es la <span className="text-zinc-950 font-black border-b-2 border-primary">red de empresas</span> conectadas al sistema.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between text-xs font-black opacity-40">
                                        <span>Stripe</span>
                                        <span>Payments</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs font-black opacity-40">
                                        <span>Shopify</span>
                                        <span>Commerce</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs font-black text-primary">
                                        <span>SmarterOS</span>
                                        <span className="italic">AI Operation</span>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <Badge className="bg-zinc-100 text-zinc-400 border border-zinc-200 uppercase text-[10px] mb-4">Siguiente paso</Badge>
                                    <p className="text-xs font-bold leading-relaxed">
                                        Desplegar los <span className="text-primary italic">primeros 5 clientes piloto</span> para convertir la propuesta en algo invertible.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
