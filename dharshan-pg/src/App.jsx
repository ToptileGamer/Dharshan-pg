import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyUs from './components/WhyUs'
import Amenities from './components/Amenities'
import Rooms from './components/Rooms'
import Location from './components/Location'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import MobileCta from './components/MobileCta'
import SEO from './components/SEO'

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = document.body.getBoundingClientRect().top
      const elTop = el.getBoundingClientRect().top - offset - 90
      window.scrollTo({ top: elTop, behavior: 'smooth' })
    }
  }

  return (
    <div className="pg-root">
      <SEO />
      <Nav scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <TrustBar />
        <WhyUs />
        <Amenities />
        <Rooms scrollTo={scrollTo} />
        <Location />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCta />
    </div>
  )
}
