import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StackDiagram } from "@/components/stack-diagram"
import { TechStack } from "@/components/tech-stack"
import { Features } from "@/components/features"
import { CodePreview } from "@/components/code-preview"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Profile } from "@/components/profile"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <StackDiagram />
      <TechStack />
      <Features />
      <CodePreview />
      <Profile />
      <CTASection />
      <Footer />
    </main>
  )
}
