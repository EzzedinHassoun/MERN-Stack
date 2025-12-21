import './App.css'
import ProductIDCompnenet from './components/ProductIDComponent'
import ProductComponent from './components/ProductComponent'
import ProductUpdateCompnent from './components/ProductUpdateCompnent';
import Main from './components/Main';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
  <Main/>
    <Routes>
    <Route element={<ProductComponent/>} path='/product/'/>
    <Route element={<ProductIDCompnenet/>} path="/product/:id" />
    <Route element={<ProductUpdateCompnent/>} path="/product/:id/edit"/>
    </Routes>
    </>
  )
}

export default App
