import React from 'react'
import styled from 'styled-components'
import MovieDetails from './MovieDetails.jsx'
import Logo from './Logo.jsx'
import GlyphButton from './GlyphButton.jsx'
import glyphUrl from './assets/glyph_close.svg'

const StyledMovieDetailsTile = styled.section`
  --height: var(--inherit-height, var(--tile-header-height));
  --padding-horizontal: var(--inherit-padding-horizontal, var(--tile-padding-horizontal));
  --padding-vertical: var(--inherit-padding-vertical, var(--tile-padding-vertical));

  background-color: var(--parent-color-background);
  box-sizing: border-box;
  flex: 1;
  min-height: var(--height);
  max-height: var(--height);
  padding: 65px var(--padding-horizontal) var(--padding-horizontal);
  position: relative;

  > :nth-child(1) {
    left: var(--padding-horizontal);
    position: absolute;
    top: var(--padding-vertical);
  }

  > :nth-child(2) {
    position: absolute;
    right: var(--padding-vertical);
    top: var(--padding-vertical);
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
