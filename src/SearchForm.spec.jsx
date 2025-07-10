import SearchForm from './SearchForm.jsx'
import React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'

describe('SearchForm', () => {
  it('renders the initial value', () => {
    // arrange
    render(<SearchForm initialValue="initial_value" onSubmit={vi.fn()} />)

    // assert
    expect(screen.getByRole('searchbox')).toHaveValue('initial_value')
  })

  it('submits the value after clicking the submit button', async () => {
    // arrange
    const user = userEvent.setup()
    const callback = vi.fn()
    render(<SearchForm onSubmit={callback} />)

    // act
    await user.type(screen.getByRole('searchbox'), 'some_value')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    // assert
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith('some_value')
  })

  it('submits the value after typing enter in the search textbox', async () => {
    // arrange
    const user = userEvent.setup()
    const callback = vi.fn()
    render(<SearchForm onSubmit={callback} />)

    // act
    await user.type(screen.getByRole('searchbox'), 'some_value{enter}')

    // assert
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith('some_value')
  })

  afterEach(() => {
    cleanup()
  })
})
