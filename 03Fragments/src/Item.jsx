import React from 'react'

function Item({fooditems} ) {
  return (
    <div>
     <ul className="list-group">
    {fooditems.map((item,index) => (
       <li key={index}  className="list-group-item">{item}</li>
    ))}
    </ul>
    </div>
  )
}

export default Item
