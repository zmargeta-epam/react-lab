import React from 'react'
import Button from '../Button.jsx'
import Dialog from '../Dialog.jsx'
import { ButtonSize } from '../ButtonStyles.js'

export default {
  title: 'Dialog',
  component: Dialog,
  render: ({ content, ...args }) => (
    <React.Fragment>
      <Button
        size={ButtonSize.ExtraSmall}
        onClick={() => document.querySelector('dialog').showModal()}
      >
        Show Dialog
      </Button>
      <Dialog
        onClose={() => document.querySelector('dialog').close()}
        {...args}
      >
        <span>{content}</span>
      </Dialog>
    </React.Fragment>
  ),
  tags: ['autodocs'],
}

export const Default = {
  args: {
    title: 'Info',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra a arcu eu eleifend. Fusce dapibus 
nisi eros, eget placerat enim ornare non. Integer vitae diam sagittis, iaculis mauris eget, lobortis ex. Cras luctus 
quam eget augue iaculis, a aliquet mi pharetra. Vivamus fermentum eu mauris quis interdum. Integer iaculis nulla vel 
diam aliquam placerat. In non ipsum eu velit feugiat convallis a eu enim. Fusce luctus feugiat arcu, eu placerat est 
condimentum vel.`,
  },
}
