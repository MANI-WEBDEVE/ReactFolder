import axios, {AxiosError} from 'axios'
import { useEffect } from 'react'

const fetchApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const apiData = () => {
  return fetchApi.get('/posts')
}

export default apiData

export const fetchIndvdualData = async (id) => {
  try {
    const response = await fetchApi.get(`/posts/${id}`)
    const data = await response.data;
    return await data
  } catch (error) {
    console.log(error)
  }
}
export const paginationWeb = async (pageNumber) => {
  console.log(pageNumber)
  try{
    const response = await fetchApi.get(`/posts?_start=${pageNumber}&_limit=3`)
    const data = await response.data;
    return await data
  } catch (error) {
    console.log(error)
  }
}
