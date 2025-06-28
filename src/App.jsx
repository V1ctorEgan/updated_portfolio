import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <div className=' w-full bg-blue-300 text-black'>
        <Navbar />
        <Home />
        <div>
          <About />
        </div>
      </div>
    </>
  )
}

export default App
