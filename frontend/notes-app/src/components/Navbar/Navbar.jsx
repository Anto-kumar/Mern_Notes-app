import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <div className="text-lg font-bold">Notes App</div>
      <div className='flex space-x-15'>
        <NavLink to="/about">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">About</button>
        </NavLink>
        <NavLink to="/contact">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Contact</button>
        </NavLink>
        <NavLink to="/faq">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">FAQ</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;