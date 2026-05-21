//display student details
//1. cretae a parent component P3.jsx 
//2.pass the following P4.jsx using props your name,roll no, marks
//3.in child component display your details and increase marks by 1 and display updated marks.

import P4 from "./P4"
function P3(){
    return(
        <div>
            <P4 name="Isha" Roll_no="7"  marks="23"></P4>
            {/* <P4 name="Isha" Roll_no="7"  marks={23}></P4> */}
        </div>
    )
}
export default P3