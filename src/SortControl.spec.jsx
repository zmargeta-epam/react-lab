import SortControl from './SortControl'
import React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { SortCriteria } from './SortCriteria.js'
import { userEvent } from '@testing-library/user-event'

describe('SortControl', () => {
  it('renders default option', () => {
    // arrange
    render(<SortControl />)

    // assert
    expect(screen.getByText('Release Date')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveValue(
      SortCriteria.RELEASE_DATE.toString()
    )
  })

  it('renders selected option', () => {
    // arrange
    render(<SortControl defaultValue={SortCriteria.TITLE} />)

    // assert
    expect(screen.getByRole('combobox')).toHaveValue(
      SortCriteria.TITLE.toString()
    )
  })

  it('triggers the callback on sort criteria change', async () => {
    // arrange
    const user = userEvent.setup()
    const callback = vi.fn()
    render(<SortControl onChange={callback} />)

    // act
    await user.selectOptions(screen.getByRole('combobox'), ['Title'])

    // assert
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(SortCriteria.TITLE)
  })

  afterEach(() => {
    cleanup()
  })
})
