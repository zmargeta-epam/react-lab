import './App.css'
import React from 'react'
import Counter from './Counter.js'
import SearchForm from './SearchForm.jsx'
import GenreSelect from './GenreSelect.jsx'

export default function App() {
  return (
    <React.Fragment>
      <Counter initialValue={1} />
      <SearchForm initialValue="Pulp Fiction" onSubmit={console.log} />
      <GenreSelect
        values={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
        defaultValue="All"
        onChange={console.log}
      />
    </React.Fragment>
  )
}
