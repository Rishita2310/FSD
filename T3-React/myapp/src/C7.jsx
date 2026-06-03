import { CSS } from "./PC3";
import {St} from "./C6";
import { use, useContext } from "react";

function C7(){
    const css=useContext(CSS);
    const st=useContext(St);
    return(
        <div>
            <h1 style={css}>{st}</h1>
        </div>
    )
}
export default C7;