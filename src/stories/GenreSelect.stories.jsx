import GenreSelect from '../GenreSelect.jsx'
import { fn } from 'storybook/test'

export default {
  title: 'GenreSelect',
  component: GenreSelect,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    values: ['All', 'Documentary', 'Comedy', 'Horror', 'Thriller', 'Crime'],
    defaultValue: 'All',
    onChange: fn(),
  },
}
