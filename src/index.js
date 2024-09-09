import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './view/App/App';
import Contact from './view/Contact/contact';
import About from './view/About-us/about';
import Blog from './view/Blog/Blog';
import Cart from './view/cart/cart';
import Services from './view/services/Services';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Blog />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);
