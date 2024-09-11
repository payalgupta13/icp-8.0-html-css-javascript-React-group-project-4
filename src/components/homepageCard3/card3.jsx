import React from 'react';
import { Link } from 'react-router-dom';
import './card3.css';
function Card3card(Image) {
  return (
<div className='App-section-3'>
    <span>
        <h2>Fresh Food</h2>
        <p>Healthy Food</p>
        <h3>Get special discount on <br/>selected products</h3>
    </span>
    <img className='App-section-img' src={Image}/>
    <Link><div className='App-section-3-shop'>Know More</div></Link>

</div>
  );
}

export default Card3card;