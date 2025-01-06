import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/signin/Login';
import Register from './Components/signin/Register';
import Navbar from './Components/navbar/Navbar';
import Clubs from './Components/club/Clubs';
import Footer from './Components/footer/Footer';
import Food from './Components/Pages/Food';
<Route path="/food" element={<food />} />
function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* شريط التنقل سيظهر في كل صفحة */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* الصفحة الرئيسية */}
        <Route path="/login" element={<Login />} /> {/* صفحة تسجيل الدخول */}
        <Route path="/register" element={<Register />} /> {/* صفحة التسجيل */}
        <Route path="/clubs" element={<Clubs />} /> {/* صفحة الأندية */}
        <Route path="/food" element={<Food />} /> {/* صفحة الطعام */}
      </Routes>
      <Footer /> {/* الفوتر سيظهر في كل صفحة */}
    </BrowserRouter>
  );
}

export default App;