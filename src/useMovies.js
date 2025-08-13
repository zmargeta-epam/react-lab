import useSWR from 'swr'
import axios from 'axios'
import { Genre, Movie, SortCriteria } from './Converters.js'

const BaseUrl = import.meta.env.VITE_API_URL

const fetcher = ([, args]) =>
  args.query
    ? axios
        .get('/movies', {
          baseURL: BaseUrl,
          params: {
            search: args.query,
            searchBy: 'title',
          },
        })
        .then((result) => result.data.data?.map((item) => Movie.inverse.convert(item)))
    : axios
        .get('/movies', {
          baseURL: BaseUrl,
          params: {
            filter: Genre.convert(args.genre),
            sortBy: SortCriteria.convert(args.sortBy),
            sortOrder: 'desc',
          },
        })
        .then((result) => result.data.data?.map((item) => Movie.inverse.convert(item)))

const useMovies = (query, genre, sortBy, config) => {
  const { data, error, isLoading } = useSWR(
    ['/api/movies', { query, genre, sortBy }],
    fetcher,
    config
  )
  return [data, isLoading, error]
}

export default useMovies
