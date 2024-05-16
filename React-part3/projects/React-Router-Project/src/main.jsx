import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import { Route } from 'react-router-dom'
import Github, { gitHubInfoData } from './components/Github.jsx'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/>
//       },
//       {
//         path:'about',
//         element: <About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>

//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} > 
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route 
      loader={gitHubInfoData}
      path='github'
      element={ <Github/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
