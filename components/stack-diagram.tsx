import { ExternalLink, ShieldCheck, Cpu, HardDrive } from "lucide-react"

export function StackDiagram() {
  const products = [
    {
      tier: "Startup",
      name: "Mac Mini",
      specs: "24 GB RAM",
      description: "El punto de partida perfecto. Computador con sistema operativo comercial integrado a tu facturación, contabilidad y RRHH. Operación segura 24x7.",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop",
      buttonText: "Comprar en MercadoLibre",
    },
    {
      tier: "Comercio",
      name: "Mac Mini",
      specs: "32 GB RAM",
      description: "Para negocios con mayor volumen procesando ventas diarias. Conectado a tu ecosistema operativo con máxima seguridad y respuesta inmediata.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
      buttonText: "Comprar en MercadoLibre",
    },
    {
      tier: "Empresa",
      name: "Mac Mini",
      specs: "64 GB RAM",
      description: "Servidor Enterprise. Múltiples agentes operando 24x7, conciliación automatizada masiva y bases de datos aisladas bajo estándar de máxima disponibilidad.",
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop",
      buttonText: "Comprar en MercadoLibre",
    }
  ]

  return (
    <section id="tienda" className="relative border-t border-border py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
            Hardware & Software Integrado
          </p>
          <h2 className="text-balance text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl mb-6">
            Adquiere tu Nodo Operativo
          </h2>
          <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
            Puedes comprar el computador con el sistema operativo comercial directamente de acuerdo a tu tamaño. Todos se integran a tu facturación, contabilidad y RRHH de manera segura para que los agentes lo puedan operar 24x7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div key={idx} className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full bg-zinc-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-zinc-900 border border-zinc-200">
                  {item.tier}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900">{item.name}</h3>
                  </div>
                  <div className="bg-zinc-200 text-zinc-800 px-3 py-1 rounded-lg font-bold text-sm">
                    {item.specs}
                  </div>
                </div>
                <p className="text-zinc-600 mb-8 flex-grow leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    Operación Segura 24x7
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                    <HardDrive className="w-5 h-5 text-indigo-500" />
                    Integración ERP Nativa
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                    <Cpu className="w-5 h-5 text-amber-500" />
                    Bases aisladas (Multi-Tenant)
                  </div>
                </div>

                <a
                  href="#"
                  className="w-full py-4 rounded-xl bg-[#FFE600] text-[#2D3277] hover:bg-[#FFD100] transition-colors font-bold text-sm lg:text-base flex items-center justify-center gap-2 shadow-sm"
                >
                  {item.buttonText}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
