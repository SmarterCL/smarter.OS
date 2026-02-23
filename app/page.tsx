import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
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
      <Pricing />
      <RecomendacionSteps />
      <TargetAudience />
      <SercotecChat />
      <Footer />
    </main>
  )
}
