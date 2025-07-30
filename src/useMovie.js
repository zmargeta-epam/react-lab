import useSWR from 'swr'
import axios from 'axios'
import { toMovieUsing } from './Mappers.js'

const BASE_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const fetchMovie = ({ movieId }) => {
  const config = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }
  return axios.get(`/3/movie/${movieId}`, config).then((res) => toMovieUsing()(res.data))
}

const useMovie = (movieId, options) => {
  const { data, error, isLoading } = useSWR(
    () => movieId && { url: `/api/movies/${movieId}`, movieId },
    fetchMovie,
    options
  )
  return { movie: data, error, loading: isLoading }
}

export default useMovie
