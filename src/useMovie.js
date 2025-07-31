import useSWR from 'swr'
import axios from 'axios'
import { Movie } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL
const ApiKey = import.meta.env.VITE_API_KEY

const fetchMovie = ({ movieId }) => {
  const config = {
    baseURL: BaseUrl,
    headers: {
      Authorization: `Bearer ${ApiKey}`,
    },
  }
  return axios.get(`/3/movie/${movieId}`, config).then((res) => Movie.inverse.convert(res.data))
}

const useMovie = (movieId, config) => {
  const { data, error, isLoading } = useSWR(
    () => (movieId ? { url: `/api/movies/${movieId}`, movieId } : null),
    fetchMovie,
    config
  )
  return [data, isLoading, error]
}

export default useMovie
