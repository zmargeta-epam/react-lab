import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  margin-block-start: 1em;
  margin-block-end: 1em;
`

export default function SearchForm({ defaultValue, onSubmit }) {
  const [, setValue] = React.useState(defaultValue)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    let formData = new FormData(e.target)
    let queryValue = formData.get('query')

    setValue(queryValue)
    onSubmit(queryValue)
  }

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <input id="query" name="query" type="text" defaultValue={defaultValue} />
      <input type="submit" value="Search" />
    </StyledForm>
  )
}
