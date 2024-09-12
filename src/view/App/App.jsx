import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import Card3 from "../../components/homepageCard3/card3"
import './App.css'
import card3card from "./../../config/card3"
import { Link } from "react-router-dom"
import FruitsCard from "../../components/card4components/card4"
import Section1 from "../../components/homepageCard3/card1"
function App() {





  return (
    <>

      <Navbar />
      <div className="App">
<span>Agrimart</span>
       
      </div>

      {/* card number  1 */}

     <Section1/>

      <div className="why-choose-us-content">
        <img src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon left" />

        <div className="why-choose-us-text">
          <h1 className='why-choose-us-heading'>Why Choose Us ?</h1>
          <p>By building a culture of sustainability and wholesome living, we strive for a healthier you and a healthier planet.</p>
        </div>

        <img src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon right" />

      </div>


      <Link to="/about"><button className="knowmore-button"  > know more</button></Link>


      <FruitsCard />
      <br />
      <div className="App-section-3-container">
        {/* card number 3 */}
        {card3card.map((item, index) => (
          <Card3
            key={index}
            image={item.image}
            description={item.description}

          />
        ))}

      </div>


      <Footer />
    </>

  )
}
export default App