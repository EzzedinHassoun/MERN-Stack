import { useState } from 'react'
import './App.css'
import HomeComponent from './components/HomeComponent'

function App() {
  const [count] = useState(0)

  return (
    <>
      <HomeComponent/>
    </>
  )
}

export default App
