import React from 'react'
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './service.css'
import MainImg from './../../images/service/agri image.jpg'
function Services() {
  return (
    <div>   
      <Navbar/>
      <div className='service-main-container'>
        <div className='service-img-container'>
           <img className='service-img' src={MainImg} />
            <h2 className='service-heading'> Our Service</h2>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Services