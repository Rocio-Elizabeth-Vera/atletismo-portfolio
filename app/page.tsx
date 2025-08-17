import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Statistics } from "@/components/statistics"
import { Gallery } from "@/components/gallery"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Statistics />
      <Gallery />
      <Blog />
      <Contact />
    </main>
  )
}
