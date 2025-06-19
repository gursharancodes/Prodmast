import React from 'react'
import Hero from '../components/Sections/Hero'
import Features from '../components/Sections/Features'
import Benifits from '../components/Sections/Benifits'
import Pricing from '../components/Sections/Pricing'
import CTA from '../components/Sections/CTA'

const Home = () => {
  return (
      <>
          <Hero />
          <Features />
          <Benifits />
          <Pricing />
          <CTA/>
      </>
  )
}

export default Home