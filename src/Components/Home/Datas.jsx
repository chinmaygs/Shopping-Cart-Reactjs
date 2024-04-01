import React from 'react'

function Datas(props) {
  
  const {Data,AddItem}=props

  return (
   <div className='grid grid-cols-4 p-3 ml-6 '>
   {Data.map((da)=>(
    <div className="bg-orange-400 object-scale-down rounded-xl shadow-md box-content h-60 w-60 p-4 mx-2 my-5 flex-col text-center " key={da.id}>
    <img src={da.image} className='object-scale-down overflow-hidden w-24 h-24 rounded-xl mx-auto'/>
    <h2 className="text-sm font-bold mb-2">{da.title}</h2>
    <p className="text-gray-600">{da.price}</p>
    <button className="text-blue-500 hover:underline" onClick={()=>{AddItem(da)}}>Add to Cart</button>
    </div>
    ))}
    </div>
  )
}

export default Datas