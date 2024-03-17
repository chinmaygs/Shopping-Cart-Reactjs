import React, { useState } from 'react'
import { useEffect , useReducer} from 'react'
import { useContext } from 'react'
import {Contextpro} from'../Context'

function Home() {
    const [Data, setData]=useState([])
    const [Item, setItem]=useState([])

function Decrease (item){
  item.quantity == 1 ?
 setItem((prev)=>{return prev.filter((i)=> i.id !== item.id)})
:setItem(Item.map(it=>{
  return it.id==item.id ? 
  {id:item.id,data:item.data,price:(it.price-item.data.price).toFixed(2),quantity:(it.quantity-1)}
  :it}))  
}

function AddItem (data){
  const exist=Item.find(it=>it.data.id==data.id)
  console.log(exist)
  if(exist){
setItem(Item.map(item=>{return item.data.id==data.id ? {id:item.id,data:item.data,price:(item.price+item.data.price),quantity:(item.quantity+1)}
:{...item}}))}
  else{
    setItem([{id:Math.random().toString(), data:data, price:data.price,quantity:1},...Item])
  }
}
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((r)=>r.json())
        .then((res)=>{
          setData(res)
        console.log(res)})
        },[])
  return (
   <div>
   <div className='grid grid-cols-4 mx-3 my-3'>
   {Data.map((da)=>(
    <div className="bg-orange-400 object-scale-down rounded-xl shadow-md box-content h-60 w-60 p-4 mx-2 my-2 flex-col text-center " key={da.id}>
      <img src={da.image} className='object-scale-down overflow-hidden w-24 h-24 rounded-xl mx-auto'/>
  <h2 className="text-sm font-bold mb-2">{da.title}</h2>
  <p className="text-gray-600">{da.price}</p>
  <button className="text-blue-500 hover:underline" onClick={()=>{AddItem(da)}}>Add to Cart</button>
  <br/>

    </div>
   ))}
</div> 
<div>
    {Item.map((ia)=>(
      <div className="bg-orange-400 object-scale-down rounded-xl shadow-md box-content h-60 w-60 p-4 mx-2 my-2 flex-col text-center " key={ia.id}>
         <img src={ia.data.image} className='object-scale-down overflow-hidden w-24 h-24 rounded-xl mx-auto'/>
         <h2 className="text-sm font-bold mb-2">{ia.data.title}</h2>
         <h2 className="text-sm font-bold mb-2">{ia.price}</h2>
         <div className='flex ml-7'>
         <button onClick={()=>{AddItem(ia.data)}}>+</button>
         <h2 className="text-sm font-bold mb-2">QUANTITY: {ia.quantity}</h2>
         <button onClick={()=>{Decrease(ia)}}>-</button>
         </div>
      </div>
      
    ))}
<div>
<h2 className="text-sm text-black font-bold mb-2">TOTAL:{Item.reduce((total,current)=>{return total+current.price},0)}</h2>
</div>
  </div>
</div>       
   
  )
}


export default Home