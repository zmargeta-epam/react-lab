import Counter from './Counter'
import React from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'

describe('Counter', () => {
  it('renders the default value', () => {
    // arrange
    render(<Counter />)

    // assert
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders the initial value', () => {
    // arrange
    render(<Counter initialValue={1} />)

    // assert
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('increments and renders the value', async () => {
    // arrange
    const user = userEvent.setup()
    render(<Counter />)

    // act
    await user.click(screen.getByRole('button', { name: '+' }))

    // assert
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrements and renders the value', async () => {
    // arrange
    const user = userEvent.setup()
    render(<Counter />)

    // act
    await user.click(screen.getByRole('button', { name: '-' }))

    // assert
    expect(screen.getByText('-1')).toBeInTheDocument()
  })

  afterEach(() => {
    cleanup()
  })
})
