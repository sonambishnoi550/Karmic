import React from 'react'
import Projects from './components/Projects'
import Karmic from './components/Karmic'
import Services from './components/Services'
import Upcoming from './components/UpComing'
import Hero from './components/Hero'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Upcoming/>
      <Services />
      <Projects />
      <Karmic />

    </>
  )
}

export default App