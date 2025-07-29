import React from 'react'
import styled from 'styled-components'
import glyphUrl from './assets/glyph_close.svg'
import GlyphButton from './GlyphButton.jsx'

const StyledDialog = styled.dialog`
  border: 0;
  padding: 0;

  &::backdrop {
    background-color: #232323;
    opacity: 0.9;
  }
`

const Container = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 200;
  background-color: #232323;
  border: 0;
  box-sizing: border-box;
  color: #fff;
  min-height: 350px;
  min-width: 700px;
  max-width: 975px;
  padding: 0;

  & > :nth-child(n) {
    margin: 0 50px 20px;
  }

  & > :nth-child(1) {
    margin: 0;
    align-self: flex-end;
  }

  & > :nth-last-child(1) {
    margin-bottom: 36px;
  }
`

const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 200;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`

export default function Dialog({ children, title, onHide }) {
  return (
    <StyledDialog>
      <Container>
        <GlyphButton imageUrl={glyphUrl} onClick={(e) => onHide?.(e)} />
        <Title>{title}</Title>
        {children}
      </Container>
    </StyledDialog>
  )
}
