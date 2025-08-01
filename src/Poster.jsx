import React from 'react'
import styled from 'styled-components'
import unavailableUrl from './assets/unavailable.svg'

const StyledPoster = styled.div.attrs({ role: 'img' })`
  background-color: #dbdbdb;
  // prettier-ignore
  background-image: url("${(props) => props.$imageUrl || unavailableUrl}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.$imageUrl ? 'cover' : '40%')};
  height: 455px;
  min-height: 455px;
  min-width: 322px;
  width: 322px;
`
export default function Poster({ imageUrl }) {
  return <StyledPoster $imageUrl={imageUrl} />
}
