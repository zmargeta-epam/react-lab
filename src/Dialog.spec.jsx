import Dialog from './Dialog'
import React from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

describe('Dialog', () => {
  it('renders content', () => {
    // arrange
    render(<Dialog title="title">content</Dialog>)

    // act
    document.querySelector('dialog').showModal()

    // assert
    expect(screen.queryByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  afterEach(() => {
    cleanup()
  })
})
