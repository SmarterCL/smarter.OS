export function RecomendacionSteps() {
    return (
        <section id="recomendacion" className="py-24 bg-zinc-50 text-zinc-900 px-6 border-t border-zinc-200">
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                <div className="inline-flex items-center rounded-full border border-yellow-400 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-600 mb-6 font-semibold uppercase tracking-wider">
                    Sercotec
                </div>

                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-zinc-900 max-w-4xl leading-tight">
                    Si estás en Sercotec puedes comprar con nosotros <span className="text-yellow-500">CRM Chatwoot</span> y <span className="text-yellow-500">ERP Odoo v19</span> OpenSource
                </h2>

                <p className="text-xl text-zinc-500 mb-16 max-w-2xl mx-auto">
                    Tienda de hardware y software para tu emprendimiento.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full max-w-4xl">
                    <div className="flex flex-col items-center group">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-zinc-200/50">
                            <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
                            <img src="/hub_smarter.png" alt="Hub Smarter" className="w-full h-auto object-cover max-w-md transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                        <h3 className="mt-8 text-2xl font-bold text-zinc-800">Hub Smarter</h3>
                        <p className="mt-3 text-base text-zinc-500 text-center max-w-xs">El centro de control perfecto para gestionar todas tus operaciones diarias con fluidez.</p>
                    </div>

                    <div className="flex flex-col items-center group">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl border border-zinc-200/50 block">
                            <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
                            <img src="/m4_notebook.jpeg" alt="M4 Notebook" className="w-full h-auto object-cover max-w-md transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                        </div>
                        <h3 className="mt-8 text-2xl font-bold text-zinc-800">Hardware Premium</h3>
                        <p className="mt-3 text-base text-zinc-500 text-center max-w-xs">Equipamiento tecnológico de última generación para potenciar tu negocio.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
