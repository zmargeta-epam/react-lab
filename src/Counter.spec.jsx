import Counter from './Counter'
import React from 'react'
import { afterEach, describe, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

describe('Counter', () => {
  it('renders the default value', () => {
    // arrange
    render(<Counter />)

    // assert
    screen.getByText('0')
  })

  it('renders the initial value', () => {
    // arrange
    render(<Counter initialValue={1} />)

    // assert
    screen.getByText('1')
  })

  it('increments and renders the value', async () => {
    // arrange
    const user = userEvent.setup()
    render(<Counter />)

    // act
    await user.click(screen.getByRole('button', { name: '+' }))

    // assert
    screen.getByText('1')
  })

  it('decrements and renders the value', async () => {
    // arrange
    const user = userEvent.setup()
    render(<Counter />)

    // act
    await user.click(screen.getByRole('button', { name: '-' }))

    // assert
    screen.getByText('-1')
  })

  afterEach(() => {
    cleanup()
  })
})
