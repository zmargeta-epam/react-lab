import SortControl from '../SortControl.jsx'
import { fn } from 'storybook/test'
import { SortCriteria } from '../SortCriteria.js'

export default {
  title: 'SortControl',
  component: SortControl,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: {
        type: 'select',
        labels: {
          [SortCriteria.Popularity]: 'Popularity',
          [SortCriteria.ReleaseDate]: 'Release Date',
          [SortCriteria.Title]: 'Title',
        },
      },
      options: [SortCriteria.Popularity, SortCriteria.ReleaseDate, SortCriteria.Title],
    },
  },
}

export const Default = {
  args: {
    value: SortCriteria.Popularity,
    onChange: fn(),
  },
}
