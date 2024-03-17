import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import {Contextpro} from'../../Context/Context';
import Datas from './Datas';
import Cart from '../Cart/Cart';

function Home() {
    const [Data, setData]=useState([])
  const {Item, dispatch} =useContext(Contextpro)
function Decrease (item){
  dispatch({type:"DECREASE",value:item})
}

function AddItem (data){
  dispatch ({type:"ADD",value:data})
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
   <div >
<Datas port={Data}/>
</div> 
{/* <div>
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
  </div> */}
  {/* <Cart port={Item}/> */}
</div>       
   
  )
}


export default Home