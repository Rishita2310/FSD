import C7 from "./C7";
import { createContext } from "react";

const St=createContext();
const Student="Student";
function C6(){
    return(
        <St.Provider value={Student}>
            <C7 />
        </St.Provider>
    )
}
export default C6;
export {St};