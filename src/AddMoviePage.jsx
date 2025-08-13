import React from 'react'
import Dialog from './Dialog.jsx'
import MovieForm from './MovieForm.jsx'
import { P } from './MoviesPage.jsx'
import useNavigateWithQueryParams from './useNavigateWithQueryParams.js'

const AddMoviePage = () => {
  const navigate = useNavigateWithQueryParams([P.ActiveGenre, P.SortCriteria])

  return (
    <Dialog title="Add Movie" visible={true} onHide={() => navigate('/')}>
      <MovieForm
        onSubmit={(it) => {
          console.log(it)
          navigate('/')
        }}
      />
    </Dialog>
  )
}

export default AddMoviePage
