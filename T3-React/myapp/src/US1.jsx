//WAP to build react app having a button which increase count by 1 while clicking it.

import {useState} from "react";
function US1(){
    const[count,setCount]=useState(0);

    function handlecount()
    {
        setCount(count+1)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handlecount}>Click here</button>
        </div>
    )
}

export default US1