import React from 'react'
import styled from 'styled-components'
import MovieDetails from './MovieDetails.jsx'
import Logo from './Logo.jsx'
import GlyphButton from './GlyphButton.jsx'
import glyphUrl from './assets/glyph_close.svg'

const StyledMovieDetailsTile = styled.div`
  box-sizing: border-box;
  min-height: 540px;
  max-height: 540px;
  min-width: 1178px;
  max-width: 1178px;
  padding: 65px 50px 20px;
  position: relative;

  & > :nth-child(1) {
    left: 50px;
    position: absolute;
    top: 20px;
  }

  & > :nth-child(2) {
    right: 20px;
    top: 20px;
    position: absolute;
  }
`

const MovieDetailsTile = ({ movie, onClose }) => (
  <StyledMovieDetailsTile>
    <Logo />
    <GlyphButton imageUrl={glyphUrl} onClick={onClose} />
    <MovieDetails {...movie} />
  </StyledMovieDetailsTile>
)

export default MovieDetailsTile
