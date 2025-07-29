import React from 'react'
import Button from '../Button.jsx'
import Dialog from '../Dialog.jsx'
import { ButtonSize, ButtonVariant } from '../ButtonStyles.js'
import MovieForm from '../MovieForm.jsx'

export default {
  title: 'Dialog',
  component: Dialog,
  render: ({ content, ...args }) => (
    <React.Fragment>
      <Button size={ButtonSize.ExtraSmall} onClick={() => document.querySelector('dialog').showModal()}>
        Show Dialog
      </Button>
      <Dialog onHide={() => document.querySelector('dialog').close()} {...args}>
        {content}
      </Dialog>
    </React.Fragment>
  ),
  tags: ['autodocs'],
}

export const Default = {
  args: {
    title: 'Info',
    content: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra a arcu eu eleifend. Fusce dapibus nisi
        eros, eget placerat enim ornare non. Integer vitae diam sagittis, iaculis mauris eget, lobortis ex. Cras luctus
        quam eget augue iaculis, a aliquet mi pharetra. Vivamus fermentum eu mauris quis interdum. Integer iaculis nulla
        vel diam aliquam placerat. In non ipsum eu velit feugiat convallis a eu enim. Fusce luctus feugiat arcu, eu
        placerat est condimentum vel.
      </span>
    ),
  },
}

export const AddMovie = {
  args: {
    title: 'Add Movie',
    content: <MovieForm onSubmit={() => document.querySelector('dialog').close()} />,
  },
}

export const EditMovie = {
  args: {
    title: 'Edit Movie',
    content: (
      <MovieForm
        imageUrl="https://www.themoviedb.org/t/p/w1280/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
        title="Pulp Fiction"
        releaseYear={1994}
        genres={['Thriller', 'Crime', 'Comedy']}
        rating={8.5}
        duration={154}
        description={`A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer\
converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously\
trip back and forth in time.`}
        onSubmit={() => document.querySelector('dialog').close()}
      />
    ),
  },
}

export const DeleteMovie = {
  args: {
    title: 'Delete Movie',
    content: (
      <div style={{ alignItems: 'flex-end', display: 'flex', flexDirection: 'column' }}>
        <span style={{ alignSelf: 'flex-start', paddingBottom: '36px' }}>
          Are you sure you want to delete this movie?
        </span>
        <Button variant={ButtonVariant.Primary} onClick={() => document.querySelector('dialog').close()}>
          Confirm
        </Button>
      </div>
    ),
  },
}
