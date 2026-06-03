//write a react js program to perform the following task
// create 1 main file named PC.jsx and other 2 component files C1.jsx and C2.jsx 
// pass fname and lname from PC.jsx to C2.jsx file and display welcome fname lname in browser

import { createContext } from "react";

import C1 from "./C1";
const Fname=createContext();
const Lname=createContext();

function PC(){
    return (
        <>
            <Fname.Provider value="A">
                <Lname.Provider value="I💗">
                    <C1 />
                </Lname.Provider>
            </Fname.Provider>
        </>
    )
}
export default PC;
export {Fname,Lname};