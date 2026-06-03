import { Color } from "./PC4";
import { useContext } from "react";
function C9(){ 
    const color=useContext(Color);
    return(
        <div >
            <h1 style={color}>Full stack Development</h1>
        </div>
    )
}
export default C9;