import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
<BrowserRouter>
{/* navbar */}
<Routes>
<Route path='/' index element={<main/>}/>
<Route path='/page1' element={<page1/>}/>
<Route/>
<Route/>
<Route/>
</Routes>
{/* footer */}
</BrowserRouter>
  );
}

export default App;
