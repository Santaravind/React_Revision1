import React, { useContext, useRef } from 'react'
import { useState } from 'react';
import { todoApi } from './Store';


function Input() {
        const {onNewitem}=useContext(todoApi)
    // const [newtodo, setNewtodo] = useState();
    // const [dueDate,setdueDate]=useState()

      const newTodo=useRef();
      const dueDate=useRef();
    // const handlontodo=(event)=>{
    //    setNewtodo(event.target.value)
       
    //     }

    //  const handlondate=(event)=>{
    //         setdueDate(event.target.value)
            
    //          }
             
    const handlonButtonclick=(e)=>{
   e.preventDefault();

       const newtodo=newTodo.current.value;
       const duedate=dueDate.current.value;
       onNewitem(newtodo,duedate);

        newTodo.current.value="";
        duedate.current.value="";
       
    }

  return (
    <div className='m-2 '>
      <form action="" onSubmit={handlonButtonclick}>
        <input type="text"
         placeholder='Enter todo list' 
         className='border-2 border-gray-800 p-1'
          ref={newTodo}
          
         
        />
        <input type="date"  
        className='border-2 border-gray-800 m-1' 
       ref={dueDate}
       
       />
        <button className='border font-bold p-1 bg-purple-400 rounded-lg    
        '
        
        >Add</button>
      </form>
      
    </div>
  )
}

export default Input
