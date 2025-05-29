import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Robots from './pages/Robots';
import Drones from './pages/Drones';
import Company from './pages/Company';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import sandboxlab from './pages/sandboxlab';


export default function App() {
  return<BrowserRouter>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robots" element={<Robots/>} />
        <Route path="/drones" element={<Drones />} />
        <Route path="/company" element={<Company />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sandboxlab" element={<sandboxlab />} />
        {/* Add more routes as needed */}
      </Routes>
  
  </BrowserRouter>
  
}

export default App;