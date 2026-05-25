// create a react app to perform z following task main.jsx to setup the router and define the routes.
// home.jsx for the home page.
// product.jsx for the product page
// create a react router include 2 routes home and product implement navigation between this routes
// create the following routes and components when a user clicks on a home page
// link it should naigate to the home page and display welcome to our shop within a h1 tag with blue color
// also include link to product page.
// A product page that displays 3 product information name,price and image using props.
// when the user clicks on the product page name it should navigate to the product page and display products information using props.


import Product from "./Product"
function Home(){
    return(
        <div>
            <h1 style={{color:'blue'}}> Welcome to our shop</h1>
            <a href="/product">Product</a>
        </div>
    )
}

export default Home