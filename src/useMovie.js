import useSWR from 'swr'
import axios from 'axios'
import { toMovieUsing } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL
const ApiKey = import.meta.env.VITE_API_KEY

const fetchMovie = ({ movieId }) => {
  const config = {
    baseURL: BaseUrl,
    headers: {
      Authorization: `Bearer ${ApiKey}`,
    },
  }
  return axios.get(`/3/movie/${movieId}`, config).then((res) => toMovieUsing()(res.data))
}

const useMovie = (movieId, config) => {
  const { data, error, isLoading } = useSWR(
    () => movieId && { url: `/api/movies/${movieId}`, movieId },
    fetchMovie,
    config
  )
  return [data, isLoading, error]
}

export default useMovie
