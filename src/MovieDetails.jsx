import React from 'react'
import styled from 'styled-components'

const StyledMovieDetails = styled.div`
  color: #ffffffb3;
  display: flex;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 100;
  gap: 25px;
  margin: 0;
  padding: 0;
  width: 100%;
`

const Header = styled.div`
  align-items: center;
  display: flex;
  gap: 25px;
`

const Poster = styled.div.attrs({ role: 'img' })`
  background-image: url('${(props) => props.$imageUrl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 455px;
  min-width: 322px;
  width: 322px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 25px;
`

const Title = styled.span`
  color: #fff;
  font-size: 40px;
  text-align: left;
  text-transform: uppercase;
`

const Rating = styled.span`
  border: 1px solid #fff;
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  width: 60px;
`

const Genres = styled.span`
  color: #ffffff80;
  font-size: 14px;
  text-align: left;
`

const Details = styled.span`
  color: #f65261;
  display: flex;
  font-size: 24px;
  gap: 50px;
`

const ReleaseYear = styled.span``

const Duration = styled.span``

const Description = styled.span`
  font-size: 20px;
`

export default function MovieDetails({
  imageUrl,
  title,
  releaseYear,
  genres = [],
  rating,
  duration,
  description,
}) {
  const hours = duration ? Math.floor(duration / 60) : 0
  const minutes = duration ? duration - hours * 60 : 0

  return (
    <StyledMovieDetails>
      <Poster $imageUrl={imageUrl} />
      <Info>
        <Header>
          <Title>{title || 'Unknown'}</Title>
          <Rating>{rating || 'N/A'}</Rating>
        </Header>
        <Genres>{genres.length > 0 ? genres.join(', ') : 'Unknown'}</Genres>
        <Details>
          <ReleaseYear>{releaseYear || 'Unknown'}</ReleaseYear>
          <Duration>
            {(duration && `${hours}h ${minutes}min`) || 'N/A'}
          </Duration>
        </Details>
        <Description>{description || 'Unknown'}</Description>
      </Info>
    </StyledMovieDetails>
  )
}
