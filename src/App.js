import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from  '../src/Components/Pages/Home';
import ReactDOM from "react-dom";
import Login from './Components/signin/Login';
import Register from './Components/signin/Register';
import Navbar from './Components/navbar/Navbar';
import Content from './Components/club/Content';
import Footer from './Components/footer/Footer'
function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' index element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/clubs' element={<Content/>}/>
<Route/>
</Routes>
<Footer/>
</BrowserRouter>
  );
}

export default App;
