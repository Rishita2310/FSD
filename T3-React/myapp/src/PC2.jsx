//write a reactjs program to perform the task as asked below:
//cretae one main file PC2.jsx and 3 componet 
// C3.jsx , C4.jsx, C5.jsx
//pass num1 and num2 from PC2.jsx to C5.jsx . calculate multiplication using useContext

import { createContext } from "react";
import C3 from "./C3";

const Num1=createContext();
const Num2=createContext();

function PC2()
{
    return(
        <div>
            <Num1.Provider value={23}>
                <Num2.Provider value={21}>
                    <C3/>
                </Num2.Provider>
            </Num1.Provider>
        </div>
    )
}
export default PC2;
export {Num1,Num2};