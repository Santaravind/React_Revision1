import React, { createContext } from 'react'

export const todoApi=createContext({
    todocon:[],
      onNewitem:()=>{},
      deleteItem:()=>{}
})