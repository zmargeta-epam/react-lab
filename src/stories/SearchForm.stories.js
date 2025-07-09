import SearchForm from '../SearchForm.jsx'
import { fn } from 'storybook/test'

export default {
  title: 'SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    initialValue: 'Pulp Fiction',
    onSubmit: fn(),
  },
}
