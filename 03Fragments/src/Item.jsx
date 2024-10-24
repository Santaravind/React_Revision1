 
 
 const Item=(props)=>{

    return(
        <> 
        <li className='list-group-item'> {props.fooditem}</li>
        <button type="button" 
        onClick={(e)=>alert("Buy now")}
        className="btn btn-info">Info</button>
        </>
    )

 };

 export default Item;