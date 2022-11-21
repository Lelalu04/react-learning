import './App.css';
import ShoppingList from './Pages/ShoppingList';
import Header from "./Components/Header/Header"
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ShoppingList" element={<ShoppingList/>}/>
    {/* <Route path="/*" element={<h1>404</h1>}/> */}
    </Routes>
    </>
  );
}

export default App;
