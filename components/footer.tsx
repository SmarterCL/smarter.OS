export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 overflow-hidden rounded-lg">
                <img src="/icon.jpg" alt="SmarterBOT Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {"Smarter"}<span className="text-primary">{"OS"}</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap justify-center md:justify-start">
              <a href="mailto:contacto@smarter.cl" className="transition-colors hover:text-foreground">contacto@smarter.cl</a>
              <span className="text-border hidden md:inline">{"/"}</span>
              <a href="https://wa.me/56979540471" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">+56 9 7954 0471</a>
              <span className="text-border hidden md:inline">{"/"}</span>
              <span className="text-center md:text-left">Arturo Prat 1420 Oficina 214, Santiago</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://mcpservers.org/servers/smartercl/smartermcp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub SmarterMCP
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Smarter SPA (RUT: 78.233.417-4). Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="/privacidad" className="hover:text-foreground hover:underline">
              Privacidad
            </a>
            <a href="/terminos" className="hover:text-foreground hover:underline">
              Términos
            </a>
            <a href="/datadelete" className="hover:text-foreground hover:underline">
              Eliminación de Datos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
