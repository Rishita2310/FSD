import {Num1,Num2} from "./PC2";
import { useContext } from "react";

function C5(){
    const n1=useContext(Num1);
    const n2=useContext(Num2);
    return (
        <>
            <h1>Multiplication of {n1} and {n2} is {n1*n2}</h1>
        </>
    )
}

export default C5