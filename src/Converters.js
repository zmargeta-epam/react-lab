import { SortCriteria } from './SortCriteria.js'

const toImageUrl = (value) => value && `https://www.themoviedb.org/t/p/w1280${value}`

const toReleaseYear = (value) => value && new Date(value).getFullYear()

const toGenreUsing = (genreLookup) => (id) => genreLookup?.get(id) || undefined

const toGenreLookup = (values) => values?.reduce((acc, cur) => acc.set(cur.id, cur.name), new Map())

const toMovieUsing =
  (lookups) =>
  ({
    id,
    poster_path,
    title,
    vote_average,
    genre_ids,
    genres,
    release_date,
    runtime,
    overview,
  }) => ({
    id,
    imageUrl: toImageUrl(poster_path),
    title,
    rating: vote_average?.toFixed(1),
    genres:
      genres?.map((it) => it.name) ||
      genre_ids.map(toGenreUsing(lookups?.genres)).filter((it) => it),
    releaseYear: toReleaseYear(release_date),
    duration: runtime,
    description: overview,
  })

const toGenreDtoUsing = (genreLookup) => (value) =>
  value !== 'All'
    ? genreLookup?.entries().find(([, name]) => name?.toLowerCase() === value?.toLowerCase())?.[0]
    : undefined

const toSortByDto = (value) => {
  let dtoValue = undefined
  switch (value) {
    case SortCriteria.Popularity:
      dtoValue = 'popularity.desc'
      break
    case SortCriteria.ReleaseDate:
      dtoValue = 'primary_release_date.desc'
      break
    case SortCriteria.Title:
      dtoValue = 'original_title.asc'
      break
  }
  return dtoValue
}

const Converter = (convert, inverse) =>
  Object.freeze({
    convert: convert,
    inverse: {
      convert: inverse,
    },
  })

Converter.Nop = Object.freeze({
  convert: (it) => it,
  inverse: {
    convert: (it) => it,
  },
})

export { Converter, toMovieUsing, toGenreDtoUsing, toGenreLookup, toSortByDto }
