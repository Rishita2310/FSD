function ProductCard(props){
    return(
            props.P.map((Product,index)=>
                (
                    <div>
                        <img src={Product.image} alt={Product.title}/>
                        <br/>
                        <p>Product Title:{Product.title}</p>
                        <p>Product Price:{Product.Price}</p>
                        <p>Product Ratings:{Product.ratings}</p>
                    </div>
                )
            )
    )

}
export default ProductCard