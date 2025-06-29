import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Technical from './pages/Technical'

function App() {

  return (
    <>
      <div className=' w-full bg-blue-300 text-black'>
        <Navbar />
        <Home />
        <About />
        <Technical />
        

      </div>
    </>
  )
}

export default App
