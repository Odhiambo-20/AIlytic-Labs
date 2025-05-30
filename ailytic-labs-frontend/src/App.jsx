// App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Robots from './pages/robots';
import Drones from './pages/drones';
import Company from './pages/company';
import Applications from './pages/applications';
import Contact from './pages/contact';
import SandboxLab from './pages/sandboxlab';  

export default function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robots" element={<Robots/>} />
        <Route path="/drones" element={<Drones />} />
        <Route path="/company" element={<Company />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sandboxlab" element={<SandboxLab />} />  
      </Routes>
    </Navbar>
  );
}