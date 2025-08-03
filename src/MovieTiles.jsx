import React from 'react'
import styled from 'styled-components'
import MovieTile from './MovieTile.jsx'

const StyledMovieTiles = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: calc(4 * var(--ui-control-gap));
`

const MovieTiles = ({ movies = [], onSelectMovie, onEditMovie, onDeleteMovie }) => (
  <StyledMovieTiles>
    {movies.map((it, idx) => (
      <MovieTile
        key={it?.id ?? it?.title ?? idx}
        onClick={(e) => onSelectMovie?.(it, e)}
        onEditMovie={() => onEditMovie?.(it)}
        onDeleteMovie={() => onDeleteMovie?.(it)}
        {...it}
      />
    ))}
  </StyledMovieTiles>
)

export default MovieTiles
