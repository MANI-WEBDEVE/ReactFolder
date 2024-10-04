import axios, {AxiosError} from 'axios'

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