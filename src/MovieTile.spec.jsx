import MovieTile from './MovieTile'
import React from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

describe('MovieTile', () => {
  it('renders default information', () => {
    // arrange
    render(<MovieTile />)

    // assert
    expect(screen.getAllByText('Unknown')).toHaveLength(3)
  })

  it('renders movie information', () => {
    // arrange
    render(
      <MovieTile
        imageUrl="some_image_url"
        title="some_title"
        releaseYear={2025}
        genres={['some_genre, some_other_genre']}
      />
    )

    // assert
    expect(screen.getByRole('img')).toHaveStyle(
      'background-image: url("some_image_url")'
    )
    screen.getByText('some_title')
    screen.getByText('2025')
    screen.getByText('some_genre, some_other_genre')
  })

  afterEach(() => {
    cleanup()
  })
})
