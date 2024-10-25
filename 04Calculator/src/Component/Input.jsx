import React from 'react'
import { useState } from 'react';
const Input=({inputVal})=> {
  
  
  return (
    <div className=''>
      <input type="text" 
        className='border-4 border-black text-center 
       content-center p-3 m-2  calc font-bold '
      placeholder='Enter number' 
      value={inputVal} readOnly />
      
    </div>
  )
}

export default Input
