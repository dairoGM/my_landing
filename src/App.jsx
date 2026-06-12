import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Cases from './components/Cases'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
