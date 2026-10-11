import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import LearningPath from './components/LearningPath'
import Events from './components/Events'
import Community from './components/Community'
import Team from './components/Team'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#44b4ff] focus:text-[#161d26] focus:font-bold focus:rounded-md"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <WhatWeDo />
        <LearningPath />
        <Events />
        <Community />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
