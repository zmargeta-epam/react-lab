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
  min-width: 1027px;
`

const GradientOverlay = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 540px;
  min-width: 1027px;
  position: relative;

  & > :nth-child(1) {
    left: 60px;
    position: absolute;
    top: 20px;
  }

  & > :nth-child(2) {
    right: 60px;
    top: 20px;
    position: absolute;
  }
`

export default function SearchTile({ onSearch, onAddMovie }) {
  return (
    <StyledSearchTile $imageUrl={backgroundUrl}>
      <GradientOverlay>
        <Logo />
        <Button
          variant={ButtonVariant.Secondary}
          size={ButtonSize.Small}
          onClick={(e) => onAddMovie?.(e)}
        >
          + Add Movie
        </Button>
        <SearchForm onSubmit={() => onSearch?.()} />
      </GradientOverlay>
    </StyledSearchTile>
  )
}
