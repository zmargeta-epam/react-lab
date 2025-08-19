import useSWR from 'swr'
import axios from 'axios'
import { Movie } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL

const fetcher = ([, movieId]) =>
  axios
    .get(`/movies/${movieId}`, { baseURL: BaseUrl })
    .then((result) => Movie.inverse.convert(result.data))

const useMovie = (movieId, config) => {
  const { data, error, isLoading } = useSWR(
    () => (movieId ? ['/api/movie', Number(movieId)] : null),
    fetcher,
    config
  )
  return [data, isLoading, error]
}

export default useMovie
