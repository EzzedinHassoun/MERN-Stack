import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Navigation from './components/Navigation'
import SubContents from './components/SubContent'
import Advertisement from './components/Advertisement'



function App() {
  const [count] = useState(0)

  return (
    <>
      <div className='App'>
      <Header/>
      <div className="main-layout">
        <Navigation />
        <Main>
          <SubContents/>
          <SubContents/>
          <SubContents/>
          <Advertisement />
        </Main>
      </div>
      </div>
    </>
  )
}

export default App
