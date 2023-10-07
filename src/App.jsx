import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import All_Products from "./pages/All_Products";
import About from "./pages/About";
import Contact_us from "./pages/Contact_us";
import Cart from "./pages/Cart";
import Cookies from 'js-cookie';
import Login from "./pages/Login";

const App = () => {



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<All_Products />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact_us />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
