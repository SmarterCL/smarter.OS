export function WhySmarterOS() {
  const steps = [
    {
      icon: "💬",
      title: "1. Venta (WhatsApp & Telegram)",
      description: "Los leads de WhatsApp y Telegram entran automáticamente al CRM. Cada interacción es una oportunidad de negocio capturada sin intervención manual.",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: "📝",
      title: "2. Registro (Odoo Automático)",
      description: "Odoo crea el cliente y la orden sin tocar un formulario. Los datos de la conversación se asientan directamente en el ERP con cero fricción.",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      icon: "🧾",
      title: "3. Facturación (SII Integrado)",
      description: "Emisión de boleta o factura electrónica integrada con el SII de Chile. El bot para RUT Empresa genera la documentación legal automáticamente.",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: "💳",
      title: "4. Cobro (Flow / Transbank)",
      description: "Link de pago generado en la misma conversación de WhatsApp. El cliente paga sin salir del chat. Cobros disponibles 24/7, todos los días.",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: "📦",
      title: "5. Despacho (Stock & Etiquetas)",
      description: "Tu nodo gestiona la etiqueta logística y descuenta el stock en tiempo real. El resto del flujo: conciliación y reporte en segundo plano.",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      icon: "📊",
      title: "6. Reporte (KPI & BI)",
      description: "Dashboard con indicadores de operación completa. Decisiones basadas en datos reales. Un solo flujo. Una sola verdad. Cero fricción.",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
    }
  ]

  return (
    <section id="porque" className="relative border-t border-border py-24 lg:py-32 bg-zinc-50/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8">
            El Flujo Smarter:{" "}
            <span className="text-primary block mt-2">Cero Fricción</span>
          </h2>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 inline-block">
            <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed italic">
              "Un sistema elimina la burocracia administrativa.<br className="hidden sm:block" />
              Un solo flujo. Una sola{" "}
              <span className="text-primary font-bold">verdad</span>."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative flex flex-col p-8 rounded-3xl bg-card border ${step.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Flow summary */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl border border-border bg-card/30 px-8 py-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-primary">Venta → Registro → Facturación → Cobro → Despacho → Reporte</span>
              <br />
              Automatización completa. Sin silos. Sin fricción.
            </p>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-[-50%] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-[50%] pointer-events-none"></div>
    </section>
  )
}
