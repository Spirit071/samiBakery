import React from 'react';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home, Order } from '../pages';

export default function Nav({ navStyle }) {
  return (
    <BrowserRouter className = "sm:py-5">
      <div className="gap-3 absolute flex sm:relative gap-7 px-4 sm:bottom-0">
        <div className={navStyle}>
          <Link to="/order">Order</Link>
        </div>
        <div className={navStyle}>
          <Link to="/">Home</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
