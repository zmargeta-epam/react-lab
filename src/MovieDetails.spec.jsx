import MovieDetails from './MovieDetails'
import React from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

describe('MovieDetails', () => {
  it('renders default movie details', () => {
    // arrange
    render(<MovieDetails />)

    //assert
    expect(screen.getAllByText('Unknown')).toHaveLength(3)
    expect(screen.getAllByText('N/A')).toHaveLength(3)
  })

  it('renders movie details', () => {
    // arrange
    render(
      <MovieDetails
        imageUrl="some_image_url"
        title="some_title"
        releaseYear={2025}
        genres={['some_genre, some_other_genre']}
        duration={65}
        rating={8.5}
      />
    )

    // assert
    expect(screen.getByRole('img')).toHaveStyle(
      'background-image: url("some_image_url")'
    )
    expect(screen.getByText('some_title')).toBeInTheDocument()
    expect(screen.getByText('8.5')).toBeInTheDocument()
    expect(screen.getByText('some_genre, some_other_genre')).toBeInTheDocument()
    expect(screen.getByText('2025')).toBeInTheDocument()
    expect(screen.getByText('1h 5min')).toBeInTheDocument()
  })

  afterEach(() => {
    cleanup()
  })
})
