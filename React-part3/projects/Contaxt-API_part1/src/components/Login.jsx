import React, {useState, useContext} from 'react'
import UserContaxt from '../contaxt/UserContaxt'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setData} = useContext(UserContaxt)

    const handleSubmit = () => {
        e.preventDefault()
        setData({username, password})
    }

  return (
    <div>
      <h2>Login Form</h2>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login
