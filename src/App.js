import './App.css';
import ShoppingList from './Pages/ShoppingList';
import Header from "./Components/Header/Header"
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CreateItem from './Pages/CreateItem';
import ElectronicList from './Pages/ElectronicList';
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ShoppingList" element={<ShoppingList/>}/>
    <Route path="/ElectronicList" element={<ElectronicList/>}/>
    <Route path="/CreateItem" element={<CreateItem/>}/>
    
    </Routes>
    </>
  );
}

export default App;
