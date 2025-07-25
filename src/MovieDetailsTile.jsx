import React from 'react'
import styled from 'styled-components'
import MovieDetails from './MovieDetails.jsx'
import Logo from './Logo.jsx'
import GlyphButton from './GlyphButton.jsx'
import glyphUrl from './assets/glyph_close.svg'

const StyledMovieDetailsTile = styled.div`
  min-width: 1027px;
  padding: 65px 60px 20px;
  position: relative;

  & > :nth-child(1) {
    left: 60px;
    position: absolute;
    top: 20px;
  }

  & > :nth-child(2) {
    right: 20px;
    top: 20px;
    position: absolute;
  }
`

export default function MovieDetailsTile({ movie, onClose }) {
  return (
    <StyledMovieDetailsTile>
      <Logo />
      <GlyphButton imageUrl={glyphUrl} onClick={(e) => onClose?.(e)} />
      <MovieDetails {...movie} />
    </StyledMovieDetailsTile>
  )
}
