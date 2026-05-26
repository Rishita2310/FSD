
import { useState } from "react"
import img from "./flower.png"
import img1 from "./flower1.jpg"
import img2 from "./flower2.png"
import img3 from "./flower3.jpg"
import img4 from "./flower4.png"
import img5 from "./flower5.JPG"

function US6()
{
    const arr=[img,img1,img2,img3,img4,img5]
    const[i,setimage]=useState(arr[0]);
    function seti()
    {
        const ri=Math.floor(Math.random()*arr.length)
        setimage(arr[ri])
    }
    return(
        <div>
            <img src={i}></img>
            <button onClick={seti}>Click</button>
        </div>
    )
}
export default US6