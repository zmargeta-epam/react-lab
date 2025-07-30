import useSWR from 'swr'
import axios from 'axios'
import useGenres from './useGenres.js'
import { toGenreDtoUsing, toMovieUsing, toSortByDto } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL
const ApiKey = import.meta.env.VITE_API_KEY

const fetchMovies = ({ genre, sortCriteria, lookups }) => {
  const config = {
    baseURL: BaseUrl,
    headers: {
      Authorization: `Bearer ${ApiKey}`,
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
    baseURL: BaseUrl,
    headers: {
      Authorization: `Bearer ${ApiKey}`,
    },
    params: {
      query: searchTerm,
    },
  }
  return axios
    .get('/3/search/movie', config)
    .then((res) => res.data.results?.map(toMovieUsing(lookups)))
}

const useMovies = (searchTerm, genre, sortCriteria, config) => {
  const [genres, genresError] = useGenres(config)
  const { data, error, isLoading } = useSWR(
    () => genres && { url: '/api/movies', searchTerm, genre, sortCriteria, lookups: { genres } },
    searchTerm ? findMovies : fetchMovies,
    config
  )
  return [data, isLoading, genresError || error]
}

export default useMovies
