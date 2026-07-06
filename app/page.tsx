import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'

export default function Page() {
  return (
    <main id="main" className="relative min-h-screen">
      <SiteHeader />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <SiteFooter />
      <WhatsappFab />
    </main>
  )
}
