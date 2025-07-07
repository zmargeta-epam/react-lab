import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div``

const StyledInput = styled.input``

const StyledButton = styled.button``

export default function SearchForm({ query, onSearch }) {
  const [value, setValue] = React.useState(query)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSearch(e.target.value)
    }
  }

  const handleClick = () => {
    onSearch(value)
  }

  return (
    <StyledDiv>
      <StyledInput
        type="text"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={value}
      />
      <StyledButton onClick={handleClick}>Search</StyledButton>
    </StyledDiv>
  )
}
