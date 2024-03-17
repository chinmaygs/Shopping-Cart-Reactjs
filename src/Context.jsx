import React, { Children, useReducer } from 'react'
import { createContext } from 'react'

export const Contextpro = createContext(null)

function reducer(state,action){
    switch(action.type){
      case "ADD":
        const exist=state.find(it=>it.data.id==action.value.id)
        console.log(exist)  
        if(exist)
      return(state.map(item=>{return item.data.id==action.value.id ? {id:item.id,data:item.data,price:(item.price+item.data.price),quantity:(item.quantity+1)}
:{...item}}))
  else
    return [{id:Math.random().toString(), data:action.value, price:action.value.price,quantity:1},...state]
  case "DECREASE":
    if (action.value.quantity == 1 )
     return (state.filter((i)=> i.id !== action.value.id))
    else
    return (state.map(it=>{
      return it.id==action.value.id ? 
      {id:action.value.id,data:action.value.data,price:(it.price-action.value.data.price).toFixed(2),quantity:(it.quantity-1)}
      :{...it}}) )
      default:
        return state
    }
}

function Context({children}) {
  const [Item,dispatch]=useReducer(reducer,[])
  return (
    <div>
<Contextpro.Provider value={{Item,dispatch}}>{children}</Contextpro.Provider>
    </div>
  )
}

export default Context