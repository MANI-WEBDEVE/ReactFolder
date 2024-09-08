import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/UI/Card'

export default function Movie() {
  const moviesData = useLoaderData()
  console.log(moviesData)

  if (moviesData) {

    return (
      <div className='w-full h-full mt-10'>

        <ul className='container grid grid-cols-4 '>
          {
            moviesData.Search.map((curElem) => {
              return <Card key={curElem.imdbID} data={curElem} />
            })
          }
        </ul>
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}
