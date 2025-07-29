import React from 'react'
import styled from 'styled-components'
import Button from './Button.jsx'
import { ButtonVariant } from './ButtonStyles.js'

const StyledMovieForm = styled.form`
  color: #fff;
  column-gap: 20px;
  display: grid;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 200;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(5, min-content);
  grid-template-areas:
    'l1 r1'
    'l2 r2'
    'l3 r3'
    'description description'
    'button-panel button-panel';
  margin: 0;
  max-width: 875px;
  padding: 0;

  & > label {
    display: block;
  }

  & > label:has(> input[id='title']) {
    grid-area: l1;
  }

  & > label:has(> input[id='image-url']) {
    grid-area: l2;
  }

  & > label:has(> input[id='genres']) {
    grid-area: l3;
  }

  & > label:has(> input[id='release-year']) {
    grid-area: r1;
  }

  & > label:has(> input[id='rating']) {
    grid-area: r2;
  }

  & > label:has(> input[id='duration']) {
    grid-area: r3;
  }

  & > label:has(> textarea[id='description']) {
    grid-area: description;
  }

  & > label > span {
    color: #f65261;
    display: block;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  & input,
  & textarea {
    background-color: #323232f2;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #fff;
    display: block;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 200;
    margin: 0 0 20px;
    width: 100%;
    padding: 0 16px;
  }

  & input {
    height: 57px;
  }

  & input:focus {
    outline: none;
  }

  & textarea {
    height: 200px;
    padding-bottom: 16px;
    padding-top: 16px;
    resize: none;
  }
`

const ButtonPanel = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  grid-area: button-panel;
`

export default function MovieForm({
  imageUrl,
  title,
  releaseYear,
  genres = [],
  rating,
  duration,
  description,
  onSubmit,
}) {
  return (
    <StyledMovieForm
      onSubmit={(e) => {
        e.preventDefault()

        if (onSubmit) {
          const formData = new FormData(e.target)
          onSubmit({
            imageUrl: formData.get('imageUrl'),
            title: formData.get('title'),
            genres: formData
              .get('genres')
              .split(',')
              .map((it) => it.trim()),
            releaseYear: parseInt(formData.get('releaseYear')),
            rating: parseFloat(formData.get('rating')),
            duration: parseInt(formData.get('duration')),
            description: formData.get('description'),
          })
        }
      }}
    >
      <label>
        <span>Title</span>
        <input id="title" name="title" type="text" defaultValue={title} />
      </label>
      <label>
        <span>Movie URL</span>
        <input id="image-url" name="imageUrl" type="text" defaultValue={imageUrl} />
      </label>
      <label>
        <span>Genres</span>
        <input id="genres" name="genres" type="text" defaultValue={genres.join(', ')} />
      </label>
      <label>
        <span>Release Date</span>
        <input id="release-year" name="releaseYear" type="text" defaultValue={releaseYear} />
      </label>
      <label>
        <span>Rating</span>
        <input id="rating" name="rating" type="text" defaultValue={rating} />
      </label>
      <label>
        <span>Runtime</span>
        <input id="duration" name="duration" type="text" defaultValue={duration} />
      </label>
      <label>
        <span>Overview</span>
        <textarea id="description" name="description" defaultValue={description} />
      </label>
      <ButtonPanel>
        <Button type="submit" variant={ButtonVariant.Primary}>
          Submit
        </Button>
        <Button type="reset">Reset</Button>
      </ButtonPanel>
    </StyledMovieForm>
  )
}
