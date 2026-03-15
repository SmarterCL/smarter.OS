"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, Terminal, Cpu, ShieldCheck, RefreshCw, Zap, Database, Globe } from "lucide-react"

interface AgentTask {
    id: string
    agent: string
    task: string
    status: "working" | "success"
    icon: React.ReactNode
    color: string
}

const INITIAL_TASKS: AgentTask[] = [
    {
        id: "1",
        agent: "Neuronal Silicio (Suiza)",
        task: "Validando factura Ley REP #992...",
        status: "working",
        icon: <Cpu className="h-4 w-4" />,
        color: "text-blue-400"
    },
    {
        id: "2",
        agent: "Cortical Hardware (Australia)",
        task: "Procesando respuesta adaptativa orgánica...",
        status: "working",
        icon: <Database className="h-4 w-4" />,
        color: "text-emerald-400"
    },
    {
        id: "3",
        agent: "OpenClaw (Latam)",
        task: "Sincronizando LightRAG con memoria local...",
        status: "working",
        icon: <Globe className="h-4 w-4" />,
        color: "text-primary"
    },
    {
        id: "4",
        agent: "n8n (Flow Webhook)",
        task: "Escuchando pagos entrantes...",
        status: "working",
        icon: <Zap className="h-4 w-4" />,
        color: "text-amber-400"
    },
    {
        id: "5",
        agent: "Smarter Labs",
        task: "Energía Recibida - Sistema Activado",
        status: "success",
        icon: <ShieldCheck className="h-4 w-4" />,
        color: "text-sky-400"
    }
]

export function ActiveAgents() {
    const [tasks, setTasks] = useState<AgentTask[]>(INITIAL_TASKS)

    // Simular rotación de tareas para que se sienta "vivo"
    useEffect(() => {
        const interval = setInterval(() => {
            setTasks(prev => {
                const newTasks = [...prev]
                const indexToUpdate = Math.floor(Math.random() * newTasks.length)

                // Cambiar un Working a Success o viceversa con nueva tarea aleatoria
                if (newTasks[indexToUpdate].status === "working") {
                    newTasks[indexToUpdate] = {
                        ...newTasks[indexToUpdate],
                        status: "success",
                        task: newTasks[indexToUpdate].task.replace("...", "") + " OK"
                    }
                } else {
                    // Resetear o rotar
                    const randomAgents = ["Neuronal Silicio", "Cortical Labs", "OpenClaw", "LightRAG Engine"]
                    const randomTasks = [
                        "Detección de patrones en RUTs...",
                        "Procesamiento bio-computacional...",
                        "Vuelta 3/5 LightRAG completada...",
                        "Enrutando a Nodo Suizo...",
                        "Energía Solar optimizada en Nodo Australia"
                    ]
                    const agent = randomAgents[Math.floor(Math.random() * randomAgents.length)]
                    newTasks[indexToUpdate] = {
                        ...newTasks[indexToUpdate],
                        agent,
                        status: "working",
                        task: randomTasks[Math.floor(Math.random() * randomTasks.length)]
                    }
                }
                return newTasks
            })
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative -mt-16 pb-24 z-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center">

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-4 transition-all hover:border-primary/30 hover:bg-card/60 backdrop-blur-sm"
                            >
                                <div className="flex items-start justify-between">
                                    <div className={`rounded-xl bg-background/50 p-2 border border-border/20 ${task.color}`}>
                                        {task.icon}
                                    </div>
                                    {task.status === "working" ? (
                                        <RefreshCw className="h-4 w-4 text-primary animate-spin" />
                                    ) : (
                                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                    )}
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-xs font-bold text-foreground opacity-70">[{task.agent}]</h3>
                                    <p className="mt-1 text-[13px] font-medium text-muted-foreground leading-snug min-h-[40px]">
                                        {task.task}
                                    </p>
                                </div>

                                {/* Bottom progress bar for "working" items */}
                                {task.status === "working" && (
                                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-primary/10 overflow-hidden">
                                        <div className="h-full bg-primary/40 animate-progress-indefinite" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes progress-indefinite {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-progress-indefinite {
                    animation: progress-indefinite 2s linear infinite;
                }
            `}</style>
        </section>
    )
}
