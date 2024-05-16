import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/MANI-WEBDEVE')
    //   .then(response => response.json())
    //   .then(data => {
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='flex  border-2 border-black'>
      <h1 className='bg-purple-600 text-white text-center p-4 m-2'>GitHub Followers: {data.followers } </h1>
      <img src={data.avatar_url } width={120} height={120}  alt="git profile picture" />
    </div>
  )
}

export default Github


export const gitHubInfoData = async () => {
    const response = await fetch('https://api.github.com/users/MANI-WEBDEVE')
    return response

}