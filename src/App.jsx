import './App.css'
import React from 'react'
import MoviesPage from './MoviesPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MoviesPage />} />
    </Routes>
  </BrowserRouter>
)

export default App
