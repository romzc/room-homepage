import { useState } from 'react'
import { Detail } from '../Detail/Detail'
import { SlideCard } from '../SlideCard/SlideCard'
import { Navbar } from '../Navbar/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <Navbar />
      <SlideCard />
      <Detail />
    </main>
  )
}

export default App
