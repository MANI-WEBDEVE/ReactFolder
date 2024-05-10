import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home></Home>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login></Login>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About></About>
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
