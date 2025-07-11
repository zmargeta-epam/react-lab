import React from 'react'
import styled from 'styled-components'
import { SortCriteria } from './SortCriteria.js'

const StyledSortControl = styled.label`
  display: flex;
  color: #ffffff99;
  font-family: Monserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  gap: 30px;
  height: 72px;
  line-height: 72px;
  text-transform: uppercase;

  & > select {
    align-items: center;
    background-color: transparent;
    border: 0;
    color: #fff;
    cursor: inherit;
    font: inherit;
    line-height: inherit;
    outline: none;
    text-transform: uppercase;
  }
`

export default function SortControl({
  defaultValue = SortCriteria.RELEASE_DATE,
  onChange,
}) {
  const [value, setValue] = React.useState(parseInt(defaultValue))

  return (
    <StyledSortControl>
      Sort by
      <select
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value)
          if (value !== newValue) {
            setValue(newValue)
            onChange?.(newValue)
          }
        }}
      >
        <option value={SortCriteria.RELEASE_DATE}>Release Date</option>
        <option value={SortCriteria.TITLE}>Title</option>
      </select>
    </StyledSortControl>
  )
}
