import React from 'react'

function Input({handldalKeyPress}) {
  return (
    
      <div className="input-group mb-3">
 
  <input type="text" className="form-control" placeholder="Enter food name" aria-label="Recipient's username" onKeyDown={handldalKeyPress}aria-describedby="button-addon2"  />
  {/* <button class="btn btn-outline-secondary " type="button" id="button-addon2" onClick={handldalclick}>Add</button> */}
</div>
    
  )
}

export default Input
