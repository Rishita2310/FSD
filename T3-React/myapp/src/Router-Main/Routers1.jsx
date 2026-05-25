// create a react app using functional components and react router dom.
// 1.Create routes for home shop contact and 404 not found
// 2.Implement navigation using link
// 3.Display each and every pg on resp route
import{BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Home from "./Home"
import Shop from "./Shop"
import Contact from "./Contact"
import Notfound from "./Notfound"
const mystyle={
    color:"pink",backgroundColor:"skyblue",margin:"5px",padding:"25px"
}
function Routers1(){
    return(
        <div>
            <Router>
                <div class="main-route" style={mystyle}>
                    <ul>
                        <li><Link to ="/">HOME</Link></li>
                        <li><Link to ="/shop">SHOP</Link></li>
                        <li><Link to ="/contact">Contact</Link></li>

                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Notfound/>}/>
                    

                </Routes>
            </Router>
        </div>
    )
}
export default Routers1