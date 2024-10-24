import React from 'react'
import { useState } from 'react';
const Input=()=> {
  const [inputValue, setinputValue] = useState('');
  const addition=()=>
  {
     const values=inputValue;
     console.log(values);
     setinputValue('');
  }
  return (
    <div className=''>
      <input type="text" 
      onChange={(e)=>setinputValue(e.target.value)}  className='border-4 border-black text-center 
       content-center p-3 m-2  calc'
      placeholder='Enter number'/>
      <button onClick={addition} className='font-bold bg-blue-500 p-1 rounded-lg'>Submit</button>
      
    </div>
  )
}

export default Input
