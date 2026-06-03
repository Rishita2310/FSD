import {Fname,Lname} from "./PC1";
import { useContext, useState } from "react";
function C2(){
    const fn=useContext(Fname);
    const ln=useContext(Lname);
    return (
        <>
            <h1>Welcome {fn} {ln}</h1>
        </>
    )
}
export default C2;