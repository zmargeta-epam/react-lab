import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  align-items: stretch;
  color: #fff;
  display: flex;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
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
  const [index, setIndex] = React.useState(
    values.findIndex((it) => it.toUpperCase() === defaultValue?.toUpperCase())
  )

  return (
    <StyledList>
      {values.map((it, idx) => (
        <li
          key={idx}
          data-index={idx}
          className={it === values[index] ? 'selected' : ''}
          onClick={(event) => {
            const newIndex = event.target.dataset.index
            if (index !== newIndex) {
              setIndex(newIndex)
              onChange?.(values[newIndex])
            }
          }}
        >
          {it}
        </li>
      ))}
    </StyledList>
  )
}
