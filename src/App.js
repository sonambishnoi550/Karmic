import React from 'react'
import Projects from './components/Projects'
import Karmic from './components/Karmic'
import Services from './components/Services'
import Upcoming from './components/UpComing'

const App = () => {
  return (
    <>
      <Upcoming/>
      <Services />
      <Projects />
      <Karmic />

    </>
  )
}

export default App