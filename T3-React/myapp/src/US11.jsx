//write a react component for do to list
// 1. add one input field and a button by clicking on button display entered last on the same page.
// 2. also add delete button with each added to delete the task.

import { useState } from "react";

function US7()
{
    const[task,setTask]=useState("");
    const[todolist,setToDolist]=useState([]);
    function t()
    {
        setToDolist([...todolist,
            {id:Date.now(),
                name:task
            }
        ])
        setTask("");
    }
    function d(id)
    {
        setToDolist(todolist.filter((task)=>task.id!==id));
    }
    return (
        <div>
            Enter Your Task:<input type="text" name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <br></br>
            <button onClick={t}>Add</button>
            {
                todolist.map((task)=>(
                    <div key={task.id}>
                        <h3>{task.name}</h3>
                        <button onClick={()=>d(task.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default US7