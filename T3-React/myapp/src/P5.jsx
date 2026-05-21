// create a to pass an object from one component to another component
//1. create a parent P5.jsx 
//2. create an object named details contains student name and uni name.
//3. pass the details object to child component P6.jsx using props
//4. in child display student and uni name.

import P6 from "./P6"
function P5(){
    const details={
        sname:"Isha",
        uname:"LJKU"
    }
    return(
        <div>
            <P6 sname={details.sname} uname={details.uname}></P6>
            {/* <P6 data={details}></P6> */}
        </div>
    )
}
export default P5