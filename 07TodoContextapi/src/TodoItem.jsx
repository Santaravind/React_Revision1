import React, { useContext } from 'react'
import { todoApi } from './Store'

function TodoItem() {
const {deleteItem}=  useContext(todoApi)
  
 
  const{ todocon }=useContext(todoApi)
  return (
    <div>
        <ul className='m-1  '>
        
            {    todocon.map((todo)=>(
                <div className='flex gap-9 '> 
                <li className=' m-2 'key={todo}>{todo.name }   
                 </li>
                 <li className='m-2'>{todo.date}</li>

                 
                 <button className='border-2 p-1  rounded-lg bg-red-500' onClick={()=>deleteItem(todo.name)}>Delete</button>
               
                 
                </div>))}
            
        </ul>
    </div>
  )
}

export default TodoItem
