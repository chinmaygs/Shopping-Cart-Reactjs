import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Navigation from './Navigation/Navigation'
import Context from './Context/Context'

function App() {
  return (
    <div className='bg-white min-h-screen w-screen '>
      <div className='top-0 w-screen bg-slate-200'>
      <Navigation/>
      </div>
      <div className=''>
   <Context>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </Context>
      </div>
    </div>
  )
}

export default App