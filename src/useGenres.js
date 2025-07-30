import useSWR from 'swr'
import axios from 'axios'
import { toGenreLookup } from './Mappers.js'

const BASE_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const fetchGenres = () => {
  const config = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return axios.get('/3/genre/movie/list', config).then((res) => toGenreLookup(res.data.genres))
}

const useGenre = (options) => {
  const { data, error, isLoading } = useSWR('/api/genres', fetchGenres, options)
  return { genres: data, error, loading: isLoading }
}

export default useGenre
