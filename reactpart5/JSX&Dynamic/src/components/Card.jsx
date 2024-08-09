import React from 'react'

const Card = ({movie}) => {
    const name1 = "pakistan"
  return (
    <>
    <h1>{movie}</h1>
     <img src="https://i.pinimg.com/564x/5e/ef/42/5eef42054e68d4fee4c35c5a4aae6a0b.jpg" alt="" width='40%' height='40%' style={{borderRadius: '10%'}} />
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem!</p>
    </>
  )
}

export default Card