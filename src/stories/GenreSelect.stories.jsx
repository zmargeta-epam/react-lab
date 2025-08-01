import GenreSelect from '../GenreSelect.jsx'
import { fn } from 'storybook/test'
import { useArgs } from 'storybook/preview-api'

export default {
  title: 'GenreSelect',
  component: GenreSelect,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    values: ['All', 'Documentary', 'Comedy', 'Horror', 'Thriller', 'Crime'],
    selected: 'All',
    onChange: fn(),
  },
  render: function Render(args) {
    const { onChange } = args
    const [{ selected }, updateArgs] = useArgs()
    return (
      <GenreSelect
        {...args}
        selected={selected}
        onChange={(it) => {
          onChange?.(it)
          updateArgs({ selected: it })
        }}
      />
    )
  },
}
