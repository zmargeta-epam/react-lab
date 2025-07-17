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

const Poster = styled.div.attrs({ role: 'img' })`
  background-image: url('${(props) => props.$imageUrl}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 455px;
  min-width: 322px;
  width: 322px;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: 100px min-content 60px 1fr;
  grid-template-rows: 60px repeat(3, min-content);
  grid-template-areas:
    'title title rating .'
    'genres genres genres genres'
    'release-year duration duration duration'
    'description description description description';
`

const Title = styled.span`
  color: #fff;
  font-size: 40px;
  grid-area: title;
  line-height: 60px;
  padding-right: 25px;
  text-align: left;
  text-transform: uppercase;
  width: max-content;
`

const ReleaseYear = styled.span`
  color: #f65261;
  font-size: 24px;
  grid-area: release-year;
  padding: 25px 0;
`

const Genres = styled.span`
  color: #ffffff80;
  font-size: 14px;
  grid-area: genres;
  text-align: left;
`

const Rating = styled.span`
  border: 1px solid #fff;
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  grid-area: rating;
  height: 60px;
  line-height: 60px;
  max-height: 60px;
  max-width: 60px;
  min-height: 60px;
  min-width: 60px;
  text-align: center;
  width: 60px;
`

const Duration = styled.span`
  color: #f65261;
  font-size: 24px;
  grid-area: duration;
  padding: 25px 0;
`

const Description = styled.span`
  font-size: 20px;
  grid-area: description;
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
      <Details>
        <Title>{title || 'Unknown'}</Title>
        <Rating>{rating || 'N/A'}</Rating>
        <Genres>{genres.length > 0 ? genres.join(', ') : 'Unknown'}</Genres>
        <ReleaseYear>{releaseYear || 'Unknown'}</ReleaseYear>
        <Duration>{(duration && `${hours}h ${minutes}min`) || 'N/A'}</Duration>
        <Description>{description || 'Unknown'}</Description>
      </Details>
    </StyledMovieDetails>
  )
}
