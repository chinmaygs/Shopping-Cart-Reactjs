import React, { useContext } from 'react'
import { Contextpro } from '../../Context/Context'
import { MdOutlineRemoveCircle } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
function Cart() {
  const {Item, dispatch} =useContext(Contextpro)

  function AddItem (data){
    dispatch ({type:"ADD",value:data})
  }

  function Decrease (item){
    dispatch({type:"DECREASE",value:item})
  }

  return (<div>
    {Item.length==0 &&
    <div className='text-black text-center mt-5'>Your Shopping Cart is empty</div>
     }:{ 
    <div className='grid grid-cols-4 mx-3 my-3'>
    {Item.map((ia)=>(
      <div className="bg-orange-400 object-scale-down rounded-xl shadow-md box-content h-60 w-60 p-4 mx-2 my-2 flex-col text-center " key={ia.id}>
         <img src={ia.data.image} className='object-scale-down overflow-hidden w-24 h-24 rounded-xl mx-auto'/>
         <h2 className="text-sm font-bold mb-2">{ia.data.title}</h2>
         <h2 className="text-sm font-bold mb-2">{ia.price}</h2>
         <div className='flex ml-14'>
         <MdAddCircle className='size-5' onClick={()=>{AddItem(ia.data)}}/>
         <h2 className="text-sm font-bold mb-2">QUANTITY: {ia.quantity}</h2>
         <MdOutlineRemoveCircle className='size-5' onClick={()=>{Decrease(ia)}}/>
         </div>
      </div> 
    ))}
  </div>
  }
  <h2 className="text-sm text-black font-bold mb-2">TOTAL:{Item.reduce((total,current)=>{return total+current.price},0)}</h2>
    </div>
  )
}

export default Cart