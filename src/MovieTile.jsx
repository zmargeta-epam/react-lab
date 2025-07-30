import React from 'react'
import styled from 'styled-components'
import Poster from './Poster.jsx'
import GlyphButton from './GlyphButton.jsx'
import glyphUrl from './assets/glyph_menu.svg'
import PopupMenu, { PopupMenuItem } from './PopupMenu.jsx'

const StyledMovieTile = styled.article`
  color: #ffffffb3;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  grid-template-rows: 455px 1fr;
  margin: 0;
  padding: 0;
  position: relative;
  gap: 25px;
  width: 322px;

  & > button:nth-of-type(1),
  & > ul[role='menu']:nth-of-type(1) {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 66px;
  grid-template-rows: 18px 14px;
  grid-template-areas:
    'title release-year'
    'genres release-year';
  row-gap: 8px;
`

const Title = styled.span`
  font-size: 18px;
  grid-area: title;
  height: fit-content;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ReleaseYear = styled.span`
  border: 1px solid #97979780;
  border-radius: 4px;
  font-size: 14px;
  grid-area: release-year;
  height: 26px;
  justify-self: end;
  line-height: 26px;
  text-align: center;
  width: 66px;
`

const Genres = styled.span`
  color: #ffffff80;
  font-size: 14px;
  grid-area: genres;
  height: fit-content;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const MovieTile = ({
  imageUrl,
  title,
  releaseYear,
  genres = [],
  onClick,
  onEditMovie,
  onDeleteMovie,
}) => {
  const [menuBtnVisible, setMenuBtnVisible] = React.useState(false)
  const [menuVisible, setMenuVisible] = React.useState(false)

  return (
    <StyledMovieTile
      aria-label={title}
      onClick={onClick}
      onMouseEnter={() => setMenuBtnVisible(true)}
      onMouseLeave={() => setMenuBtnVisible(false)}
    >
      <Poster imageUrl={imageUrl} />
      <Details>
        <Title>{title || 'Unknown'}</Title>
        <ReleaseYear>{releaseYear || 'N/A'}</ReleaseYear>
        <Genres>{genres.length > 0 ? genres.join(', ') : 'Unknown'}</Genres>
      </Details>
      {menuBtnVisible && (
        <GlyphButton
          imageUrl={glyphUrl}
          onClick={(e) => {
            e.stopPropagation()
            setMenuVisible(true)
          }}
        />
      )}
      <PopupMenu
        visible={menuVisible}
        onHide={(e) => {
          e.stopPropagation()
          setMenuVisible(false)
        }}
      >
        <PopupMenuItem
          key="edit"
          onClick={(e) => {
            e.stopPropagation()
            setMenuVisible(false)
            onEditMovie?.(e)
          }}
        >
          Edit
        </PopupMenuItem>
        <PopupMenuItem
          key="delete"
          onClick={(e) => {
            e.stopPropagation()
            setMenuVisible(false)
            onDeleteMovie?.(e)
          }}
        >
          Delete
        </PopupMenuItem>
      </PopupMenu>
    </StyledMovieTile>
  )
}

export default MovieTile
