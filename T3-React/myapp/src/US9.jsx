// input field : name,email,password, confirm password
//when the form submitted the values of pw and confirm pw must be same else it will give an error in alert box
// also len of pw ,ust be greater than 8 else error in alert box
// if form submitted successfully then display name and email in alert box

import { useState } from "react"

function US9(){
    const[data,setdata]=useState({});
    function handlesubmit(event)    {
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const pass=event.target.pass.value;
        const confirmpass=event.target.confirmpass.value;
        if(pass!==confirmpass)
        {
            alert("Password and confirm password must be same")
        }
        else if(pass.length<8)
        {
            alert("Password must be greater than 8 characters")
        }
        else
        {
            setdata({name,email});
            alert(`Name:${name}, Email:${email}`)
        }   
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                Enter name:<input type="text" name="name"></input><br></br>
                Enter email:<input type="email" name="email"></input><br></br>
                Enter password:<input type="password" name="pass"></input><br></br>
                Confirm password:<input type="password" name="confirmpass"></input><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default US9