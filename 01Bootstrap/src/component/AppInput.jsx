import React from 'react'

function AppInput() {

  return (
    <div>
        <div class="row "  style={{
            width:"100%", 
            margin:" 5px",
            marginBottom:"7px",
            padding:"3px"
        }}>
      <div class="col-6">
      <input type="text"
      style={{widows:"100%"}}
      placeholder='Enter todo item'
      />
    </div>
    <div class="col-4">
      <input type="date" 
      style={{widows:"100%"}}
      />
    </div>
    <div class="col-2">
    <button type="button" class="button btn btn-success">Add</button>
    </div>
    </div>
    </div>
  )
}

export default AppInput
