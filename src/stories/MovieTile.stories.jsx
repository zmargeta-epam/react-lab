import MovieTile from '../MovieTile.jsx'
import { fn } from 'storybook/test'

export default {
  title: 'MovieTile',
  component: MovieTile,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    imageUrl:
      'https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    title: 'Pulp Fiction',
    releaseYear: 1994,
    genres: ['Thriller', 'Crime', 'Comedy'],
    onClick: fn(),
    onEditMovie: fn(),
    onDeleteMovie: fn(),
  },
}

export const Unavailable = {
  args: {
    onClick: fn(),
    onEditMovie: fn(),
    onDeleteMovie: fn(),
  },
}
