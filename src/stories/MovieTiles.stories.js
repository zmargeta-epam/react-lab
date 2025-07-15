import MovieTiles from '../MovieTiles.jsx'

export default {
  title: 'MovieTiles',
  component: MovieTiles,
  tags: ['autodocs'],
}
export const Default = {
  args: {
    movies: [
      {
        imageUrl:
          'https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        title: 'Pulp Fiction',
        releaseYear: 1994,
        genres: ['Thriller', 'Crime', 'Comedy'],
      },
      {
        imageUrl:
          'https://www.themoviedb.org/t/p/w1280/6d5XOczc226jECq0LIX0siKtgHR.jpg',
        title: 'No Country for Old Men',
        releaseYear: 2007,
        genres: ['Crime', 'Drama', 'Thriller'],
      },
    ],
  },
}
