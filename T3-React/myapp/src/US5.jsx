//WAP to build a react app having a button which changes an image by clicking on it

import { useState } from "react"
import img from "./flower.png"
import img2 from "./hero.png"
function US5()
{
    const[i,setimage]=useState(img);
    function seti()
    {
        if(i==img)
        {
            setimage(img2)
        }
        else
        {
            setimage(img)
        }
    }
    return(
        <div>
            <img src={i}></img>
            <button onClick={seti}>Click</button>
        </div>
    )
}
export default US5