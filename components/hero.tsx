"use client"

import { useState } from "react"
import { ArrowRight, Shield, Layers, Zap, Calendar as CalendarIcon, MapPin, Clock } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"

export function Hero() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState<string>("10:00")

  const handleWhatsApp = () => {
    const formattedDate = date ? date.toLocaleDateString('es-CL') : 'Sin fecha'
    const message = `Hola! Me gustaría asistir a una invitación presencial en el HUB. \n\n📍 Fecha: ${formattedDate}\n⏰ Hora: ${time}`
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "56979540471"
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow effect */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-2 pb-12 lg:pt-4 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground font-mono tracking-wider uppercase">
              SmarterBot – Inteligencia Real. Resultados Reales.
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            {"CRM, ERP, n8n, FastAPI, Grafana, Metabase y "}
            <br className="hidden sm:block" />
            <span className="text-primary">+ en Piloto Automático</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground lg:text-xl font-medium">
            {"Todo en un solo servicio. Aplica con Sercotec."}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#propuesta"
              className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Ver La Propuesta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                  Invitación Presencial
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
                <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
                  {/* Left Side: Photo & Map */}
                  <div className="flex flex-col bg-secondary/30">
                    <div className="relative h-48 sm:h-64 bg-zinc-900 overflow-hidden">
                      <img
                        src="/hub.jpg"
                        alt="STGO HUB"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">STGO HUB</h3>
                        <p className="text-sm opacity-90 flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" /> San Isidro 85, Santiago (Metro Santa Lucía)
                        </p>
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Ubicación
                      </h4>
                      <div className="h-48 rounded-lg overflow-hidden border border-border shadow-sm">
                        <iframe
                          src="https://maps.google.com/maps?q=San%20Isidro%2085%2C%20Santiago&t=&z=15&ie=UTF8&iwloc=&output=embed"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Calendar Booking */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <DialogHeader className="mb-6">
                        <DialogTitle className="text-2xl">Reserva tu visita</DialogTitle>
                        <DialogDescription>
                          Selecciona una fecha y hora para conocer nuestro HUB y conversar en persona.
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid gap-6">
                        <div className="flex justify-center border border-border rounded-xl p-2 bg-card">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md"
                            disabled={(date) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                              return date < today || isWeekend;
                            }}
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-3 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" /> Horarios disponibles
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {["09:00", "11:00", "13:00", "15:00", "17:00"].map((t) => (
                              <button
                                key={t}
                                onClick={() => setTime(t)}
                                className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors border ${time === t
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-surface border-border text-muted-foreground hover:bg-secondary"
                                  }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <button
                        onClick={handleWhatsApp}
                        disabled={!date || !time}
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white py-3.5 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#25D366]/20"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Confirmar por WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-24 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {[
            { icon: Shield, label: "Seguridad", value: "Firewall UFW + Docker aislado" },
            { icon: Layers, label: "Multi-tenant", value: "1 sistema, N clientes" },
            { icon: Zap, label: "Automatizado", value: "Webhook a venta en minutos" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 bg-card p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
