import React from 'react'
import icon from "../../public/movieIcon.png"
import { NavLink } from 'react-router-dom'

export default function Headers() {




  return (
    <>
    <div className="relative navbar w-full bg-base-100 mt-4">
      <div className='mt-20 w-[90%] border  absolute top-[10%] right-16  border-b-[1px] border-orange-600'></div>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 21 27"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-orange-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}
         className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-orange-500/50 text-black font-medium " : "bg-orange-900/20"
          }
        >Home</NavLink></li>
        <li><NavLink to={'/contact'}
        className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-orange-500/50 text-black font-medium " : "bg-orange-900/20"
          }
        >Contact</NavLink></li>
        <li><NavLink to={'/movie'}
        className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-orange-500/50 text-black font-medium " : "bg-orange-900/20"
          }
        
        >Movie</NavLink></li>
        <li><NavLink to={'/about'}
        className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "bg-orange-500/50 text-black font-medium " : "bg-orange-900/20"
          }
        >About</NavLink></li>

      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-2xl font-bold "><img className='w-[50px]' src={icon} alt="" />  MOVIE</a>
  </div>
  <div className="navbar-end  flex justify-end items-center gap-4 ">
 
    <button className="btn btn-ghost btn-circle ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
      </div>
    </button>
  </div>
</div>
    </>
  )
}
