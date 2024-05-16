import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let {userId} = useParams()
  return (
    <div>
      <h1>User Name: {userId}</h1>
    </div>
  )
}

export default User
