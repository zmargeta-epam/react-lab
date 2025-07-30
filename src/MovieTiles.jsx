import React from 'react'
import styled from 'styled-components'
import MovieTile from './MovieTile.jsx'

const StyledMovieTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
`

const MovieTiles = ({ movies = [], onSelectMovie, onEditMovie, onDeleteMovie }) => (
  <StyledMovieTiles>
    {movies.map((it, idx) => (
      <MovieTile
        key={it.id || it?.title?.toLowerCase().replace(/ +/, '_') || idx}
        onClick={(e) => onSelectMovie?.(it, e)}
        onEditMovie={() => onEditMovie?.(it)}
        onDeleteMovie={() => onDeleteMovie?.(it)}
        {...it}
      />
    ))}
  </StyledMovieTiles>
)

export default MovieTiles
