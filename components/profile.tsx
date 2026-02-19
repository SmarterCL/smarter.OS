import { Linkedin } from "lucide-react"

export function Profile() {
    return (
        <section className="border-t border-border bg-card/30 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
                    {/* Profile Image Column */}
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                        <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-primary/20 bg-secondary shadow-xl ring-1 ring-border sm:h-80 sm:w-80">
                            {/* Note: User needs to place their image in public/pedro.jpg or update this path */}
                            <img
                                src="/pedro.jpg"
                                alt="Pedro Zaffuto"
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                        </div>

                        <a
                            href="https://www.linkedin.com/in/pedrozaffuto-cl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                        >
                            <Linkedin className="h-4 w-4 transition-colors group-hover:text-[#0077b5]" />
                            <span>Conectar en LinkedIn</span>
                        </a>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                            <span>Sales Engineer</span>
                        </div>

                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                            {"El Rol del Traductor Técnico-Comercial"}
                        </h2>

                        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                            <p>
                                Como <span className="font-semibold text-foreground">Sales Engineer</span>, mi trabajo es actuar de "traductor" y acompañar al proceso comercial para asegurar que <span className="italic text-foreground">lo que se promete realmente se pueda cumplir</span>.
                            </p>

                            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                                <p className="mb-4 text-base font-medium text-foreground">
                                    Mi enfoque:
                                </p>
                                <ul className="space-y-3 text-base">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>Arquitectura backend orientada a negocio.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>Desarrollo de infraestructura para sistemas agénticos e IA aplicada.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>Foco obsesivo en eficiencia operativa, seguridad y resultados medibles.</span>
                                    </li>
                                </ul>
                            </div>

                            <blockquote className="border-l-4 border-primary pl-6 text-xl font-medium italic text-foreground/80">
                                "Ahora la IA propone una forma distinta de operar negocios digitales en Chile. 2026 es el año."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
