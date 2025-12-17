import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomeComponent from './components/HomeComponent'
import ProductList from './components/ProductList'
import DsplayProduct from './components/DisplayProduct';


function App() {

    return (
        <>
            <Routes>
                <Route element={<><HomeComponent /> <ProductList/></>} path="/" />
                <Route element={<DsplayProduct />} path="/product/:id"/>
            </Routes>
        
        </>
    )
}

export default App
