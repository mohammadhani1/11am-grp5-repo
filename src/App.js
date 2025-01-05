import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from  '../src/Components/Pages/Home';
import Login from './Components/signin/Login';
import Register from './Components/signin/Register';
import Navbar from './Components/navbar/Navbar';
import Content from './Components/club/Content';
import Footer from './Components/footer/Footer';
import Food from './Components/Pages/Food';

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
