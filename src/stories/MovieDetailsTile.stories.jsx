import MovieDetailsTile from '../MovieDetailsTile.jsx'
import { Default as DefaultMovieDetails } from './MovieDetails.stories.jsx'
import { fn } from 'storybook/test'

const meta = {
  title: 'MovieDetailsTile',
  component: MovieDetailsTile,
  tags: ['autodocs'],
}

const Default = {
  args: {
    movie: { ...DefaultMovieDetails.args },
    onClose: fn(),
  },
}

export default meta
export { Default }
