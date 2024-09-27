import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import FetchOld from './pages/FetchOld'
import FetchRQ from './pages/FetchRQ'
import MainLayout from './components/Layouts/MainLayout'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'


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



const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}



export default App
