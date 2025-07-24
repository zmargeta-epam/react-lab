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
          [SortCriteria.RELEASE_DATE]: 'RELEASE_DATE',
          [SortCriteria.TITLE]: 'TITLE',
        },
      },
      options: [SortCriteria.RELEASE_DATE, SortCriteria.TITLE],
    },
  },
}

export const Default = {
  args: {
    defaultValue: SortCriteria.RELEASE_DATE,
    onChange: fn(),
  },
}
