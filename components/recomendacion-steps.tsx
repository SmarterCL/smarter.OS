export function RecomendacionSteps() {
    const steps = [
        { number: "1", title: "Seleccionas un plan" },
        { number: "2", title: "Defines la duración" },
        { number: "3", title: "Compartes por WhatsApp o Email" },
        { number: "4", title: "Descuento inmediato" },
        { number: "5", title: "Comisión automática" },
        { number: "6", title: "Recibe tu pago" },
    ]

    return (
        <section id="recomendacion" className="py-24 bg-white text-zinc-900 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-zinc-900">
                    Cómo funciona la <span className="text-primary">recomendación empresarial</span>
                </h2>
                <p className="text-lg text-zinc-500 mb-20 max-w-2xl mx-auto">
                    Seis pasos simples. Sin formularios. Sin vendedores. Sin fricción.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center items-start">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground font-black text-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                                {step.number}
                            </div>
                            <p className="text-sm font-medium text-zinc-800 leading-relaxed">
                                {step.title}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-zinc-200 text-xs text-zinc-500 flex flex-col items-center">
                    <p>Modelo válido solo para empresas con RUT.</p>
                    <p>Operación real. Sin promesas de ingresos automáticos. Transparencia total.</p>
                </div>
            </div>
        </section>
    )
}
