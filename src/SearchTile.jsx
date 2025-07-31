import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SearchForm from './SearchForm'
import Button from './Button.jsx'
import { ButtonSize, ButtonVariant } from './ButtonStyles.js'
import backgroundUrl from './assets/background.jpg'

const StyledSearchTile = styled.div`
  background-image: url('${(props) => props.$imageUrl}');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 540px;
  max-height: 540px;
  min-width: 1178px;
  max-width: 1178px;
`

const GradientOverlay = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 540px;
  max-height: 540px;
  min-width: 1178px;
  max-width: 1178px;
  position: relative;

  & > :nth-child(1) {
    left: 50px;
    position: absolute;
    top: 20px;
  }

  & > :nth-child(2) {
    right: 50px;
    top: 20px;
    position: absolute;
  }
`

const SearchTile = ({ searchTerm, onSearch, onAddMovie }) => (
  <StyledSearchTile $imageUrl={backgroundUrl}>
    <GradientOverlay>
      <Logo />
      <Button variant={ButtonVariant.Secondary} size={ButtonSize.Small} onClick={onAddMovie}>
        + Add Movie
      </Button>
      <SearchForm value={searchTerm} onSubmit={onSearch} />
    </GradientOverlay>
  </StyledSearchTile>
)

export default SearchTile
