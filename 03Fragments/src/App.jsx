import React,  { useState } from 'react'
import Item from './Item'
import Input from './Input'
import Errormess from './Errormess'


function App() {
  
     const [fooditems ,setFooditems]= useState(["Dal","Roti"])
     const onkey=(event)=>{
      if(event.key==='Enter'){
        const newItem = event.target.value;
        //console.log(newItem)
        setFooditems((prevItems) => [...prevItems, newItem]); // Append the new item to the array
        event.target.value = ''; 
      }
     }
    
  return (
    <>  
    <center> 
    <h1>Healthy food itme</h1>
    <Input handldalKeyPress={onkey}
      
    />
  
     <Item  fooditems={fooditems}/>
    <Errormess  fooditems={fooditems}/>

    </center>
    
         
    </>
  )
}

export default App
