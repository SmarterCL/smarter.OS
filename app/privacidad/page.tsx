import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Smarter OS',
  description: 'Política de privacidad y protección de datos de Smarter OS.',
}

export default function PrivacidadPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="border-b pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-CL')}
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Introducción</h2>
            <p className="leading-relaxed">
              En Smarter OS ("nosotros", "nuestro" o "la Empresa"), respetamos su privacidad y estamos comprometidos con protegerla mediante el cumplimiento de esta política. Esta política describe los tipos de información que podemos recopilar de usted o que usted puede proporcionar cuando visita nuestro sitio web o utiliza nuestros servicios, y nuestras prácticas para recopilar, usar, mantener, proteger y divulgar esa información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Información que recopilamos</h2>
            <p className="leading-relaxed">
              Recopilamos varios tipos de información de y sobre los usuarios de nuestro sitio web, incluida información:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Por la cual se le puede identificar personalmente, como nombre, dirección postal, dirección de correo electrónico o número de teléfono ("información personal").</li>
              <li>Sobre su conexión a internet, el equipo que utiliza para acceder a nuestro sitio web y detalles de uso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Cómo usamos su información</h2>
            <p className="leading-relaxed">
              Usamos la información que recopilamos sobre usted o que usted nos proporciona, incluida cualquier información personal:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Para presentarle nuestro sitio web y su contenido.</li>
              <li>Para proporcionarle información, productos o servicios que nos solicite.</li>
              <li>Para cumplir con cualquier otro propósito para el cual la proporcione.</li>
              <li>Para proporcionarle avisos sobre su cuenta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Seguridad de los datos</h2>
            <p className="leading-relaxed">
              Hemos implementado medidas diseñadas para proteger su información personal contra pérdidas accidentales y contra el acceso, uso, alteración y divulgación no autorizados. Sin embargo, la transmisión de información a través de Internet no es completamente segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Contacto</h2>
            <p className="leading-relaxed">
              Para hacer preguntas o comentar sobre esta política de privacidad y nuestras prácticas de privacidad, contáctenos a través de nuestro sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
