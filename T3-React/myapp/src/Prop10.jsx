// write a reactJS onDoubleClick appears alert box
function Prop10(){
    
    function handleclick(){
        alert("Welcome")
    }
    return(
        <div>
            <center>
                <button onDoubleClick={handleclick}>Click here</button>
            </center>
        </div>
    )
}
export default Prop10