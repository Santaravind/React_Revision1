import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './Input'
import TodoItem from './TodoItem'


function App() {
  // const Items=[
  //   {
  //     name:"Milk",
  //     date:"25/10/2024"

  //   },
    
  // ]
  const [todocon, setTodocon] = useState([]);
  const onNewitem=(newtodo,dueDate)=>
  {  
        const additem=[...todocon,
      {name:newtodo,
        date:dueDate
     }
    ]
    setTodocon(additem)
  }

  const handltDeleteClick=(itemName)=>{
    const del =todocon.filter((item) => item.name !== itemName);;
    setTodocon(del)

  }
 
  return (
    <>
    <div className='flex items-center justify-center '>
     <div className=' border-2 w-fit p-4 m-3 items-center justify-center '>
      <h1 className='text-center font-bold font-serif text-2xl'>Todo List  </h1>
      <Input handlClick={onNewitem} />
      <TodoItem todo={todocon} deletclick={handltDeleteClick} />
     </div>
     </div>
    </>
  )
}

export default App
