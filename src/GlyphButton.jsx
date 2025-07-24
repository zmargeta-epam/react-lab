import React from 'react'
import styled from 'styled-components'

const StyledGlyphButton = styled.button`
  background-color: #fff;
  cursor: pointer;
  height: 30px;
  // prettier-ignore
  mask-image: url("${(props) => props.$imageUrl}");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 10px;
  width: 30px;

  &:hover {
    background-color: #f65261;
  }
`

export default function GlyphButton({ imageUrl, onClick }) {
  return <StyledGlyphButton $imageUrl={imageUrl} onClick={() => onClick?.()} />
}
