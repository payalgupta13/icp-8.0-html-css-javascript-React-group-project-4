import { useState } from "react"
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './expand.css'
import minus  from './../../images/expand/minus-icon.png'
import plus from './../../images/expand/plus icon.png'
function expand() {


  const [selectprice , setSelectprice] =useState()
 
  const [quality , setquality]=useState(1)
  return (
    <>
    <Navbar/>
          <div className="expand-container">
             <div>
              <img className="expand-main-img" src={"https://www.pngmart.com/files/15/Salad-Bell-Pepper-Red-Transparent-PNG.png"}/>
             </div>
             
             <div className="expand-details">
               <h2>Cabbage</h2>
               <p >0.5 Gms</p>
               <p onChange={(e)=>setSelectprice(selectprice)}>{selectprice}</p>
               <span> price : ₹30</span>
                Unit
                <select  value={selectprice} className="expand-select" onChange={(e)=>setSelectprice(selectprice)}>
                    <option> 500 Gms</option>
                    <option> 1 kg</option>
                    <option> 2 kg</option>
                </select>
                Quantity
                <div className="expand-quantity-counter">
                  <div className="img-icon" onClick={()=>setquality(quality > 1 ?  quality-1 : quality)}>
                        <img src={minus}/>
                  </div>
                  <div className="expand-quantity"> {quality}</div>
                  <div className="img-icon" onClick={()=>setquality(quality+1)}>
                        <img src={plus}/>
                  </div>
                </div>

                <div>
                   <button type="button" className="">Add To Cart</button>
                   <button type="button">Buy It Now</button>
                </div>
             </div>

          
          </div>
    <Footer/>
  </>
  )
}

export default expand