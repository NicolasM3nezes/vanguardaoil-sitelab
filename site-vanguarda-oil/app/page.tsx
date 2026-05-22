import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Reviews } from '@/components/reviews'
import { Features } from '@/components/features'
import { Location } from '@/components/location'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Features />
      <Location />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
