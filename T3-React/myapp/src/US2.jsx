//WAP to build react app having buttons to increment and decrement the num by clicking respexctive button
//also inc of the num should be perform only if num<10 and dec should be perform if num>0

import { useState } from "react"

function US2()
{
    const[count,setCount]=useState(0);
    function dec()
    {
        if(count>0){
            setCount(count-1)
        }
    }
    function inc(){
        if(count<10){
            setCount(count+1);
        }
    }
    return (
        <div>
            <p>Current value is {count}</p>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )

}

export default US2