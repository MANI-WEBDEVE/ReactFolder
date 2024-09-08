import React, { useEffect, useState } from 'react'
import Card from '../components/UI/Card';
// import Card from '../components/UI/Card'

export default function Movie() {
  const [apiData, setApiData] = useState([])
  const [movieInput, setMovieInput] = useState("")
  const getApiData = async () => {


    try {
      if (movieInput) {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fc7a7a60&s=${movieInput}`);
        const data = await response.json();
        let data1 = await data.Search
        setApiData(data1)
      } else {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fc7a7a60&s=wife`);
        const data = await response.json();
        let data1 = await data.Search
        setApiData(data1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getApiData()
  }, [])





  if (apiData) {

    return (
      <div className='w-full h-full mt-10'>
        <div className='flex items-center justify-end mb-4 mr-4 gap-6'>
          <input type="text" className='pr-20 pl-6 py-2 rounded-lg' placeholder='Enter your Movie Name' value={movieInput} onChange={(e) => setMovieInput(e.target.value)} />
          <button className='px-4 py-2 text-black font-bold font-2xl rounded-lg bg-orange-600' onClick={getApiData}>Search</button>
        </div>
        <ul className='container grid grid-cols-4 '>
          {
            apiData.map((curElem) => {
              return <Card key={curElem.imdbID} data={curElem} />
            })
          }
        </ul>
      </div>
    )
  } else {
    return (
      <>
        <div className='w-full h-[100vh] mt-10 '>

          <div className='flex items-center justify-end mb-4 mr-4 gap-6'>
            <input type="text" className='pr-20 pl-6 py-2 rounded-lg' placeholder='Enter your Movie Name' value={movieInput} onChange={(e) => setMovieInput(e.target.value)} />
            <button className='px-4 py-2 text-black font-bold font-2xl rounded-lg bg-orange-600' onClick={getApiData}>Search</button>
          </div>
          <div className='flex flex-col items-center justify-center w-full h-[60%]'><h1 className='text-4xl font-bold text-orange-600'>Serach your Favourite Movie</h1>
          <div className='mt-4 w-[40%] border    border-b-[1px] border-orange-600/30'></div>
          </div>

        </div>
      </>
    )

  }

}
