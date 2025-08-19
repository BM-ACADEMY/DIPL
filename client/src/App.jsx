// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Layout/Header"; // adjust the path as needed
import Homemainsection from "./Pages/main/Homesection"; // adjust the path as needed
import Footer from "./Pages/Layout/Footer";
import Services from "./Pages/main/Services";
import { Contact } from "lucide-react";
import Careermain from "./Pages/main/careermain";
import ServiceSection from "./Pages/main/Services";




const App = () => {
  return (
    <Router>
      <Header />

        <Routes>
          <Route path="/" element={<Homemainsection/>} />
          <Route path="/services" element={<ServiceSection/>} />
          <Route path="/career" element={<Careermain/>} />
          <Route path="/contact" element={<Contact/>} />
          
        </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
