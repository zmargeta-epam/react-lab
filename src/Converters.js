import { SortCriteria as SortCriteriaModel } from './SortCriteria.js'

const BaseUrl = import.meta.env.VITE_IMG_URL
const DateFormat = new Intl.DateTimeFormat('en-CA')

const Converter = (convert, inverse) => {
  return Object.freeze({
    convert: convert,
    inverse: {
      convert: inverse,
    },
    using(context) {
      return Converter(
        (...args) => this.convert(...args, context),
        (...args) => this.inverse.convert(...args, context)
      )
    },
  })
}

Converter.Identity = Converter(
  (it) => it,
  (it) => it
)

const ImageUrl = Converter(
  (val) => val?.replace(/^.*\//i, '/'),
  (dto) => (dto ? `${BaseUrl}/t/p/w300${dto}` : undefined)
)

const Genre = Converter(
  (val) => (val !== 'All' ? val : undefined),
  (dto) => dto
)

const ReleaseYear = Converter(
  (val) => (val ? DateFormat.format(new Date(val)) : undefined),
  (dto) => (dto ? new Date(dto).getFullYear() : undefined)
)

const SortCriteria = Converter(
  (val) => {
    let dto = undefined
    switch (Number(val)) {
      case SortCriteriaModel.Popularity:
        dto = 'popularity'
        break
      case SortCriteriaModel.ReleaseDate:
        dto = 'release_date'
        break
      case SortCriteriaModel.Title:
        dto = 'title'
    }
    return dto
  },
  (dto) => {
    let val = undefined
    switch (dto) {
      case 'popularity':
        val = SortCriteriaModel.Popularity
        break
      case 'release_date':
        val = SortCriteriaModel.ReleaseDate
        break
      case 'title':
        val = SortCriteriaModel.Title
    }
    return val
  }
)

const Movie = Converter(
  (val) => val,
  ({ id, poster_path, title, vote_average, genres, release_date, runtime, overview }) => ({
    id,
    imageUrl: ImageUrl.inverse.convert(poster_path),
    title,
    rating: vote_average?.toFixed(1),
    genres: genres,
    releaseYear: ReleaseYear.inverse.convert(release_date),
    duration: runtime,
    description: overview,
  })
)

export { Converter, Genre, ImageUrl, Movie, ReleaseYear, SortCriteria }
