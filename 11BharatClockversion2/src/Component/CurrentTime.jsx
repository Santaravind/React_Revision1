import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function CurrentTime() {
    const [time,setTime]=useState(new Date())

       useEffect(()=>{
        const interval=setInterval(()=>{
          setTime(new Date());
        },1000)
      
        return()=>{
          clearInterval(interval);
          
        }

       },[])


  return (
    <div>
      <p> This is the current time: {time.toLocaleDateString()}
        : {time.toLocaleTimeString()}
      </p>
    </div>
  )
}

export default CurrentTime
