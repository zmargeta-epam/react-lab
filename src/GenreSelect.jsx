import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style: none;
  padding: 6px;

  & li {
    cursor: pointer;
    display: inline-block;
    padding: 6px;
  }
  & li.selected {
    color: red;
  }
`

export default function GenreSelect({ values = [], defaultValue, onChange }) {
  const [value, setValue] = React.useState(defaultValue)

  const handleItemClick = (e) => {
    setValue(e.target.innerText)
    onChange?.(e.target.innerText)
  }

  return (
    <StyledList>
      {values.map((it) => (
        <li
          key={it}
          className={it === value ? 'selected' : ''}
          onClick={handleItemClick}
        >
          {it}
        </li>
      ))}
    </StyledList>
  )
}
