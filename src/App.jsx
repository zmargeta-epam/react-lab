import './App.css'
import React from 'react'
import styled from 'styled-components'
import SearchForm from './SearchForm.jsx'
import GenreSelect from './GenreSelect.jsx'
import MovieTiles from './MovieTiles.jsx'
import SortControl from './SortControl.jsx'

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function App() {
  const [genres] = React.useState([
    'All',
    'Documentary',
    'Comedy',
    'Horror',
    'Crime',
  ])

  const [selectedGenre] = React.useState('All')

  const [movies] = React.useState([
    {
      id: '01K0BXGFFSJZD9XVQTHCSA6TF5',
      imageUrl:
        'https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      title: 'Pulp Fiction',
      releaseYear: 1994,
      genres: ['Thriller', 'Crime', 'Comedy'],
    },
    {
      id: '01K0BXGWNH15RBS3M49CKR5VEK',
      imageUrl:
        'https://www.themoviedb.org/t/p/w1280/6d5XOczc226jECq0LIX0siKtgHR.jpg',
      title: 'No Country for Old Men',
      releaseYear: 2007,
      genres: ['Crime', 'Drama', 'Thriller'],
    },
    {
      id: '01K0BXH6JWNCMXZJYM0GYHF8TA',
      imageUrl:
        'https://www.themoviedb.org/t/p/w1280/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg',
      title: 'Batman Begins',
      releaseYear: 2005,
      genres: ['Action', 'Crime', 'Drama'],
    },
    {
      id: '01K0BXHFZKVNJ141GZ3YJQNZWE',
      imageUrl:
        'https://www.themoviedb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      title: 'Interstellar',
      releaseYear: 2014,
      genres: ['Adventure', 'Drama', 'Science Fiction'],
    },
    {
      id: '01K0BXHTVW3SMA08TMA5FB7CCB',
      imageUrl:
        'https://www.themoviedb.org/t/p/w1280/o9VXYOuaJxCEKOxbA86xqtwmqYn.jpg',
      title: 'Manchester by the Sea',
      releaseYear: 2017,
      genres: ['Drama'],
    },
    {
      id: '01K0BXJ6DBSVGJP4NT0S14DA00',
      imageUrl:
        'https://www.themoviedb.org/t/p/w1280/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
      title: 'Once Upon a Time in Hollywood',
      releaseYear: 2019,
      genres: ['Comedy', 'Drama', 'Thriller'],
    },
  ])

  return (
    <React.Fragment>
      <SearchForm onSubmit={console.log} />
      <MenuBar>
        <GenreSelect
          values={genres}
          defaultValue={selectedGenre}
          onChange={console.log}
        />
        <SortControl onChange={console.log} />
      </MenuBar>
      <MovieTiles movies={movies} />
    </React.Fragment>
  )
}
