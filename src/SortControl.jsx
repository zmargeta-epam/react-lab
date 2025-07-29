import React from 'react'
import styled from 'styled-components'
import { SortCriteria } from './SortCriteria.js'

const StyledSortControl = styled.label`
  display: flex;
  color: #ffffff99;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  gap: 30px;
  height: 60px;
  line-height: 60px;
  text-transform: uppercase;

  & > select {
    align-items: center;
    background-color: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
    font: inherit;
    line-height: inherit;
    outline: none;
    text-transform: uppercase;
  }
`

export default function SortControl({ value = SortCriteria.Popularity, onChange }) {
  return (
    <StyledSortControl>
      Sort by
      <select
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value)

          if (value !== newValue) {
            onChange?.(newValue)
          }
        }}
      >
        <option value={SortCriteria.Popularity}>Popularity</option>
        <option value={SortCriteria.ReleaseDate}>Release Date</option>
        <option value={SortCriteria.Title}>Title</option>
      </select>
    </StyledSortControl>
  )
}
