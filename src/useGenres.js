import useSWR from 'swr'
import axios from 'axios'
import { GenreLookup } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL
const ApiKey = import.meta.env.VITE_API_KEY

const fetchGenres = () => {
  const config = {
    baseURL: BaseUrl,
    headers: {
      Authorization: `Bearer ${ApiKey}`,
    },
  }
  return axios
    .get('/3/genre/movie/list', config)
    .then((res) => GenreLookup.inverse.convert(res.data.genres))
}

const useGenre = (config) => {
  const { data, error, isLoading } = useSWR('/api/genres', fetchGenres, config)
  return [data, isLoading, error]
}

export default useGenre
