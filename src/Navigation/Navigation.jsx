import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <>
    <div className='text-center text-5xl font-sans text-slate-700 bg-white w-screen mr-5 p-2'>SHOPPING CART</div>
    <div className='flex flex-row justify-between p-1 text-2xl mx-5'>
        <div><Link to='/'>HOME</Link></div>
        <div><Link to='/Cart'>CART</Link></div>
        <div><Link to='/Contact'>CONTACT</Link></div>
        </div>
        </>
  )
}

export default Navigation