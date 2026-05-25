// onSubmit appears alert
function Prop11(){
    
    function handleclick(){
        alert("Welcome")
    }
    return(
        <div>
            <center>
                <form onSubmit={handleclick}>
                <button>Submit</button>
                </form>
            </center>
        </div>
    )
}
export default Prop11