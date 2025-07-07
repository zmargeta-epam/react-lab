import './App.css'
import React from 'react'
import Counter from './Counter.js'
import SearchForm from './SearchForm.jsx'
import GenreSelect from './GenreSelect.jsx'

export default function App() {
  return (
    <React.Fragment>
      <Counter count={1} />
      <SearchForm query="Pulp Fiction" onSearch={(q) => console.log(q)} />
      <GenreSelect
        genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
        selected="All"
        onSelect={(g) => console.log(g)}
      />
    </React.Fragment>
  )
}
