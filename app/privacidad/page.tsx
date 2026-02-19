export default function PrivacidadPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-6 text-foreground">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Recopilación de Información</h2>
          <p>
            En Smarter OS, recopilamos información mínima necesaria para operar nuestro sistema.
            Esto incluye datos básicos como RUT, nombre y correo electrónico utilizados para la gestión de proyectos Sercotec/Corfo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Uso de la Información</h2>
          <p>
            La información se utiliza exclusivamente para:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Verificar elegibilidad en proyectos gubernamentales.</li>
            <li>Proveer acceso a la plataforma Smarter OS.</li>
            <li>Comunicación sobre el estado de servicios.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Almacenamiento Local</h2>
          <p>
            Nuestra propuesta de valor "Exoesqueleto Comercial" prioriza el procesamiento local.
            Sus datos operativos residen principalmente en su instancia local (Mac mini / VPS privado) y no son compartidos con terceros sin su consentimiento explícito.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Contacto</h2>
          <p>
            Para consultas sobre privacidad, contacte a contacto@smarter.cl.
          </p>
        </section>
      </div>
    </div>
  )
}
