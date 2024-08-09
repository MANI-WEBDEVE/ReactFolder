import React from 'react'

function ProfileCard({name, age, greeting, children}) {
  return (
    <>
      <div>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h4>Greeting: {greeting}</h4>
        <h5>{children}</h5>
      </div>
    </>
  )
}

export default ProfileCard
