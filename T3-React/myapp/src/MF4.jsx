// an array of fruit object with item Id, name,price and availability (map and filter)
// 1. display only available fruits
// 2. increase their price by 10
// 3.display fruit name and updated price

function MF4()
{
    const fruits=[
        {
            id:1,
            name:"Mango",
            price:100,
            available:true
        },
        {
            id:2,
            name:"Kiwi",
            price:200,
            available:false
        },
        {
            id:3,
            name:"Watermolen",
            price:50,
            available:true
        },
        
    ]
    return(
        <div>
            <h1>Available Fruits with updated price</h1>
            {
                fruits
                .filter((f)=>f.available)
                .map((f)=>(
                    <div key={f.id}>
                        <h3>{f.name}</h3>
                        <h3>{f.price +10}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default MF4