import React from 'react'
import styled from 'styled-components'
import GlyphButton from './GlyphButton.jsx'
import glyphUrl from './assets/glyph_close.svg'

const StyledPopupMenu = styled.ul`
  align-items: stretch;
  background-color: #232323;
  box-sizing: border-box;
  color: #ffffffcc;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
  margin: 0;
  padding: 0 0 10px;
  max-width: max-content;

  & > :nth-child(1) {
    align-self: flex-end;
  }
`

export default function PopupMenu({ visible = false, children, onHide }) {
  return (
    visible && (
      <StyledPopupMenu role="menu" onMouseLeave={onHide}>
        <GlyphButton imageUrl={glyphUrl} onClick={onHide} />
        {children}
      </StyledPopupMenu>
    )
  )
}

const StyledPopupMenuItem = styled.li`
  box-sizing: border-box;
  color: #ffffffcc;
  cursor: pointer;
  display: block;
  font: inherit;
  line-height: 35px;
  min-width: 150px;
  padding: 5px 20px 5px;
  text-align: left;

  &:hover {
    background-color: #f65261;
    color: #fff;
  }
`

export function PopupMenuItem({ children, onClick }) {
  return (
    <StyledPopupMenuItem role="menuitem" onClick={onClick}>
      {children}
    </StyledPopupMenuItem>
  )
}
