import React from 'react'
import styled from 'styled-components'
import Button from './Button.jsx'
import { ButtonVariant } from './ButtonStyles.js'

const StyledForm = styled.form`
  color: #fff;
  display: flex;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
  gap: 14px;
  margin: 0;
  padding: 0;

  & > input {
    border: 0;
    box-sizing: border-box;
    display: block;
    font: inherit;
    font-weight: 400;
    height: 57px;
    padding: 0;
  }

  & > input:focus {
    outline: none;
  }

  & > input[type='search'] {
    background-color: #323232cc;
    box-sizing: border-box;
    color: #ffffff4d;
    line-height: 57px;
    padding-left: 19px;
    width: 713px;
  }
`

const SearchForm = ({ value, onSubmit }) => (
  <StyledForm
    onSubmit={(e) => {
      e.preventDefault()

      if (onSubmit) {
        const formData = new FormData(e.target)
        onSubmit(formData.get('query'))
      }
    }}
  >
    <input
      id="query"
      name="query"
      type="search"
      placeholder="What do you want to watch?"
      defaultValue={value}
    />
    <Button type="submit" variant={ButtonVariant.Primary}>
      Search
    </Button>
  </StyledForm>
)

export default SearchForm
