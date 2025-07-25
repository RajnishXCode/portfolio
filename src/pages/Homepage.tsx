import React from 'react'
import Hero from '../components/Homepage/Hero'
import About from '../components/Homepage/About'
import Services from '../components/Homepage/Services'
import Portfolio from '../components/Homepage/Portfolio'
import Pricing from '../components/Homepage/Pricing'
import Testimonials from '../components/Homepage/Testimonials'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div className="dark min-h-screen w-screen overflow-x-hidden ">
      <Hero />
      <About />
      {/* <Services /> */}
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Homepage