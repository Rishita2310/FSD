//WAP to change button text while clicking on modify this button text should change to updated text

import { useState } from "react"

function US3()
{
    const[text,settext]=useState("")
    function handletext()
    {
        // document.getElementById("t").innerText="Updated text"
        if(text=="Modify this")
        {
            settext("Updated text")
        }
        else
        {
            settext("Modify this")
        }
    }
    return(
        <div>
            <button onClick={handletext}>{text}</button>
        </div>
    )
}

export default US3