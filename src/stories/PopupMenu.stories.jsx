import PopupMenu, { PopupMenuItem } from '../PopupMenu.jsx'
import { fn } from 'storybook/test'

export default {
  title: 'PopupMenu',
  component: PopupMenu,
  tags: ['autodocs'],
  args: {
    visible: true,
  },
  render: ({ items, ...args }) => (
    <PopupMenu {...args}>
      {items.map((it) => (
        <PopupMenuItem>{it}</PopupMenuItem>
      ))}
    </PopupMenu>
  ),
}

export const Default = {
  args: {
    items: ['Edit', 'Delete'],
    onHide: fn(),
  },
}
