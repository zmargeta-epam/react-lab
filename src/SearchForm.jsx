import React from 'react'
import styles from './SearchForm.module.css'

export default function SearchForm({query, onSearch}) {
  const [value, setValue] = React.useState(query)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSearch(e.target.value)
    }
  }

  const handleClick = () => {
    onSearch(value)
  }

  return (
      <div className={styles.root}>
        <input type="text" onChange={handleChange} onKeyUp={handleKeyUp} value={value}/>
        <button onClick={handleClick}>Search</button>
      </div>
  )
}
