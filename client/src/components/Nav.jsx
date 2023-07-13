import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home, Order } from '../pages'

export default function Nav({ navStyle }) {
  
  return (
    <BrowserRouter>
        <div className="gap-3 absolute flex sm:relative gap-7 px-4">
          <div className= {navStyle}>
              <Link to='/order'>Order</Link>
          </div>
          <div className = {navStyle}>
              <Link to='/'>Home</Link>
          </div>
        </div>
        <Routes>
            <Route path = "/" element = { <Home/> }></Route>
            <Route path = "/order" element = { <Order/> }></Route>
        </Routes>
    </BrowserRouter>
  )
}

