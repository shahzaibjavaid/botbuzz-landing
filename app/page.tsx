'use client'
import { useState } from 'react'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Features from '@/sections/Features'
import Pricing from '@/sections/Pricing'
import FAQ from '@/sections/FAQ'
import CTA from '@/sections/CTA'
import Footer from '@/sections/Footer'

import { LoadingScreen } from '@/components/LoadingScreen'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{' '}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        <Header />
        <Hero />
        <About />
        <Pricing />
        <Features />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </>
  )
}
