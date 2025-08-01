import SearchTile from '../SearchTile.jsx'
import { fn } from 'storybook/test'

export default {
  title: 'SearchTile',
  component: SearchTile,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    searchTerm: '',
    onSearch: fn(),
    onAddMovie: fn(),
  },
}
