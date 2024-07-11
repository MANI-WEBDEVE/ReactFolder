import React from 'react'

const SeriesCard = ({curElem}) => {

    const {name, URI, description, category, rating, price, watchNow} = curElem
  return (
    <li className='liContainer' >
    <div>
      <h1 className='h1'>Name: {name}</h1>
      <img src={URI} alt="" className='img'/>
      <p className='description'>Summery: {description}</p>
      <p>Generic: {category}</p>
      <p>Rating: {rating}</p>
      <h6>Price: {price}</h6>
      <a href={watchNow} target="_blank">
        <button className='btn'>Watch Now</button>  

      </a>
    </div>
  </li>
  )
}

export default SeriesCard
