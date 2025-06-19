import React from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import Features from './components/Sections/Features'
import Benifits from './components/Sections/Benifits'
import Pricing from './components/Sections/Pricing'
import CTA from './components/Sections/CTA'
import Footer from './components/Layout/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Benifits />
      <Pricing />
      <CTA />
      <Footer/>
    </>
  )
}

export default App