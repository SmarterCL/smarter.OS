import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InteractiveStack } from "@/components/interactive-stack"
import { CodePreview } from "@/components/code-preview"
import { Footer } from "@/components/footer"
import { Profile } from "@/components/profile"
import { SercotecChat } from "@/components/sercotec-chat"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <InteractiveStack />
      <CodePreview />
      <Profile />
      <SercotecChat />
      <Footer />
    </main>
  )
}
