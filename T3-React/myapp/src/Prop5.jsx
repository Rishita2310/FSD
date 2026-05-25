// create a product card component to show product details like title price ratings and image
// Use a product list component to store product data and display multiple product card
// component using map method
import ProductCard from "./ProductCard.jsx"
import img1 from "./iphone.png"
import img2 from "./samsung.png"
function Prop5(){
    const Products=[{
        title:"iphone",
        Price:"89000",
        ratings:4.8,
        image:img1
    },
{
    title:"samsung",
    Price:"80000",
    ratings:4.5,
    image:img2
}]
return(
    <div>
        <h1>Our Products</h1>
        <ProductCard P={Products}/>
    </div>
)
}
export default Prop5