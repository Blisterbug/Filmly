import React from 'react'
import Hero from './Hero'
import MoreCard from '../cards/MoreCard'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import Grids from '../components/Grids'

const Home = () => {
  return (
    <div>
      <Hero />
      <Grids/>
      <MoreCard />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home