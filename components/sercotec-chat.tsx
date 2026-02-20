"use client"

import { useState } from "react"
import { Search, Loader2, MessageSquare, Send, Bot, User, CheckCircle2 } from "lucide-react"

export function SercotecChat() {
    const [rut, setRut] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<null | { status: string; message: string }>(null)
    const [chatOpen, setChatOpen] = useState(false)
    const [messages, setMessages] = useState<{ role: "bot" | "user"; content: string }[]>([])
    const [input, setInput] = useState("")

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!rut) return

        setLoading(true)
        // Simulate API call to https://apiautenticador.sercotec.cl/swagger/ui/index#/Autenticador
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setLoading(false)
        setResult({
            status: "Calificado",
            message: "Proyecto 2026 - Digitaliza tu Almacén: APROBADO TÉCNICAMENTE",
        })
        setMessages([
            {
                role: "bot",
                content: `Hola. He encontrado el proyecto asociado al RUT ${rut}. El estado actual es "Calificado". ¿Qué te gustaría saber sobre los siguientes pasos o requisitos?`,
            },
        ])
        setChatOpen(true)
    }

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMsg = input
        setMessages((prev) => [...prev, { role: "user", content: userMsg }])
        setInput("")

        // Simulate bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    content: "Entendido. Según las bases 2026 de Sercotec, para la etapa de formalización necesitarás acreditar el inicio de actividades y la compra del equipamiento digital (como nuestro Kit Smarter OS). ¿Te envío la lista de requisitos?",
                },
            ])
        }, 1000)
    }

    return (
        <section className="border-t border-border bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                    {/* Header with Sercotec Branding */}
                    <div className="bg-white p-6 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
                            <div className="h-12 w-auto overflow-hidden">
                                <img src="https://rutadigital.cl/static/img/logos/ruta-digital.8468cd4a82a6.png" alt="Ruta Digital Sercotec" className="h-full object-contain" />
                            </div>
                            <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>
                            <div className="hidden sm:flex flex-col">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Ruta Digital Sercotec
                                </h3>
                                <span className="text-sm font-medium text-emerald-600/80">
                                    Kit Digital – Ruta Digital
                                </span>
                            </div>
                        </div>
                        <div className="text-xs font-mono text-gray-400">
                            api.sercotec.cl/v1
                        </div>
                    </div>

                    <div className="p-6 sm:p-10">
                        <div className="grid gap-10 md:grid-cols-2 items-start">
                            {/* Información del Kit Digital - Ruta Digital */}
                            <div className="space-y-6">
                                <div>
                                    <span className="mb-3 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                        Kit Digital – Ruta Digital
                                    </span>
                                    <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                        Subsidio de $1,2 millones
                                    </h3>
                                    <p className="mt-4 text-muted-foreground leading-relaxed">
                                        Otorga un subsidio para concretar las actividades detalladas en el plan de trabajo.
                                    </p>
                                </div>
                                <ul className="space-y-4 text-sm text-foreground">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                                        <span className="leading-relaxed">
                                            <strong>$600 mil a $1,2 millones</strong> pueden destinarse a activos intangibles: sitio web, software de contabilidad digital (CRM), sistemas de administración de negocios (ERP) para inventario o facturación, herramientas de marketing y posicionamiento.
                                        </span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                                        <span className="leading-relaxed">
                                            <strong>Hasta $600 mil</strong> pueden destinarse a activos fijos.
                                        </span>
                                    </li>
                                </ul>
                                <div className="rounded-xl bg-secondary/40 p-4 text-xs text-muted-foreground border border-border">
                                    <p className="mb-2">
                                        * Cada empresa o cooperativa que resulte beneficiaria deberá financiar cualquier impuesto asociado a su proyecto.
                                    </p>
                                    <a
                                        href="https://www.sercotec.cl/ruta-digital/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300"
                                    >
                                        Ver bases en sercotec.cl →
                                    </a>
                                </div>
                            </div>

                            {/* Buscador y Chat Bot */}
                            <div className="flex flex-col rounded-2xl bg-background border border-border shadow-sm overflow-hidden h-full">
                                {!chatOpen ? (
                                    <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                                        <h2 className="text-xl font-bold text-foreground mb-3">Consulta Estado de Proyecto</h2>
                                        <p className="text-sm text-muted-foreground mb-8">
                                            Ingresa tu RUT o Código de Proyecto para verificar elegibilidad 2026.
                                        </p>

                                        <form onSubmit={handleSearch} className="relative flex w-full max-w-sm items-center">
                                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                                            <input
                                                type="text"
                                                placeholder="Ej: 12.345.678-9"
                                                className="h-12 w-full rounded-l-xl border border-border bg-background pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                                value={rut}
                                                onChange={(e) => setRut(e.target.value)}
                                            />
                                            <button
                                                type="submit"
                                                disabled={loading || !rut}
                                                className="h-12 rounded-r-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                                            >
                                                {loading ? (
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                ) : (
                                                    "Buscar"
                                                )}
                                            </button>
                                        </form>

                                        <div className="mt-8 flex justify-center gap-6 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> API Conectada</span>
                                            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Bases 2026</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col h-[500px]">
                                        {/* Result Header */}
                                        <div className="flex items-center justify-between rounded-lg bg-emerald-500/10 p-4 mb-4 border border-emerald-500/20">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-emerald-500 text-white p-2 rounded-full">
                                                    <CheckCircle2 className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-emerald-700 dark:text-emerald-400">Resultado: {result?.status}</p>
                                                    <p className="text-xs text-emerald-600/80 dark:text-emerald-500">{result?.message}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setChatOpen(false)}
                                                className="text-xs text-muted-foreground hover:text-foreground underline"
                                            >
                                                Nueva búsqueda
                                            </button>
                                        </div>

                                        {/* Chat Area */}
                                        <div className="flex-1 overflow-y-auto space-y-4 p-4 rounded-lg bg-secondary/20 mb-4 border border-border/50">
                                            {messages.map((msg, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                                        }`}
                                                >
                                                    <div
                                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-zinc-200 text-zinc-700"
                                                            }`}
                                                    >
                                                        {msg.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                                    </div>
                                                    <div
                                                        className={`rounded-lg px-4 py-2 text-sm max-w-[80%] ${msg.role === "user"
                                                            ? "bg-primary text-primary-foreground"
                                                            : "bg-card border border-border text-foreground shadow-sm"
                                                            }`}
                                                    >
                                                        {msg.content}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Input Area */}
                                        <form onSubmit={handleSend} className="relative">
                                            <input
                                                type="text"
                                                placeholder="Escribe tu consulta sobre el proyecto..."
                                                className="h-12 w-full rounded-lg border border-border bg-background pl-4 pr-12 text-sm focus:border-primary focus:outline-none"
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-primary p-2 text-primary-foreground transition-opacity hover:opacity-90"
                                            >
                                                <Send className="h-4 w-4" />
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
