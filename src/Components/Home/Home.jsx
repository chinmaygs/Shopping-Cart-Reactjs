import React, { useState } from 'react'
import { useEffect , useReducer} from 'react'
import { useContext } from 'react'
import { Contextpro } from '../../Context/Context'
import Datas from './Datas'

function Home() {
  const [Data, setData]=useState([])
  const {dispatch} =useContext(Contextpro)


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
    <Datas Data={Data} AddItem={AddItem}/>
    </div>       
   
  )
}


export default Home