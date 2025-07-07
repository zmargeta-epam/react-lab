import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul``

const StyledListItem = styled.li`
  color: ${(props) => (props.selected ? 'red' : 'black')};
`

export default function GenreSelect({ genres, selected, onSelect }) {
  const [genre, setGenre] = React.useState(selected)

  const handleClick = (selectedGenre) => {
    setGenre(selectedGenre)
    onSelect(selectedGenre)
  }

  return (
    <StyledList>
      {genres.map((g) => (
        <StyledListItem
          key={g}
          selected={g === genre}
          onClick={() => handleClick(g)}
          value={g}
        >
          {g}
        </StyledListItem>
      ))}
    </StyledList>
  )
}
