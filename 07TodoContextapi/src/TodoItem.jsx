import React from 'react'

function TodoItem({todo ,deletclick}) {
  
  const handlDelete=()=>{
    console.log("Delet is call")
  }
  return (
    <div>
        <ul className='m-1  '>
        
            {   todo.map((todo)=>(
                <div className='flex gap-9 '> 
                <li className=' m-2 'key={todo}>{todo.name }   
                 </li>
                 <li className='m-2'>{todo.date}</li>

                 
                 <button className='border-2 p-1  rounded-lg bg-red-500' onClick={()=>deletclick(todo.name)}>Delete</button>
               
                 
                </div>))}
            
        </ul>
    </div>
  )
}

export default TodoItem
