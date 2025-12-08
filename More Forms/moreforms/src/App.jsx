import { useState } from 'react'
import FormCompnent from './components/FormComponent'
import './App.css'

function App() {
  const [count] = useState(0)

  return (
    <>
  <FormCompnent/>
    </>
  )
}

export default App
