const Todoitem=({items})=>{

return(
    <>
    {items.map((item)=>(
    <div className='row' style={{margin:"2px"}} >

    
    <div class="col-6">
      {item.name}
      
    </div>
    <div class="col-4">
     {item.dudate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger button">Delete</button>
    </div>
    
    </div>
    ))}

    </>
)

}

export default Todoitem;