// an array of 10 number display only even numbers using filter map
function MF3()
{
    const arr=[1,2,3,4,5,6,7,8,9,10]
    return(
        <div>
            <h1>Even number</h1>
            {
                arr.
                filter((a,index)=>a%2==0)
                    // <div key={index}>
                    //     <h2>{(a%2)==0}</h2>
                    // </div>
                    
            }
        </div>
    )
}
export default MF3