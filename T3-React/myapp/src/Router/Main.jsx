import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from "./Home.jsx"
import Product from "./Product.jsx"
import Nopage from "./Nopage"
import img1 from  "./img1.png"
import img2 from "./img2.png"
import img3 from "./img2.png"


function Main(){
    const product=[
      {
        name:"P1",
        Price:20000,
        pic:img1
      },
      {
        name:"P2",
        Price:30000,
        pic:img2
      },
      {
        name:"P3",
        Price:40000,
        pic:img3
      }
    ]
    return(
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Product" element={<Product info={product}/>}/>
            <Route path="*" element={<Nopage/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
  
export default Main