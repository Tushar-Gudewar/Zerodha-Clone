import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';  
import './index.css';

import NavBar from './landing/NavBar';
import Footer from './landing/Footer';

import HomePage from './landing/home/Home';
import Signup from './landing/signup/Signup'
import About from './landing/about/About';
import Product from './landing/product/Product';
import PricingPage from './landing/pricing/PricingPage';
import Support from './landing/support/Support';
import NotFound from './landing/FotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound/>} />

    </Routes>
    <Footer />
  </BrowserRouter>
);
