import { useState } from 'react'

function App() {
  const [isLogIn, setIsLogIn] = useState(false)
  const [userName, setUserName] = useState("")
  return (
    <>
    <h1>Short Circuit Evalution</h1>

   { isLogIn  && <p>Your are Logged In</p>}
   {userName ? <p>Welcome {userName}</p> : <p>Please Login</p>}

    <button onClick={() => setIsLogIn(!isLogIn) } >Login</button>
    <button onClick={() => setUserName("Muhammad Inam")}>Set User Name</button>
    <button onClick={() => setUserName("")}>Logout</button>
    </>
  )
}

export default App
