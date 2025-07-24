import MovieTiles from './MovieTiles'
import React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

describe('MovieTiles', () => {
  it('renders movie tiles', () => {
    // arrange
    render(
      <MovieTiles
        movies={[
          { id: 1, title: 'some_title' },
          { id: 2, title: 'some_other_title' },
        ]}
      />
    )

    // assert
    screen.getByText('some_title')
    screen.getByText('some_other_title')
  })

  it('triggers the callback on selected movie change', async () => {
    // arrange
    const user = userEvent.setup()
    const callback = vi.fn()
    render(
      <MovieTiles
        movies={[
          { id: 1, title: 'some_title' },
          { id: 2, title: 'some_other_title' },
        ]}
        onSelect={callback}
      />
    )

    // act
    await user.click(screen.getByText('some_other_title'))

    // assert
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(
      expect.objectContaining({ id: 2, title: 'some_other_title' })
    )
  })

  afterEach(() => {
    cleanup()
  })
})
