import React from 'react'
import styled from 'styled-components'
import SearchTile from './SearchTile.jsx'
import MovieDetailsTile from './MovieDetailsTile.jsx'
import GenreSelect from './GenreSelect.jsx'
import MovieTiles from './MovieTiles.jsx'
import SortControl from './SortControl.jsx'
import Logo from './Logo.jsx'
import { SortCriteria } from './SortCriteria.js'

const Header = styled.div`
  border-bottom: 10px solid #555;
  box-sizing: border-box;
  min-height: 540px;
`

const Menu = styled.div`
  display: flex;
  border-bottom: 2px solid #424242;
  box-sizing: border-box;
  justify-content: space-between;
  margin: 0 50px 10px;
`

const Content = styled.div`
  margin: 40px 50px 50px;
`

const Footer = styled.div`
  align-items: center;
  background-color: #424242;
  display: flex;
  height: 60px;
  justify-content: center;
`

export default function MoviesPage() {
  const genres = ['Documentary', 'Comedy', 'Horror', 'Crime']
  const [movies, setMovies] = React.useState([
    {
      id: '01K0BXGFFSJZD9XVQTHCSA6TF5',
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      title: 'Pulp Fiction',
      releaseYear: 1994,
      genres: ['Thriller', 'Crime', 'Comedy'],
      duration: 154,
      description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up\
boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip\
back and forth in time.`,
      rating: 8.5,
    },
    {
      id: '01K0BXGWNH15RBS3M49CKR5VEK',
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/6d5XOczc226jECq0LIX0siKtgHR.jpg',
      title: 'No Country for Old Men',
      releaseYear: 2007,
      genres: ['Crime', 'Drama', 'Thriller'],
      duration: 122,
      description: `Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but\
methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of\
prey and predator blur as the violent pursuit of money and justice collide`,
      rating: 7.9,
    },
    {
      id: '01K0BXH6JWNCMXZJYM0GYHF8TA',
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/4MpN4kIEqUjW8OPtOQJXlTdHiJV.jpg',
      title: 'Batman Begins',
      releaseYear: 2005,
      genres: ['Action', 'Crime', 'Drama'],
      duration: 140,
      description: `Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the\
corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a\
symbol of fear for the criminal underworld - The Batman.`,
      rating: 7.7,
    },
    {
      id: '01K0BXHFZKVNJ141GZ3YJQNZWE',
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      title: 'Interstellar',
      releaseYear: 2014,
      genres: ['Adventure', 'Drama', 'Science Fiction'],
      duration: 169,
      description: `The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the\
limitations on human space travel and conquer the vast distances involved in an interstellar voyage.`,
      rating: 8.5,
    },
    {
      id: '01K0BXHTVW3SMA08TMA5FB7CCB',
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/o9VXYOuaJxCEKOxbA86xqtwmqYn.jpg',
      title: 'Manchester by the Sea',
      releaseYear: 2017,
      genres: ['Drama'],
      duration: 138,
      description: `After his older brother passes away, Lee Chandler is forced to return home to care for his\
16-year-old nephew. There he is compelled to deal with a tragic past that separated him from his family and the\
community where he was born and raised.`,
      rating: 7.5,
    },
    {
      id: '01K0BXJ6DBSVGJP4NT0S14DA00',
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg',
      title: 'Once Upon a Time... in Hollywood',
      releaseYear: 2019,
      genres: ['Comedy', 'Drama', 'Thriller'],
      duration: 162,
      description: `Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman\
Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the\
young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…`,
      rating: 7.4,
    },
  ])

  const [queryText, setQueryText] = React.useState(undefined)
  const [activeGenre, setActiveGenre] = React.useState('All')
  const [sortCriteria, setSortCriteria] = React.useState(SortCriteria.ReleaseDate)
  const [activeMovie, setActiveMovie] = React.useState(undefined)

  return (
    <React.Fragment>
      <Header>
        {activeMovie ? (
          <MovieDetailsTile movie={activeMovie} onClose={() => setActiveMovie(undefined)} />
        ) : (
          <SearchTile
            queryText={queryText}
            onSearch={setQueryText}
            onAddMovie={() => console.log('onAddMovie')}
          />
        )}
      </Header>
      <Menu>
        <GenreSelect values={['All', ...genres]} selected={activeGenre} onChange={setActiveGenre} />
        <SortControl value={sortCriteria} onChange={setSortCriteria} />
      </Menu>
      <Content>
        <MovieTiles movies={movies} onSelect={setActiveMovie} />
      </Content>
      <Footer>
        <Logo />
      </Footer>
    </React.Fragment>
  )
}
