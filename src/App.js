import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from  './components/Pages/Home';
import Login from './components/signin/Login';
import Register from './components/signin/Register';
import Navbar from './components/navbar/Navbar';
import Content from './components/club/Content';
import Footer from './components/footer/Footer';
import Food from './components/Pages/Food';

function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' index element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/clubs' element={<Content/>}/>
<Route path='/Nutrition' element={<Food/>}/>
<Route/>
</Routes>
<Footer/>

</BrowserRouter>
  );
}

export default App;
