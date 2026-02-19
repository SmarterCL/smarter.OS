export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-primary-foreground font-mono">S</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              {"Smarter"}<span className="text-primary">{"OS"}</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/SmarterCL/smarter.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <span className="text-border">{"/"}</span>
            <span>SmarterCL</span>
            <span className="text-border">{"/"}</span>
            <span>Chile</span>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SmarterOS. Todos los derechos reservados.
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
