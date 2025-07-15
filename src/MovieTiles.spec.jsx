import MovieTiles from './MovieTiles'
import React from 'react'
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('MovieTiles', () => {
  it('renders movie tiles', () => {
    // arrange
    render(
      <MovieTiles
        movies={[{ title: 'some_title' }, { title: 'some_other_title' }]}
      />
    )

    // assert
    screen.getByText('some_title')
    screen.getByText('some_other_title')
  })
})
