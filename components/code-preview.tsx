export function CodePreview() {
  return (
    <section className="relative border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary font-mono">
              Open Source
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Transparente. Auditable. Replicable."}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {"Toda la configuracion esta en el repositorio. Caddyfile, docker-compose, reglas de firewall. Sin cajas negras."}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {[
                { label: "Docker Compose", desc: "Orquestacion completa del stack" },
                { label: "Caddyfile", desc: "Reverse proxy con HTTPS automatico" },
                { label: "UFW + iptables", desc: "Seguridad de red documentada" },
                { label: "Backups", desc: "Scripts de respaldo por tenant" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{" — "}{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-background">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/50" />
              <span className="h-3 w-3 rounded-full bg-amber-500/50" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/50" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">docker-compose.yml</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-muted-foreground">{"# Smarter OS — Stack operativo"}</div>
              <div className="mt-2">
                <span className="text-primary">{"services"}</span>
                <span className="text-muted-foreground">{":"}</span>
              </div>
              <div className="ml-4 mt-1">
                <span className="text-emerald-400">{"odoo"}</span>
                <span className="text-muted-foreground">{":"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"image: "}
                <span className="text-foreground">{"odoo:17"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"expose: "}
                <span className="text-foreground">{"[\"8069\"]"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"depends_on: "}
                <span className="text-foreground">{"[db]"}</span>
              </div>
              <div className="ml-4 mt-3">
                <span className="text-emerald-400">{"db"}</span>
                <span className="text-muted-foreground">{":"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"image: "}
                <span className="text-foreground">{"postgres:16"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"expose: "}
                <span className="text-foreground">{"[\"5432\"]"}</span>
              </div>
              <div className="ml-4 mt-3">
                <span className="text-emerald-400">{"caddy"}</span>
                <span className="text-muted-foreground">{":"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"image: "}
                <span className="text-foreground">{"caddy:2-alpine"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"ports: "}
                <span className="text-foreground">{"[\"80:80\", \"443:443\"]"}</span>
              </div>
              <div className="ml-4 mt-3">
                <span className="text-emerald-400">{"n8n"}</span>
                <span className="text-muted-foreground">{":"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"image: "}
                <span className="text-foreground">{"n8nio/n8n"}</span>
              </div>
              <div className="ml-8 text-muted-foreground">
                {"expose: "}
                <span className="text-foreground">{"[\"5678\"]"}</span>
              </div>
              <div className="mt-4 text-muted-foreground/60">
                {"# Solo Caddy expone puertos al mundo"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
