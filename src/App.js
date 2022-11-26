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
import Task from './Pages/Task';
import Counter from './Pages/Counter';
import Testas1 from './Pages/Testas1';
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
    <Route path="/Task" element={<Task/>}/>
    <Route path="/Counter" element={<Counter/>}/>
    <Route path="/Testas1" element={<Testas1/>}/>
    
    </Routes>
    </>
  );
}

export default App;
