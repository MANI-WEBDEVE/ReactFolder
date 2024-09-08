import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "../src/pages/Home"
import Contact from "../src/pages/Contact"
import About from "../src/pages/About"
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

// import getApiData from "./api/getApi";

function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "movie",
          element: <Movie/>,
        },
      ]
    }
  ])


  return <>
  
  <RouterProvider router={router}/>
  </>;
}

export default App;
