import React from 'react'
import styled from 'styled-components'
import MovieTile from './MovieTile.jsx'

const StyledMovieTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
`

export default function MovieTiles({ movies = [], onSelect }) {
  return (
    <StyledMovieTiles>
      {movies.map((it, idx) => (
        <MovieTile
          key={it.id || it?.title?.toLowerCase().replace(/ +/, '_') || idx}
          onClick={(e) => onSelect?.(it, e)}
          {...it}
        />
      ))}
    </StyledMovieTiles>
  )
}
