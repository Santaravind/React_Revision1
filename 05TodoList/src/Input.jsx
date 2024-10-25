import React from 'react'
import { useState } from 'react';


function Input({handlClick}) {
    const [newtodo, setNewtodo] = useState();
    const [dueDate,setdueDate]=useState()

    const handlontodo=(event)=>{
       setNewtodo(event.target.value)
       
        }

     const handlondate=(event)=>{
            setdueDate(event.target.value)
            
             }
             
    const handlonButtonclick=()=>{
        handlClick(newtodo,dueDate);
        setdueDate("")
        setNewtodo("")
    }

  return (
    <div className='m-2 '>
        <input type="text" placeholder='Enter todo list' className='border-2 border-gray-800 p-1' value={newtodo}  onChange={handlontodo}
        />
        <input type="date"  className='border-2 border-gray-800 m-1' value={dueDate} onChange={handlondate}/>
        <button className='border font-bold p-1 bg-purple-400 rounded-lg    
        '
        onClick={handlonButtonclick}
        >Add</button>

      
    </div>
  )
}

export default Input
