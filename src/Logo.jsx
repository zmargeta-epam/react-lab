import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
  color: #f65261;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 20px;
`

export default function Logo() {
  return (
    <StyledLogo>
      <strong>netflix</strong>
      <span>roulette</span>
    </StyledLogo>
  )
}
