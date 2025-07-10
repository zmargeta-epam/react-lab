import React from 'react'
import styled from 'styled-components'

const StyledMovieTile = styled.div`
  color: #ffffffb3;
  display: flex;
  flex-direction: column;
  font-family: Monserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  gap: 25px;
  margin: 0;
  padding: 0;
  width: 322px;
`

const Poster = styled.div`
  background-image: url('${(props) => props.imageUrl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 455px;
  width: 322px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Title = styled.span`
  font-size: 18px;
`

const Genres = styled.span`
  color: #ffffff80;
  font-size: 14px;
`

const ReleaseYear = styled.span`
  align-self: flex-end;
  border: 1px solid #97979780;
  border-radius: 4px;
  font-size: 14px;
  height: 26px;
  line-height: 26px;
  position: absolute;
  text-align: center;
  width: 66px;
`

export default function MovieTile({
  imageUrl,
  title,
  releaseYear,
  genres = [],
}) {
  return (
    <StyledMovieTile>
      <Poster role="img" imageUrl={imageUrl} />
      <Info>
        <Title>{title || 'Unknown'}</Title>
        <Genres>{genres.length > 0 ? genres.join(', ') : 'Unknown'}</Genres>
        <ReleaseYear>{releaseYear || 'Unknown'}</ReleaseYear>
      </Info>
    </StyledMovieTile>
  )
}
