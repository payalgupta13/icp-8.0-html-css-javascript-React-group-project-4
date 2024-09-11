import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import "./about.css"

function About() {
  return (
    <>
      <Navbar/>
      <div className="about-container">
  <div className="about-hero">
    <h1 className="about-title">Welcome to AgriMart</h1>
    <p className="about-subtitle">Bringing Fresh, Organic Food Straight to Your Table</p>
    <img src="https://img.freepik.com/premium-photo/person-planting-beautiful-field-crops_1054941-40467.jpg?w=740" alt="Organic Farm" className="hero-image" />
  </div>
  <div className="about-card-container">
    <div className="about-content">
      <h2>Our Mission</h2>
      <p className="about-description">
        At PureHarvest, we believe in the power of organic food to nourish the body and the earth. Our mission is
        to provide families with the freshest, highest-quality organic produce grown with love and care.
      </p>
      <p className="about-description">
        We ensure that every step of the farming process is free from harmful chemicals, pesticides, and artificial
        additives, so you can enjoy food that’s as natural as it gets. From farm to table, our goal is to bring you
        produce that’s fresh, nutritious, and sustainably grown.
      </p>
    </div>

    <div className="about-values">
      <h2>Why Organic Matters</h2>
      <p className="about-description">
        Choosing organic means choosing health. Our organic farming practices not only help protect the environment,
        but they also ensure that the food you eat is clean, safe, and nutrient-rich. We are committed to delivering
        produce that supports a healthier lifestyle, while also preserving the health of our planet.
      </p>
    </div>
  </div>
  <ul className="values-list">
    <li className="values-item">100% Pesticide-Free</li>
    <li className="values-item">Sustainable Farming</li>
    <li className="values-item">Non-GMO Products</li>
    <li className="values-item">Farm-Fresh to You</li>
  </ul>
</div>
      <Footer/>
    </>
  )
}

export default About