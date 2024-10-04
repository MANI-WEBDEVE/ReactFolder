import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import FetchOld from './pages/FetchOld'
import FetchRQ from './pages/FetchRQ'
import MainLayout from './components/Layouts/MainLayout'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchRQIndev from './pages/FetchRQIndev'


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
      },{
        path: "/rq/:id",
        element: <FetchRQIndev/>
      }
    ]
  }
])



const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false}  ></ReactQueryDevtools>
    </QueryClientProvider>
  )
}



export default App
