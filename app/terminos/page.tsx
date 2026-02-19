import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Términos y Condiciones | Smarter OS',
    description: 'Términos y condiciones de uso de Smarter OS.',
}

export default function TerminosPage() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Términos y Condiciones
                    </h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Última actualización: {new Date().toLocaleDateString('es-CL')}
                    </p>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-foreground/90">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">1. Aceptación de los Términos</h2>
                        <p className="leading-relaxed">
                            Al acceder y utilizar Smarter OS ("el Servicio"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al Servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">2. Uso del Servicio</h2>
                        <p className="leading-relaxed">
                            Usted se compromete a utilizar el Servicio únicamente con fines legales y de acuerdo con estos Términos. Se le prohíbe utilizar el Servicio de cualquier manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el Servicio o interferir con el uso y disfrute del Servicio por parte de terceros.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">3. Cuentas</h2>
                        <p className="leading-relaxed">
                            Al crear una cuenta con nosotros, debe proporcionarnos información que sea precisa, completa y actual en todo momento. El incumplimiento de esto constituye una violación de los Términos, que puede resultar en la terminación inmediata de su cuenta en nuestro Servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">4. Propiedad Intelectual</h2>
                        <p className="leading-relaxed">
                            El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Smarter OS y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas y otras leyes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">5. Limitación de Responsabilidad</h2>
                        <p className="leading-relaxed">
                            En ningún caso Smarter OS, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de su acceso o uso o incapacidad de acceder o usar el Servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">6. Cambios</h2>
                        <p className="leading-relaxed">
                            Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es importante, intentaremos proporcionar un aviso con al menos 30 días de antelación antes de que entren en vigor los nuevos términos.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
