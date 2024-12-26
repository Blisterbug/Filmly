import React from 'react'
import Hero from './Hero'
import MoreCard from '../cards/MoreCard'
import MobileMoreCard from '../cards/MobileMoreCard'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import Grids from '../components/Grids'

const Home = () => {
  return (
    <div>
      <Hero />
      <Grids/>
      <div className='hidden sm:block'>
        <MoreCard />
      </div>
      <div className='block sm:hidden'>
      <h1 className='text-3xl font-semibold p-4 pl-8 pt-10 bg-black text-white '>More reasons to join</h1>
        <MobileMoreCard />
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home