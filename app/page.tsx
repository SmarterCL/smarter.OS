import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ActiveAgents } from "@/components/active-agents"
import { BoltStudio } from "@/components/bolt-studio"
import { SmarterOSBox } from "@/components/smarteros-box"
import { GlobalInfrastructure } from "@/components/global-infrastructure"
import { RecomendacionSteps } from "@/components/recomendacion-steps"
import { SmarterBolt } from "@/components/smarter-bolt"
import { Footer } from "@/components/footer"

import { TiendaNodos } from "@/components/tienda-nodos"
import { SmarterServices } from "@/components/smarter-services"
import { NeuroRights } from "@/components/neuro-rights"
import { AgroBusiness } from "@/components/agro-business"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-foreground selection:bg-primary/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)] pointer-events-none" />
      <Navbar />
      <Hero />
      <GlobalInfrastructure />
      <AgroBusiness />
      <NeuroRights />
      <ActiveAgents />
      <SmarterOSBox />
      <TiendaNodos />
      <SmarterServices />
      <BoltStudio />
      <SmarterBolt />
      <RecomendacionSteps />
      <Footer />
    </main>
  )
}
