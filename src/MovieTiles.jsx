import MovieTile from './MovieTile.jsx'
import React from 'react'
import styled from 'styled-components'

const StyledMovieTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
`

export default function MovieTiles({ movies = [] }) {
  return (
    <StyledMovieTiles>
      {movies.map((it, idx) => (
        <MovieTile
          key={it.id || it?.title.toLowerCase().replace(/ +/, '_') || idx}
          {...it}
        />
      ))}
    </StyledMovieTiles>
  )
}
