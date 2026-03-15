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
import { GlobalInfrastructure } from "@/components/global-infrastructure"
import { InvestmentProposal } from "@/components/investment-proposal"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <GlobalInfrastructure />
      <InvestmentProposal />
      <ActiveAgents />
      <SmarterOSBox />
      <BoltStudio />
      <SmarterBolt />
      <Pricing />
      <RecomendacionSteps />
      <Footer />
    </main>
  )
}
