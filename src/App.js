import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from  '../src/Components/Pages/Home';
import ReactDOM from "react-dom";
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
<BrowserRouter>
{/* navbar */}
  <Home/>
<Navbar/>
{/* footer */}
</BrowserRouter>
  );
}

export default App;
