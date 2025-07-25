import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  align-items: stretch;
  box-sizing: border-box;
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
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  & li.selected {
    box-shadow: 0 3px #f65261;
  }
`

export default function GenreSelect({ values = [], defaultValue, onChange }) {
  const [index, setIndex] = React.useState(
    values.findIndex((it) => it.toLowerCase() === defaultValue?.toLowerCase())
  )

  return (
    <StyledList role="tablist">
      {values.map((it, idx) => (
        <li
          role="tab"
          key={it?.toLowerCase().replace(/ +/, '_') || idx}
          className={it === values[index] ? 'selected' : ''}
          onClick={(e) => {
            if (index !== idx) {
              setIndex(idx)
              onChange?.(values[idx], e)
            }
          }}
        >
          {it}
        </li>
      ))}
    </StyledList>
  )
}
