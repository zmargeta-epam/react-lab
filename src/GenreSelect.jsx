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

const GenreSelect = ({ values = [], selected, onChange }) => {
  const isSelected = (it) => it?.toLowerCase() === selected?.toLowerCase()

  return (
    <StyledList role="tablist">
      {values.map((it, idx) => (
        <li
          key={it || idx}
          role="tab"
          className={isSelected(it) ? 'selected' : ''}
          onClick={!isSelected(it) ? (e) => onChange?.(it, e) : undefined}
        >
          {it}
        </li>
      ))}
    </StyledList>
  )
}

export default GenreSelect
