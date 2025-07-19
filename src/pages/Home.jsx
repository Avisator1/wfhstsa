import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div className='px-4'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home