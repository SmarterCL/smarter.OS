import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ActiveAgents } from "@/components/active-agents"
import { BoltStudio } from "@/components/bolt-studio"
import { SmarterOSBox } from "@/components/smarteros-box"
import { Pricing } from "@/components/pricing"
import { RecomendacionSteps } from "@/components/recomendacion-steps"
import { SmarterBolt } from "@/components/smarter-bolt"
import { Footer } from "@/components/footer"
import { TelcoArchitecture } from "@/components/telco-architecture"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ActiveAgents />
      <SmarterOSBox />
      <BoltStudio />
      <SmarterBolt />
      <TelcoArchitecture />
      <Pricing />
      <RecomendacionSteps />
      <Footer />
    </main>
  )
}
