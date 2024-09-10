import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './App.css'
import cow from '../../images/nav/cow.png'
import earth from '../../images/nav/earth.png'
import vegetable from '../../images/nav/vegetable.png'
import wheat from '../../images/nav/wheat.png'
import farmer from '../../images/nav/farmer.png'
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
      </div>

      {/* card number  1 */}

      <div className="App-section-1">
        <div className="App-section-1-div1"><span className="App-section-1-div1-span" >Agrimart Farm Fresh Products</span></div>
        <div className="App-section-1-div2">
          <div className="App-section-1-div2-box"><b >
            Fresh agri products bring the goodness of nature straight to your table, ensuring quality, nutrition, and flavor in every bite</b><br />
            <p>Our website connects you directly with local farmers, offering a range of farm-fresh organic products delivered straight to your door. We ensure quality, sustainability,
              and fair pricing..</p>
          </div>
          <div className="App-section-1-images-container">
            <span>
              <img className="App-section-1-images" src={earth} />
              <p>farm <br />fresh</p>
            </span>
            <span>
              <img className="App-section-1-images"  src={cow}  />
              <p>farm<br /> fresh</p>
            </span>
            <span>
              <img className="App-section-1-images" src={vegetable}  />
              <p>farm <br />fresh</p>
            </span>
            <span>
              <img className="App-section-1-images"  src={farmer} />
              <p>farm <br />fresh</p>
            </span>
            <span>
              <img className="App-section-1-images"  src={wheat}  />
              <p>farm <br />fresh</p>
            </span>

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}
export default App