import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhySmarterOS } from "@/components/why-smarteros"
import { StackDiagram } from "@/components/stack-diagram"
import { LayersSection } from "@/components/layers-section"
import { Pricing } from "@/components/pricing"
import { RecomendacionSteps } from "@/components/recomendacion-steps"
import { TargetAudience } from "@/components/target-audience"
import { SercotecChat } from "@/components/sercotec-chat"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhySmarterOS />
      <StackDiagram />
      <LayersSection />
      <Pricing />
      <RecomendacionSteps />
      <TargetAudience />
      <SercotecChat />
      <Footer />
    </main>
  )
}
