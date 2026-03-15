import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ActiveAgents } from "@/components/active-agents"
import { GlobalInfrastructure } from "@/components/global-infrastructure"
import { HostingerOpenClaw } from "@/components/hostinger-openclaw"
import { Footer } from "@/components/footer"

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
      <HostingerOpenClaw />

      <Footer />
    </main>
  )
}
