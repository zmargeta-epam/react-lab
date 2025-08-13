import React from 'react'
import Dialog from './Dialog.jsx'
import MovieForm from './MovieForm.jsx'
import { P } from './MoviesPage.jsx'
import { useParams } from 'react-router-dom'
import useMovie from './useMovie.js'
import useNavigateWithQueryParams from './useNavigateWithQueryParams.js'

const EditMoviePage = () => {
  const { movieId } = useParams()
  const [movie] = useMovie(movieId, { suspense: true })
  const navigate = useNavigateWithQueryParams([P.ActiveGenre, P.SortCriteria])

  return (
    <Dialog title="Edit Movie" visible={true} onHide={() => navigate(`/${movieId}`)}>
      <MovieForm
        {...movie}
        onSubmit={(it) => {
          console.log(it)
          navigate(`/${movieId}`)
        }}
      />
    </Dialog>
  )
}

export default EditMoviePage
