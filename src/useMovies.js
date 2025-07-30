import useSWR from 'swr'
import axios from 'axios'
import useGenres from './useGenres.js'
import { toGenreDtoUsing, toMovieUsing, toSortByDto } from './Mappers.js'

const BASE_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const fetchMovies = ({ genre, sortCriteria, lookups }) => {
  const config = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      with_genres: toGenreDtoUsing(lookups.genres)(genre),
      sort_by: toSortByDto(sortCriteria),
    },
  }
  return axios
    .get('/3/discover/movie', config)
    .then((res) => res.data.results?.map(toMovieUsing(lookups)))
}

const findMovies = ({ searchTerm, lookups }) => {
  const config = {
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      query: searchTerm,
    },
  }
  return axios
    .get('/3/search/movie', config)
    .then((res) => res.data.results?.map(toMovieUsing(lookups)))
}

const useMovies = (searchTerm, genre, sortCriteria, options) => {
  const { genres, error: genresError } = useGenres(options)
  const {
    data: movies,
    error: moviesError,
    isLoading,
  } = useSWR(
    () => genres && { url: '/api/movies', searchTerm, genre, sortCriteria, lookups: { genres } },
    searchTerm ? findMovies : fetchMovies,
    options
  )
  return { movies, error: genresError || moviesError, loading: isLoading }
}

export default useMovies
