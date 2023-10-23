import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import FeaturesSection from './Components/FeaturesSection'
import PopularSection from './Components/PopularSection'
import TestimonialsSection from './Components/TestimonialsSection'
import NewsLetterSection from './Components/NewsLetterSection'
import FoooterSection from './Components/FoooterSection'

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <FeaturesSection />
        <PopularSection />
        <TestimonialsSection />
        <NewsLetterSection/>
        <FoooterSection/>
    </div>
  )
}

export default Home