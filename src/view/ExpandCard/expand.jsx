import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './expand.css'
function expand() {
  return (
    <>
    <Navbar/>
          <div className="expand-container">
             <div>
              <img  src={"https://www.freepngimg.com/thumb/categories/2970.png"}/>
             </div>
             <p>0.5kg</p>
             <div className="expand-details">
               <h2>Cabbage</h2>
               <span> price : ₹30</span>
                <select>
                    <option>  500 Gms</option>
                    <option> 1 kg</option>
                    <option> 2 kg</option>
                </select>
             </div>
          </div>
    <Footer/>
  </>
  )
}

export default expand