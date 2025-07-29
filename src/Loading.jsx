import React from 'react'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'

const StyledLoading = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 540px;
  width: 100%;
`

export default function Loading() {
  return (
    <StyledLoading>
      <BeatLoader color="#f65261" />
    </StyledLoading>
  )
}
