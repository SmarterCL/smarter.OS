import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhySmarterOS } from "@/components/why-smarteros"
import { EliaStudio } from "@/components/elia-studio"
import { SmarterOSBox } from "@/components/smarteros-box"
import { TiendaNodos } from "@/components/tienda-nodos"
import { LayersSection } from "@/components/layers-section"
import { Pricing } from "@/components/pricing"
import { RecomendacionSteps } from "@/components/recomendacion-steps"
import { TargetAudience } from "@/components/target-audience"
import { EliaAsistente } from "@/components/elia-asistente"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhySmarterOS />
      <SmarterOSBox />
      <EliaStudio />
      <TiendaNodos />
      <LayersSection />
      <Pricing />
      <RecomendacionSteps />
      <TargetAudience />
      <EliaAsistente />
      <Footer />
    </main>
  )
}
