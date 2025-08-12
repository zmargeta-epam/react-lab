import useSWR from 'swr'
import axios from 'axios'
import { Genre, Movie, SortCriteria } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL

const fetchMovies = ({ genre, sortCriteria }) => {
  const config = {
    baseURL: BaseUrl,
    params: {
      filter: Genre.convert(genre),
      sortBy: SortCriteria.convert(sortCriteria),
      sortOrder: 'desc',
    },
  }
  return axios
    .get('/movies', config)
    .then((res) => res.data.data?.map((item) => Movie.inverse.convert(item)))
}

const findMovies = ({ searchTerm }) => {
  const config = {
    baseURL: BaseUrl,
    params: {
      search: searchTerm,
      searchBy: 'title',
    },
  }
  return axios
    .get('/movies', config)
    .then((res) => res.data.data?.map((item) => Movie.inverse.convert(item)))
}

const useMovies = (searchTerm, genre, sortCriteria, config) => {
  const { data, error, isLoading } = useSWR(
    { url: '/api/movies', searchTerm, genre, sortCriteria },
    searchTerm ? findMovies : fetchMovies,
    config
  )
  return [data, isLoading, error]
}

export default useMovies
