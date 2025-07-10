import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  align-items: stretch;
  color: #fff;
  display: flex;
  font-family: Monserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
  gap: 30px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  & li {
    cursor: pointer;
    display: block;
    height: 72px;
    line-height: 72px;
    text-align: center;
  }
  & li.selected {
    border-bottom: 2px solid #f65261;
  }
`

export default function GenreSelect({ values = [], defaultValue, onChange }) {
  const [value, setValue] = React.useState(
    values.find((it) => it.toUpperCase() === defaultValue?.toUpperCase())
  )

  const handleItemClick = (e) => {
    const idx = e.target.dataset.genreId
    setValue(values[idx])
    onChange?.(values[idx])
  }

  return (
    <StyledList>
      {values.map((it, idx) => (
        <li
          key={idx}
          data-genre-id={idx}
          className={it === value ? 'selected' : ''}
          onClick={handleItemClick}
        >
          {it}
        </li>
      ))}
    </StyledList>
  )
}
