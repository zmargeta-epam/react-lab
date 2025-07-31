import SearchTile from '../SearchTile.jsx'
import { fn } from 'storybook/test'

const meta = {
  title: 'SearchTile',
  component: SearchTile,
  tags: ['autodocs'],
}

const Default = {
  args: {
    searchTerm: '',
    onSearch: fn(),
    onAddMovie: fn(),
  },
}

export default meta
export { Default }
