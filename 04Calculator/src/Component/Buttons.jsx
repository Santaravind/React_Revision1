import React from 'react'

function Buttons() {
    const buttonName=[
        'C','9','8','7','6','5','4','3','2','1','+','-','/','*','%','del'
    ]
  return (
    <div className='bg-gray-500 pb-2'> 
    <div className='grid grid-cols-4 m-1 mb-2 gap-3 mt-2'>
        {buttonName.map(col=><button className=' p-1 bg-red-400 rounded-md text-2xl font-bold'>{col}</button>)}
      {/* <button className=' p-1 bg-red-400 rounded-md text-2xl font-bold'>C</button>
      <button className=' p-1 bg-red-400 rounded-md text-2xl font-bold'>9</button> 
      <button className=' p-1 bg-red-400 rounded-md text-2xl font-bold'>8</button> 
      <button className=' p-1 bg-red-400 rounded-md text-2xl font-bold'>7</button>  */}
    </div>
    </div>
  )
}

export default Buttons
