import React from 'react'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Testimonials from '../components/Testimonials/Testimonials'
import Price from '../components/Price/Price'
import Footer from '../components/Footer/Footer'

function Homepage() {
  return (
    <section id="Homepage">
        <Hero />
        <Features />
        <Testimonials />
        <Price />
        <Footer />
    </section>
  )
}

export default Homepage