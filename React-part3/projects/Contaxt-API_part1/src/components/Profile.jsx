import React, {useContext} from 'react'
import UserContaxt from '../contaxt/UserContaxt'

function Profile() {
  const {data} = useContext(UserContaxt)

  if (!data) return <div>please enter the login form</div>

  return <div>WellCome User: {data.username}</div>
}

export default Profile
