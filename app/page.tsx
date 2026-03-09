import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BoltStudio } from "@/components/bolt-studio"
import { SmarterOSBox } from "@/components/smarteros-box"
import { Pricing } from "@/components/pricing"
import { RecomendacionSteps } from "@/components/recomendacion-steps"
import { SmarterBolt } from "@/components/smarter-bolt"
import { Footer } from "@/components/footer"
import { HardwareComparison } from "@/components/hardware-comparison"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <SmarterOSBox />
      <BoltStudio />
      <Pricing />
      <RecomendacionSteps />
      <HardwareComparison />
      <SmarterBolt />
      <Footer />
    </main>
  )
}
