// write reactjs to display values in console while changing it in text box
function Prop9(){
    function handlechange(event){
        console.log(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handlechange}/>
        </div>
    )
}
export default Prop9