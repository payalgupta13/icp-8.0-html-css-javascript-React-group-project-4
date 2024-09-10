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
             <div>
               <h2>Cabbage</h2>
               <span> price : ₹30</span>

             </div>
          </div>
    <Footer/>
  </>
  )
}

export default expand