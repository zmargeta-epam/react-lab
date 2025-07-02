import React from 'react'
import styles from './GenreSelect.module.css'

export default function GenreSelect({genres, selected, onSelect}) {
  const [genre, setGenre] = React.useState(selected)

  const handleClick = (selectedGenre) => {
    setGenre(selectedGenre)
    onSelect(selectedGenre)
  }

  return (
      <ul className={styles.root}>
        {genres.map(g => <li key={g} className={g === genre ? styles.selected : null} onClick={() => handleClick(g)} value={g}>{g}</li>)}
      </ul>
  )
}
