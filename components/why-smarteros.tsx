export function WhySmarterOS() {
  const steps = [
    {
      icon: "📥",
      title: "1. Venta (CRM & Chat)",
      description: "El origen de todo. En SmarterBOT, el CRM y el Chat son lo mismo porque ahí viven tus contactos. Ya sea por WhatsApp o Telegram, cada interacción es una oportunidad de negocio que entra directamente a tu flujo.",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: "📝",
      title: "2. Registro (ERP & RRHH)",
      description: "Configuramos tu Startup o Comercio. No es solo un chat; es el registro automático en tu ERP. Los datos del cliente y la intención de compra se asientan sin intervención manual.",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      icon: "🧾",
      title: "3. Facturación (MELI & SII)",
      description: 'Respuestas con datos reales. El bot para empresas con "RUT Empresa" no solo saluda: emite facturas y gestiona ventas de Mercado Libre. La respuesta llega inmediatamente, con los datos que el cliente necesita.',
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: "💳",
      title: "4. Cobro (Pasarelas de Pago)",
      description: "Transformamos visión en flujo de caja. Integramos el proceso de pago en la misma conversación. El cliente consulta por sus cuotas o deudas y puede pagar ahí mismo, sin descanso, todos los días.",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      icon: "✅",
      title: "5. Conciliación (N8N & Automatización)",
      description: "Adiós a las tareas manuales. Gracias a nuestra arquitectura con N8N, las conciliaciones bancarias y de pagos se ejecutan en segundo plano. Cero errores, cero pérdida de tiempo.",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      icon: "📊",
      title: "6. Reporte (KPI & BI)",
      description: "Decisiones basadas en hardware y software. Cerramos el flujo con Fast API y Business Intelligence. Visualiza tu operación completa en un solo dashboard. Un solo flujo. Cero fricción.",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
    }
  ]

  return (
    <section id="porque" className="relative border-t border-border py-24 lg:py-32 bg-zinc-50/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-8">
            Más que un Chatbot: <span className="text-primary block mt-2">Tu Infraestructura Digital</span>
          </h2>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 inline-block">
            <p className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed italic">
              "SmarterBOT no controla empresas.<br className="hidden sm:block" />
              SmarterBOT <span className="text-primary font-bold">elimina</span> la fricción administrativa."
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
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-[-50%] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-[50%] pointer-events-none"></div>
    </section>
  )
}
