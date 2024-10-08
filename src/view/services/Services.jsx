import React from 'react'
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav";
import './service.css'
import TopBar from './../../components/TopBar/TopBar';
import {ReactDom} from 'react-dom';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'


function Services() {
  return (
    <div>
      <Navbar />


      <div className="services-page">
        <TopBar />


        <div className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Essentials</h3>
              <p>We provide essential farming tools and services for crop cultivation.</p>
            </div>
            <div className="service-card">
              <h3>Vegetables</h3>
              <p>Specialized support for vegetable farming to maximize yield.</p>
            </div>
            <div className="service-card">
              <h3>Fruits</h3>
              <p>Fruit farming consultancy and assistance for better harvests.</p>
            </div>
            <div className="service-card">
              <h3>Exotics</h3>
              <p>We offer unique services for exotic plant cultivation.</p>
            </div>
            <div className="service-card">
              <h3>Dairy</h3>
              <p>Dairy farming solutions for milk production and animal care.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services
