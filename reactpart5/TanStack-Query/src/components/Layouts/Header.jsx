import React from 'react'

import { NavLink } from 'react-router-dom'
import "./index.css"
const Header = () => {
  <style> 
    
  </style>
  return (
    <nav>
      <ul >
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/fetch-old" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Fetch Old
          </NavLink>
        </li>
        <li>
          <NavLink to="/fetch-rq" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Fetch RQ
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default Header
