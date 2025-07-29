import MovieDetailsTile from '../MovieDetailsTile.jsx'
import { Default as DefaultMovieDetails } from './MovieDetails.stories.jsx'
import { fn } from 'storybook/test'

export default {
  title: 'MovieDetailsTile',
  component: MovieDetailsTile,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    movie: { ...DefaultMovieDetails.args },
    onClose: fn(),
  },
}
