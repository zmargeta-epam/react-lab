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
    display: block;
    font: inherit;
    font-weight: 400;
    height: 57px;
  }

  & > input:focus {
    outline: none;
  }

  & > input[type='search'] {
    background-color: #323232cc;
    color: #ffffff4d;
    line-height: 57px;
    padding-left: 19px;
    width: 713px;
  }
`

export default function SearchForm({ initialValue, onSubmit }) {
  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault()

        let formData = new FormData(event.target)
        let newValue = formData.get('query')

        onSubmit?.(newValue)
      }}
    >
      <input
        id="query"
        name="query"
        type="search"
        placeholder="What do you want to watch?"
        defaultValue={initialValue}
      />
      <Button variant={ButtonVariant.PRIMARY}>Search</Button>
    </StyledForm>
  )
}
