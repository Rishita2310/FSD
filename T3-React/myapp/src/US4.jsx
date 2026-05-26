//WAP to build react app 
//add 3 button
//1.change text
//2.change color
//3.hide or show
//1.add heading LJU in red color also add react js hooks in h2 tag by clicking on change text
//button text should be changed welcome students and vice versa
//2.while clicking on change color button change coloor of text to blue and vice versa
//This color change should be performed while double clicking button
//3.initially button text should be hide while button text should be changed to show and text react js hooks

import { useState } from "react"

function US4()
{
    const[name,setname]=useState("LJU")
    const[text,settext]=useState("React js Hooks")
    const[c,setc]=useState("red")
    // const[hs,seths]=useState(false)
    const[hs,seths]=useState("hide")
    function changecolor()
    {
        if(c==="red"){
            setc("blue")
        }
        else{
            setc("red")
        }
    }
    function changetext()
    {
        if(name=="LJU"){
            setname("Welcome students")
        }
        else{
            setname("LJU")
        }
    }
    // function hideshow()
    // {
    //     if(hs){
    //         seths(false)
    //     }
    //     else{
    //         seths(true)
    //     }
    // }
    function hideshow()
    {
        if(hs=="hide"){
            seths("show")
            settext("")
        }
        else{
            seths("hide")
            settext("React js hooks")
        }
    }
    return(
        <div>
            <h1 style={{color:c}} >{name}</h1>
            {/* {!hs && <h2>{text}</h2>} */}
            <h2>{text}</h2>
            <button onDoubleClick={changecolor}>Change color</button>
            <button onClick={changetext}>Change Text</button>
            <button onClick={hideshow}>{hs}</button>
        </div>
    )
}
export default US4