function Product(props){
    return(
        <div>
            {
                props.info.map((p)=>{
                    return(
                        <div>
                            <img src={p.pic} width={200} height={200}></img>
                            <h1>{p.name}</h1>
                            <h1>{p.Price}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product