//create a react component that contains an array of student objects with id,name and standard.
//perform the following task using map and filter
// 1. display only those students whose std is 5
// 2. increase their std by 1
// 3. display student name and updated std. 

function MF1()
{
    const students=[
        {
            id:1,
            name:"Ram",
            std:4
        },
        {
            id:2,
            name:"Shyam",
            std:6
        },
        {
            id:3,
            name:"Arjun",
            std:5
        },
    ]
    return (
        <div>
            <h1>Student Details</h1>
            {
                students.filter((student)=>student.std==5)
                .map((student)=>(
                    <div key={student.id}>
                        <h2>Student name:{student.name.toUpperCase()}</h2>
                        <h2>Updated Standard:{student.std +1}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default MF1