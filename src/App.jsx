import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Auth/Login';
import Error404 from './components/Error404';
import ScrollToTop from './components/ScrollToTop';
import Register from './Auth/Register';
import Header from './shared/Header/Header';
import Footer from './shared/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Blog1 from './pages/Blogs/Blog1';
import Blog2 from './pages/Blogs/Blog2';
import Feature from './pages/Features/Feature';
import Drawer from './components/Drawer';
import Reviews from './Reviews/Reviews';
import Rev from './pages/Review/index';
import Institutes from './pages/Institutes/Institutes';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {



const ScrollToTop =() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


  return (
    <Router>
      <Header />
      
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/drawer" element={<Drawer />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/rev/:instituteName" element={<Rev />} />
        <Route path="/rev" element={<Rev />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/institutes" element={<Institutes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
