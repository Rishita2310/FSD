// use multiple context in react app
//by creating and consuming them 
//PC3-> create a context for css styling and provides it to C6
// C6-> create a context for a string value ("Student") and provides it to C7
// C7-> consume both the contexts and display the string value in h1 tag and apply the css styling to it

import { createContext } from "react";
import C6 from "./C6";

const CSS=createContext();
const css={
        color:"blue",
        fontSize:"30px",
        fontWeight:"bold"
    }

function PC3(){
    return(
        <CSS.Provider value={css}>
            <C6 />
        </CSS.Provider>
    )
}
export default PC3;
export {CSS};