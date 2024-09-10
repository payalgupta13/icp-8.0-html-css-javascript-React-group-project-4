import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './view/App/App';
import Contact from './view/Contact/contact';
import Expand from './view/ExpandCard/expand';
import About from './view/About-us/about';
import Cart from './view/cart/cart';
import Services from './view/services/Services';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/expand" element={<Expand />} />
    </Routes>
  </BrowserRouter>
);
