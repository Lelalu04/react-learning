import './App.css';
import ShoppingList from './Pages/ShoppingList';
import Header from "./Components/Header/Header"
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CreateItem from './Pages/CreateItem';
import ElectronicList from './Pages/ElectronicList';
import Cars from './Pages/Cars';
import Cities from './Pages/Cities'
import CreateCar from './Pages/CreateCar';
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ShoppingList" element={<ShoppingList/>}/>
    <Route path="/ElectronicList" element={<ElectronicList/>}/>
    <Route path="/CreateItem" element={<CreateItem/>}/>
    <Route path="/Cars" element={<Cars/>}/>
    <Route path="/Cities" element={<Cities/>}/>
    <Route path="/CreateCar" element={<CreateCar/>}/>
    
    </Routes>
    </>
  );
}

export default App;
