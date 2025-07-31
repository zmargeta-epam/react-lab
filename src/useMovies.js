import useSWR from 'swr'
import axios from 'axios'
import useGenres from './useGenres.js'
import { Genre, SortCriteria, Movie } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL
const ApiKey = import.meta.env.VITE_API_KEY

const fetchMovies = ({ genre, sortCriteria, context }) => {
  const config = {
    baseURL: BaseUrl,
    headers: {
      Authorization: `Bearer ${ApiKey}`,
    },
    params: {
      with_genres: Genre.using(context).convert(genre),
      sort_by: SortCriteria.convert(sortCriteria),
    },
  }
  return axios
    .get('/3/discover/movie', config)
    .then((res) => res.data.results?.map((item) => Movie.using(context).inverse.convert(item)))
}

const findMovies = ({ searchTerm, context }) => {
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
    .then((res) => res.data.results?.map((item) => Movie.using(context).inverse.convert(item)))
}

const useMovies = (searchTerm, genre, sortCriteria, config) => {
  const [genreLookup, genresError] = useGenres(config)
  const { data, error, isLoading } = useSWR(
    () =>
      genreLookup
        ? { url: '/api/movies', searchTerm, genre, sortCriteria, context: { genreLookup } }
        : null,
    searchTerm ? findMovies : fetchMovies,
    config
  )
  return [data, isLoading, genresError ?? error]
}

export default useMovies
