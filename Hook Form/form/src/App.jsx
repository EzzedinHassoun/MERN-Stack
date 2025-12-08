import { useState } from 'react'
import './App.css'
import FormComponent from './components/FormComponent'

function App() {
  const [count] = useState(0)

  return (
    <>
    <FormComponent/>
    </>
  )
}

export default App
