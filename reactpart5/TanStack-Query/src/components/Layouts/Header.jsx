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
          <NavLink to="/" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/fetch-old" >
            Fetch Old
          </NavLink>
        </li>
        <li>
          <NavLink to="/fetch-rq" >
            Fetch RQ
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}


export default Header
