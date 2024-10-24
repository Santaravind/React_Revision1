import React from 'react'
import AppName from './component/AppName'
import AppInput from './component/AppInput'
import './App.css'
import Todoitem from './component/Todoitem'
function App() {
  const items=[
    {
      name:"buy milk",
      dudate:'4/3/2025'
    },
    {
      name:"Go to home ",
      dudate:'4/3/2025'
    },
    {
      name:"Me learn map and props ",
      dudate:'4/3/2025'
    },
  ]
  return (
      <center class='todo-container '>     
       <AppName/>
      
  
  <AppInput/>
  <Todoitem items={items}/>
  
    
  
  
  </center>

    
 
  )
}

export default App
