import MoviesPage from '../MoviesPage.jsx'
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router'
import { mocked } from 'storybook/test'
import useGenres from '../useGenres.js'
import useMovies from '../useMovies.js'
import useMovie from '../useMovie.js'

const meta = {
  title: 'MoviesPage',
  component: MoviesPage,
  decorators: [withRouter],
  beforeEach: async () => {
    mocked(useGenres).mockReturnValue([])
    mocked(useMovies).mockReturnValue([
      [
        {
          id: '01K0BXE5JXTNMW82B3GFANGJJX',
          imageUrl: 'https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
          title: 'Pulp Fiction',
          releaseYear: 1994,
          genres: ['Thriller', 'Crime', 'Comedy'],
        },
        {
          id: '01K0BXEPAM3TD2Y5ADA0N79X2V',
          imageUrl: 'https://www.themoviedb.org/t/p/w1280/6d5XOczc226jECq0LIX0siKtgHR.jpg',
          title: 'No Country for Old Men',
          releaseYear: 2007,
          genres: ['Crime', 'Drama', 'Thriller'],
        },
        {},
      ],
    ])
    mocked(useMovie).mockReturnValue([
      {
        imageUrl: 'https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        title: 'Pulp Fiction',
        releaseYear: 1994,
        genres: ['Thriller', 'Crime', 'Comedy'],
        rating: 8.5,
        duration: 154,
        description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up\
boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip\
back and forth in time.`,
      },
    ])
  },
}

const Default = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({ routing: { path: '/' } }),
  },
}

export default meta
export { Default }
