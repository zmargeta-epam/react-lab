import React, { Suspense, useState } from 'react'
import styled from 'styled-components'
import tmdbLogo from './assets/tmdb_logo.svg'
import SearchTile from './SearchTile.jsx'
import MovieDetailsTile from './MovieDetailsTile.jsx'
import GenreSelect from './GenreSelect.jsx'
import MovieTiles from './MovieTiles.jsx'
import { SortCriteria } from './SortCriteria.js'
import SortControl from './SortControl.jsx'
import LoadingIndicator from './LoadingIndicator.jsx'
import { Converter } from './Converters.js'
import useQueryParams from './useQueryParams.js'
import useMovies from './useMovies.js'
import useMovie from './useMovie.js'

const Header = styled.div`
  border-bottom: 10px solid #555;
  box-sizing: content-box;
  min-height: 540px;
  max-height: 540px;
  min-width: 1178px;
  max-width: 1178px;
  overflow: hidden;
`

const Menu = styled.div`
  display: flex;
  border-bottom: 2px solid #424242;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0 50px 10px;
  min-width: 1078px;
  max-width: 1078px;
`

const Content = styled.div`
  margin: 40px 50px 50px;
  min-width: 1078px;
  max-width: 1078px;
`

const Footer = styled.div`
  align-items: center;
  background-color: #424242;
  color: #ffffff99;
  display: flex;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 10px;
  font-weight: 100;
  gap: 10px;
  height: 60px;
  justify-content: center;
  min-width: 1178px;
  max-width: 1178px;

  & > a {
    // prettier-ignore
    background-image: url("${tmdbLogo}");
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    height: 14px;
    width: 106px;
  }
`

const P = { SearchTerm: 'q', ActiveGenre: 'genre', SortCriteria: 'sort_by' }
const F = { SearchTerm: null, ActiveGenre: 'All', SortCriteria: SortCriteria.Popularity }

const Genres = [F.ActiveGenre, 'Action', 'Documentary', 'Comedy', 'Crime', 'Fantasy', 'Horror']

const QueryParams = [
  {
    name: P.SearchTerm,
    fallback: F.SearchTerm,
    unset: [P.ActiveGenre, P.SortCriteria],
  },
  {
    name: P.ActiveGenre,
    fallback: F.ActiveGenre,
    converter: Converter(
      (value) => Genres.indexOf(value),
      (param) => Genres[param]
    ),
    deps: [P.SearchTerm],
    predicate: ([searchTerm]) => searchTerm === F.SearchTerm,
    unset: [P.SearchTerm],
  },
  {
    name: P.SortCriteria,
    fallback: F.SortCriteria,
    deps: [P.SearchTerm],
    predicate: ([searchTerm]) => searchTerm === F.SearchTerm,
    unset: [P.SearchTerm],
  },
]

const MoviesPage = () => {
  const [searchTerm, setSearchTerm, activeGenre, setActiveGenre, sortCriteria, setSortCriteria] =
    useQueryParams(QueryParams)

  const [activeMovieId, setActiveMovieId] = useState(undefined)
  const [movies] = useMovies(searchTerm, activeGenre, sortCriteria, { suspense: true })
  const [activeMovie] = useMovie(activeMovieId, { suspense: true })

  return (
    <React.Fragment>
      <Header>
        {activeMovieId ? (
          <Suspense fallback={<LoadingIndicator />}>
            <MovieDetailsTile movie={activeMovie} onClose={() => setActiveMovieId(undefined)} />
          </Suspense>
        ) : (
          <SearchTile
            searchTerm={searchTerm}
            onSearch={setSearchTerm}
            onAddMovie={() => console.log('onAddMovie')}
          />
        )}
      </Header>
      <Menu>
        <GenreSelect values={Genres} selected={activeGenre} onChange={setActiveGenre} />
        <SortControl value={sortCriteria} onChange={setSortCriteria} />
      </Menu>
      <Content>
        <Suspense fallback={<LoadingIndicator />}>
          <MovieTiles
            movies={movies}
            onSelectMovie={(it) => setActiveMovieId(it.id)}
            onEditMovie={() => console.log('onEditMovie')}
            onDeleteMovie={() => console.log('onDeleteMovie')}
          />
        </Suspense>
      </Content>
      <Footer>
        <span>POWERED BY</span>
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" />
      </Footer>
    </React.Fragment>
  )
}

export default MoviesPage
