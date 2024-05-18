import './App.css'
import React from 'react'
import UserContextProvider from './contaxt/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
    // <h1>Simple is that</h1>
    // <Login/>
    // <Profile/>
    </UserContextProvider>
    // <h1>hello</h1>
  )
}

export default App
