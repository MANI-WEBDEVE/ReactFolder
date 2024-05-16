import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  //  const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:(
  //       <>
  //       <Header/>
  //       <Home/>
  //       <Footer/>
  //       </>

  //     )
  //   }
  //  ])


  return (
    <>
      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
