import Dialog from './Dialog'
import React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { userEvent } from '@testing-library/user-event'

describe('Dialog', () => {
  it('renders content', () => {
    // arrange
    render(<Dialog title="some_title">some_content</Dialog>)

    // act
    document.querySelector('dialog').showModal()

    // assert
    expect(screen.queryByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('some_title')).toBeInTheDocument()
    expect(screen.getByText('some_content')).toBeInTheDocument()
  })

  afterEach(() => {
    cleanup()
  })
})
