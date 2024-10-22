import React from 'react'
import AppName from './component/AppName'
import AppInput from './component/AppInput'
import './App.css'
function App() {
  return (
      <center class='todo-container '>     
       <AppName/>
      
  
  <AppInput/>
  <div style={{
    margin:"7px",
    padding:"3px",
     textAlign:"center"
  }}>   
    <div className='row' style={{margin:"2px"}} >

    
    <div class="col-6">
      Milk buy
    </div>
    <div class="col-4">
      22/10/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger button">Delete</button>
    </div>

    </div>
    <div className='row' style={{margin:"2px"}} >

    
    <div class="col-6">
      Go to home 
    </div>
    <div class="col-4">
      22/10/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger button" >Delete</button>
    </div>

    </div>
  </div>
  
  </center>

    
 
  )
}

export default App
