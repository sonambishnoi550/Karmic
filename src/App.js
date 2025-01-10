import React from 'react'
import Projects from './components/Projects'
import Karmic from './components/Karmic'
import Services from './components/Services'
import Upcoming from './components/UpComing'
import Hero from './components/Hero'
import Header from './components/Header'
import Values from './components/Values'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Upcoming/>
      <Services />
      <Projects />
      <Karmic />
      <Values />
<Footer/>

    </>
  )
}

export default App