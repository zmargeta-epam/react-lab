import React from 'react'
import Dialog from './Dialog.jsx'
import ConfirmForm from './ConfirmForm.jsx'
import { P } from './MoviesPage.jsx'
import { useParams } from 'react-router-dom'
import useNavigateWithQueryParams from './useNavigateWithQueryParams.js'

const DeleteMoviePage = () => {
  const { movieId } = useParams()
  const navigate = useNavigateWithQueryParams([P.ActiveGenre, P.SortCriteria])

  return (
    <Dialog title="Delete Movie" visible={true} onHide={() => navigate(`/${movieId}`)}>
      <ConfirmForm
        text={'Are you sure you want to delete this movie?'}
        onConfirm={() => {
          console.log(movieId)
          navigate('/')
        }}
      />
    </Dialog>
  )
}

export default DeleteMoviePage
