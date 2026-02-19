export default function DataDeletePage() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-6 text-foreground">
            <h1 className="text-3xl font-bold mb-8">Eliminación de Datos</h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">1. Política de Eliminación</h2>
                    <p>
                        Sus datos son suyos. Smarter OS soporta la eliminación completa de datos comerciales a petición del cliente.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">2. Proceso de Solicitud</h2>
                    <p>
                        Para solicitar la eliminación definitiva de su instancia y bases de datos, escriba un correo a contacto@smarter.cl con el asunto "SOLICITUD ELIMINACIÓN DE DATOS".
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">3. Plazos</h2>
                    <p>
                        Las solicitudes se procesan en un plazo de 30 días hábiles.
                        Se verificará la titularidad antes de proceder.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">4. Copia de Seguridad</h2>
                    <p>
                        Recomendamos descargar un backup completo (SQL Dump) de su instancia Odoo antes de proceder. Una vez eliminada la base de datos, la acción es irreversible.
                    </p>
                </section>
            </div>
        </div>
    )
}
