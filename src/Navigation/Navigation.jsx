import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <div className='flex flex-row justify-between'>
        <div><Link to='/'>HOME</Link></div>
        <div><Link to='/Cart'>CART</Link></div>
        <div><Link to='/Contact'>CONTACT</Link></div>
        </div>

  )
}

export default Navigation