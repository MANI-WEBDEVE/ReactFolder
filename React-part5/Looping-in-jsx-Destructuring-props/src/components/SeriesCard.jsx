import React from 'react'

const SeriesCard = ({curElem}) => {

    const {name, URI, description, category, rating, price, watchNow} = curElem
  return (
    <li >
    <div>
      <h1>Name: {name}</h1>
      <img src={URI} alt="" />
      <p>Summery: {description}</p>
      <p>Generic: {category}</p>
      <p>Rating: {rating}</p>
      <h6>Price: {price}</h6>
      <a href={watchNow} target="_blank">
        <button>Watch Now</button>  

      </a>
    </div>
  </li>
  )
}

export default SeriesCard
