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
          [SortCriteria.ReleaseDate]: 'Release Date',
          [SortCriteria.Title]: 'Title',
        },
      },
      options: [SortCriteria.ReleaseDate, SortCriteria.Title],
    },
  },
}

export const Default = {
  args: {
    defaultValue: SortCriteria.ReleaseDate,
    onChange: fn(),
  },
}
