import React from 'react'
import Headers from './Headers'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>
    </>
  )
}
