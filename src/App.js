
import './App.css';
import Heartbtn from './components/Heartbtn';
import Navbar from  './components/Navbar';
import Home from  './Pages/Home';
import ReactDOM from "react-dom";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Footer from './Components/Footer';
import Nutrition from './Components/Nutrition';


function App() {
  return (
    <>
    < Navbar/>
    <Routes> 
      <Route  path="/" element={<Home/>}/>
    </Routes>
    <Home />
    <Heartbtn/>
    <Footer/>
    <Nutrition/>
    </>
  );
}
export default App;
