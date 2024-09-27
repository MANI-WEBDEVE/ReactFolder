import axios, {AxiosError} from 'axios'

const fetchApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const apiData = () => {
  return fetchApi.get('/posts')
}

export default apiData
