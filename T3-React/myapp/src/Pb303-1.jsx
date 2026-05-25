function Detail(props){
    return (
        <div>
            <h2>{props.data.name}</h2>
            <h2>{props.data.roll}</h2>
            <h2>{props.data.T1}</h2>
            <h2>{props.data.T2}</h2>    
        </div>
    )
}

export default Detail