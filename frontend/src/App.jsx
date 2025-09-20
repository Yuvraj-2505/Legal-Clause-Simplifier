import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './sections/Navbar'

import './App.css'
import Herosection from './sections/HeroSection'
import Features from './sections/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='w-full h-full'>
   <Navbar/>
   <Herosection/>
   <Features/>
   

   </div>
   </>
  )
}

export default App
