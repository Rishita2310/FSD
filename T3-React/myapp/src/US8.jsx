//MULTIPLE FORM INPUT FIELD USING A SINGLE STATE object and display a value in real time

import { useState } from "react"

function US7()
{
    const[data,setData]=useState({});
    function handleChange(e){
        const{name,value}=e.target;
        setData({...data,[name]:value});
    }
    return(
        <div>
            <div>
                <input type="text" name="firstname" onChange={handleChange}/><br></br>
                <input type="text" name="lastname" onChange={handleChange}/>
            </div>
            <h1>{data.firstname}</h1>
            <h1>{data.lastname}</h1>
        </div>
    )
}

export default US7