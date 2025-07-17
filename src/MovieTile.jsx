import React from 'react'
import styled from 'styled-components'

const StyledMovieTile = styled.div`
  color: #ffffffb3;
  display: flex;
  flex-direction: column;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  grid-template-rows: 455px 1fr;
  margin: 0;
  padding: 0;
  gap: 25px;
  width: 322px;
`

const Poster = styled.div.attrs({ role: 'img' })`
  background-image: url('${(props) => props.$imageUrl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 455px;
  width: 322px;
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
  text-align: left;
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
  text-align: left;
`

export default function MovieTile({
  imageUrl,
  title,
  releaseYear,
  genres = [],
}) {
  return (
    <StyledMovieTile>
      <Poster $imageUrl={imageUrl} />
      <Details>
        <Title>{title || 'Unknown'}</Title>
        <ReleaseYear>{releaseYear || 'Unknown'}</ReleaseYear>
        <Genres>{genres.length > 0 ? genres.join(', ') : 'Unknown'}</Genres>
      </Details>
    </StyledMovieTile>
  )
}
