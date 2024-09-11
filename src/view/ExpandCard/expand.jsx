import { useState } from "react"
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './expand.css'
function expand() {

  const [price , setprice]=useState()
  const [selectprice , setSelectprice] =useState()
  const [kgprice , setkgprice] =useState()
  return (
    <>
    <Navbar/>
          <div className="expand-container">
             <div>
              <img  src={"https://www.freepngimg.com/thumb/categories/2970.png"}/>
             </div>
             
             <div className="expand-details">
               <h2>Cabbage</h2>
               <p onChange={(e)=>setSelectprice(selectprice)}>{selectprice}</p>
               <span> price : ₹30</span>
                <select  value={selectprice} >
                    <option> 500 Gms</option>
                    <option> 1 kg</option>
                    <option> 2 kg</option>
                </select>

                <div className="expand-quantity-counter">
                       1
                </div>
             </div>
          </div>
    <Footer/>
  </>
  )
}

export default expand