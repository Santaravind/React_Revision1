import { useState } from 'react'
import Item from './Item'
import Errormess from './Errormess'

function App() {
  
  let foodItem=["dal" ,"chaval","roti","salet"]
    
  return (
    <>  
    <div className='.bg-dark'> 
       <h1> Healthy Food</h1>
        <ul  className='list-group'> 
          {foodItem.map((item)=>(
            <><Errormess key={item} items={item} />
            <Item key={item} fooditem={item}> </Item></>
            
          ))}
        </ul>
 
        </div>
    </>
  )
}

export default App
