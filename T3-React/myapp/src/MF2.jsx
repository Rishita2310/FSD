//create a react component that contains an array of 10 numbers multiply this number 
// by 5 and display updated values

function MF2()
{
    const arr=[1,2,3,4,5,6,7,8,9,10]
    return(
        <div>
            <h1>Numbers</h1>
            {
                arr.map((a,index)=>(
                    <div key={index}>
                    <h2>{a*5}</h2></div>
                    ))
            }
        </div>
    )
}

export default MF2