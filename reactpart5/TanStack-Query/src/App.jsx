import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import FetchOld from './pages/FetchOld'
import FetchRQ from './pages/FetchRQ'
import MainLayout from './components/Layouts/MainLayout'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/fetch-old",
        element: <FetchOld/> 
      },
      {
        path: "/fetch-rq",
        element: <FetchRQ/>
      }
    ]
  }
])

console.log(router)

export default App
