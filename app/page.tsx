import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HostingerOpenClaw } from "@/components/hostinger-openclaw"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HostingerOpenClaw />
      <Footer />
    </main>
  )
}
