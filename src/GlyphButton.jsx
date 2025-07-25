import React from 'react'
import styled from 'styled-components'

const StyledGlyphButton = styled.button`
  background-color: #232323;
  border: 0;
  border-radius: 18px;
  box-sizing: border-box;
  height: 36px;
  width: 36px;
  margin: 0;
  padding: 0;
`

const Glyph = styled.div`
  background-color: #fff;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  height: 100%;
  margin: 0;
  // prettier-ignore
  mask-image: url("${(props) => props.$imageUrl}");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 12px;
  padding: 0;
  width: 100%;

  &:hover {
    background-color: #f65261;
  }
`

export default function GlyphButton({ imageUrl, onClick }) {
  return (
    <StyledGlyphButton onClick={(e) => onClick?.(e)}>
      <Glyph $imageUrl={imageUrl} role="img" />
    </StyledGlyphButton>
  )
}
