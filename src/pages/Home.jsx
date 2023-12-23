import React from 'react'
import Intro from '../features/home/Intro'
import Navbar from '../features/home/Navbar'

const Home = () => {
  return (
    <section className='h-screen'>
      <Navbar/>
      <Intro/>
    </section>
  )
}

export default Home