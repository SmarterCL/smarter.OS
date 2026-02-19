import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Eliminación de Datos | Smarter OS',
    description: 'Instrucciones para solicitar la eliminación de datos en Smarter OS.',
}

export default function DataDeletePage() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
                <div className="border-b pb-4">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Solicitud de Eliminación de Datos
                    </h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Instrucciones para gestionar su información personal
                    </p>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-foreground/90">
                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Derecho al olvido</h2>
                        <p className="leading-relaxed">
                            De acuerdo con las normativas de protección de datos vigentes, usted tiene derecho a solicitar la eliminación de sus datos personales almacenados en nuestros sistemas. En Smarter OS nos tomamos muy en serio la privacidad y el control de sus datos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Cómo solicitar la eliminación</h2>
                        <p className="leading-relaxed">
                            Para solicitar la eliminación de su cuenta y todos los datos asociados, por favor siga los siguientes pasos:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Envíe un correo electrónico a <strong>soporte@smarterbot.cl</strong> desde la dirección de correo electrónico asociada a su cuenta.</li>
                            <li>Utilice el asunto: "Solicitud de Eliminación de Datos - [Su Nombre de Usuario]".</li>
                            <li>En el cuerpo del mensaje, indique explícitamente que desea eliminar su cuenta y sus datos personales de forma permanente.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground">Proceso de eliminación</h2>
                        <p className="leading-relaxed">
                            Una vez recibida su solicitud:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Nuestro equipo de soporte verificará su identidad para garantizar la seguridad de la cuenta.</li>
                            <li>Se procesará la eliminación de sus datos de nuestros sistemas activos en un plazo máximo de 30 días.</li>
                            <li>Recibirá una confirmación por correo electrónico una vez que el proceso se haya completado.</li>
                        </ul>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Nota: Cierta información podría conservarse por un período limitado si así lo exige la ley o para fines legítimos de negocio, como la prevención de fraudes o el mantenimiento de registros financieros.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
