// Create React app to pass student name, roll number, t1 marks and t2 marks  of 2 students to 
// component and read the information and display in table format. Use Props.

import Detail from "./Pb303-1"
function Pb303()
{
    const student=
        {
            name:"Isha",
            roll:7,
            T1:22,
            T2:23       
        }
    const s1={
        name:"Rishita",
            roll:20,
            T1:23,
            T2:24   
    }
    return(
        <div>
            <Detail data={student}></Detail>
            <Detail data={s1}></Detail>
        </div>
    )
}

export default Pb303