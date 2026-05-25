// Create a component to perform the task as described. 
// 1. Add a text field and a submit button. While changing the value in the text field, display it below the form. 
// Display this text field value in an alert box upon submitting it.
// 2. Add a button to perform to perform click and double click events. On click event, display message in h3 tag, you clicked once. 
// On double click event, display message in h2 tag. You click twice. Message should be displayed below the button.
// Apply inline css to all fields, buttons etc. 

export default function Any1() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(e.target.txt.value);
    };

    const handleChange = (e) => {
        document.getElementById("fp").innerText = e.target.value;
    }

    const handleClick = (e) => {
        document.getElementById("msg").innerHTML = "<h3>You click once.</h3>";
    }

    const handleDoubleClick = (e) => {
        document.getElementById("msg").innerHTML = "<h3>You click Twice.</h3>";
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type = "text" onChange = {handleChange} style={{ padding: "5px", marginTop: "5px" }} name = "txt"></input>
                <p id = "fp" style={{ margin: "5px", color: "gray" }}></p>
                <button type = "submit" style={{ padding: "5px 10px", background: "green", color: "white" }}>Submit</button>
            </form>
            <button onClick = {handleClick} onDoubleClick={handleDoubleClick} style={{ padding: "10px", background: "blue", color: "white", marginTop: '5px' }}>Click</button>
            <p id = "msg"></p>
        </>
    )
}