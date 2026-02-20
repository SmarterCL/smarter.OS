import { Linkedin } from "lucide-react"

export function Profile() {
    return (
        <section className="border-t border-border bg-card/30 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
                    {/* Profile Image Column */}
                    <div className="flex flex-col items-center gap-6 lg:w-1/3">
                        <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-primary/20 bg-secondary shadow-xl ring-1 ring-border sm:h-80 sm:w-80">
                            <img
                                src="/smarter_founder.jpeg"
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
                            La trampa de la "Escalabilidad Silenciosa"
                        </h2>

                        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                            <p>
                                Alguien puede vender 5 pasteles por WhatsApp usando solo sus manos. El problema viene cuando quiere vender <span className="font-semibold text-foreground">500</span>.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                                    <span>
                                        <strong>Sin tecnología, el crecimiento es lineal:</strong> más ventas = más agotamiento humano.
                                    </span>
                                </li>
                                <li className="flex items-start gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                                    <span>
                                        <strong className="text-foreground">Con tecnología, el crecimiento es exponencial:</strong> el sistema trabaja igual para 1 que para 1,000.
                                    </span>
                                </li>
                            </ul>

                            <blockquote className="border-l-4 border-primary pl-6 text-xl font-medium italic text-foreground">
                                "El punto de quiebre: El emprendedor analógico cree que para crecer solo necesita 'echarle ganas' o contratar más gente..."
                            </blockquote>

                            <p className="rounded-lg bg-secondary/50 p-6 text-sm">
                                ...Sin entender que un software de automatización (<strong className="text-primary">CRM</strong> o <strong className="text-primary">ERP</strong>) sustituye a diez empleados y elimina el error humano.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
