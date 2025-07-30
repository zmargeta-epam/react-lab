import React, { Suspense } from 'react'
import styled from 'styled-components'
import SearchTile from './SearchTile.jsx'
import MovieDetailsTile from './MovieDetailsTile.jsx'
import GenreSelect from './GenreSelect.jsx'
import MovieTiles from './MovieTiles.jsx'
import SortControl from './SortControl.jsx'
import { SortCriteria } from './SortCriteria.js'
import LoadingIndicator from './LoadingIndicator.jsx'
import tmdbLogo from './assets/tmdb_logo.svg'
import useMovies from './useMovies.js'
import useMovie from './useMovie.js'

const Header = styled.div`
  border-bottom: 10px solid #555;
  box-sizing: border-box;
  max-height: 540px;
  overflow: hidden;
`

const Menu = styled.div`
  display: flex;
  border-bottom: 2px solid #424242;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0 50px 10px;
`

const Content = styled.div`
  margin: 40px 50px 50px;
`

const Footer = styled.div`
  align-items: center;
  background-color: #424242;
  color: #ffffff99;
  display: flex;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 100;
  gap: 15px;
  height: 60px;
  justify-content: center;

  & > a {
    // prettier-ignore
    background-image: url("${tmdbLogo}");
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    height: 18px;
    width: 137px;
  }
`

const MoviesPage = () => {
  const genres = ['All', 'Action', 'Documentary', 'Comedy', 'Crime', 'Fantasy', 'Horror']
  const [searchTerm, setSearchTerm] = React.useState(undefined)
  const [activeGenre, setActiveGenre] = React.useState('All')
  const [sortCriteria, setSortCriteria] = React.useState(SortCriteria.Popularity)
  const [activeMovieId, setActiveMovieId] = React.useState(undefined)
  const { movies } = useMovies(searchTerm, activeGenre, sortCriteria, { suspense: true })
  const { movie: activeMovie } = useMovie(activeMovieId, { suspense: true })

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
            onSearch={(it) => {
              setActiveGenre('All')
              setSortCriteria(SortCriteria.Popularity)
              setSearchTerm(it)
            }}
            onAddMovie={() => console.log('onAddMovie')}
          />
        )}
      </Header>
      <Menu>
        <GenreSelect
          values={genres}
          selected={activeGenre}
          onChange={(it) => {
            setSearchTerm(undefined)
            setActiveGenre(it)
          }}
        />
        <SortControl
          value={sortCriteria}
          onChange={(it) => {
            setSearchTerm(undefined)
            setSortCriteria(it)
          }}
        />
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
