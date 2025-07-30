import React from 'react'
import styled from 'styled-components'
import { ButtonSize, ButtonVariant } from './ButtonStyles.js'

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid #f65261;
  border-radius: 4px;
  box-sizing: border-box;
  display: block;
  color: #f65261;
  cursor: pointer;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 57px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
  max-width: max-content;
  min-width: 180px;
  padding: 0 16px;

  &:focus {
    text-decoration: underline;
  }

  &.primary {
    background-color: #f65261;
    border: 0;
    color: #fff;
  }

  &.secondary {
    background-color: #606060ad;
    border: 0;
    color: #f65261;
  }

  &.small {
    height: 46px;
  }

  &.x-small {
    height: 36px;
    min-width: auto;
    padding: 0 12px;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`

const VariantStyles = Object.freeze({
  [ButtonVariant.Primary]: 'primary',
  [ButtonVariant.Secondary]: 'secondary',
})

const SizeStyles = Object.freeze({
  [ButtonSize.ExtraSmall]: 'x-small',
  [ButtonSize.Small]: 'small',
})

const Button = ({
  type = 'button',
  variant = ButtonVariant.Default,
  size = ButtonSize.Medium,
  children,
  onClick,
}) => (
  <StyledButton
    type={type}
    onClick={onClick}
    className={[VariantStyles[variant], SizeStyles[size]].filter((it) => it).join(' ')}
  >
    {children}
  </StyledButton>
)

export default Button
