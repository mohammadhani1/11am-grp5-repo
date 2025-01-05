
import './App.css';
import Home from  '../src/Components/Pages/Home';
import ReactDOM from "react-dom";
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes> 
      <Route  path="/" element={<Home/>}/>
    </Routes>
    </>
  );
}
export default App;
