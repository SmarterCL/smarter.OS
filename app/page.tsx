import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhySmarterOS } from "@/components/why-smarteros"
import { BoltStudio } from "@/components/bolt-studio"
import { SmarterOSBox } from "@/components/smarteros-box"
import { LayersSection } from "@/components/layers-section"
import { Pricing } from "@/components/pricing"
import { RecomendacionSteps } from "@/components/recomendacion-steps"
import { SmarterBolt } from "@/components/smarter-bolt"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhySmarterOS />
      <SmarterOSBox />
      <BoltStudio />
      <LayersSection />
      <Pricing />
      <RecomendacionSteps />
      <SmarterBolt />
      <Footer />
    </main>
  )
}
