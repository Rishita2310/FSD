// Create a React app with three components: parent component P.js and two
// child components C8.js, C9.js.
//  Use useContext hook to pass two colors from the Parent component P.js
// to the Child component C9.js. (Yellow color as font color and Blue color as
// background color)
// In Child component C8.js import child component C9.js .
// In C9.js display “Full stack Development” text in h1 heading with above
// mentioned background color and font color using context.

import { createContext } from "react";
import C8 from "./C8";

const Color=createContext();
const color={color:"yellow",
backgroundColor:"blue"
}
function PC4(){
    return(
        <Color.Provider value={color}>
            <C8 />
        </Color.Provider>
    )
}
export default PC4;
export {Color};