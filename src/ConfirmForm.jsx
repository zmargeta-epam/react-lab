import React from 'react'
import styled from 'styled-components'
import Button from './Button.jsx'
import { ButtonVariant } from './ButtonStyles.js'

const StyledConfirmForm = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  & > span {
    align-self: flex-start;
    padding-bottom: 36px;
  }
`

export default function ConfirmForm({ text, onConfirm }) {
  return (
    <StyledConfirmForm>
      <span>{text}</span>
      <Button variant={ButtonVariant.Primary} onClick={onConfirm}>
        Confirm
      </Button>
    </StyledConfirmForm>
  )
}
