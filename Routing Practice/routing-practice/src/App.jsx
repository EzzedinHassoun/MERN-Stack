import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import HomeComponent from './components/HomeComponent';
import MainComponent from './components/MainComponent';
import FourComponent from './components/FourComponent';
function App() {

  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/:num" element={<MainComponent />} />
        <Route path="/:word/:tcoler/:bgcoler" element={<FourComponent />} />
      </Routes>
    </>
  )
}

export default App
