// Write react JS to display alot box with text "Welcome to LJU " by clicking on a button 
// provide css to button like color,bg color,padding and margin
function Prop8(){
    const mystyle={color:"blue",backgroundColor:"pink",padding:"25px",margin:"5px"}
    function handleclick(){
        alert("Welcome")
    }
    return(
        <div>
            <center>
                <button style={mystyle} onClick={handleclick}>Click here</button>
            </center>
        </div>
    )
}
export default Prop8