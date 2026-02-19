import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col pt-24">
            <Navbar />
            <div className="container mx-auto max-w-4xl py-12 px-6 text-foreground flex-1">
                <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">1. Uso del Servicio</h2>
                        <p>
                            Al acceder a Smarter OS, usted acepta utilizar el sistema para fines comerciales legítimos y en cumplimiento con las regulaciones de proyectos Sercotec/Corfo cuando aplique.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">2. Licencia</h2>
                        <p>
                            Se otorga una licencia de software para el uso de Smarter OS bajo el stack "Exoesqueleto Comercial".
                            Los módulos Open Source (Odoo, n8n) se rigen por sus respectivas licencias.
                            El código propietario "Smarter" es para uso exclusivo del cliente activo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">3. Responsabilidades</h2>
                        <p>
                            El cliente es responsable del mantenimiento físico de su hardware autónomo (Mac mini) si opta por la solución On-Premise.
                            Smarter SPA provee el soporte de software según contrato.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mb-3">4. Pagos y Cobranza</h2>
                        <p>
                            Los pagos se realizan mensualmente o anualmente. El acceso al servicio puede suspenderse por falta de pago tras 30 días de mora.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}
