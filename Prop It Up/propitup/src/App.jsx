import React from 'react'
import './App.css'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <>
    <PersonCard firstname = "Doe" lastname = "jane" age =  {45} Haircolor = "Black" />
    <PersonCard firstname = "Smith" lastname = "john" age =  {88} Haircolor = "Brown" />
    <PersonCard firstname = "Fillmore" lastname = "Millard" age =  {50} Haircolor = "Brown" />
    <PersonCard firstname = "Smith" lastname = "Maria" age =  {62} Haircolor = "Brown" />
    </>
  )
}

export default App