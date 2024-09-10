import React from 'react'
import "./vegcard.css"

function Vegcard({title,img,prise}) {
  
  return (
    <div className='veg-continer'>
      <img src={img} className='veg-img'/>
      <h3>{title}</h3>
      <b> Price:{prise}</b> 
      <div className='btn-continer'>
      <button className='card-btn'> More</button>
      </div>
    </div>
  )
}

export default Vegcard