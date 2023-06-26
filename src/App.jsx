
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chillflix from './pages/Chillflix'
import Registeration from './pages/Registeration'
import Player from './pages/Player'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MovieTrailer from './pages/MovieTrailer'
import Dashboard from '../src/Admin/Dashboard'
import Movie from '../src/Admin/components/TableTwo'
import User from '../src/Admin/components/TableOne'
import DefaultLayout from '../src/Admin/layout/DefaultLayout'
import { lazy, useEffect, useState } from 'react'
import MovieModal from './Admin/backend/MovieModal'


// import Movie from '../src/Admin/components/TableTwo'



export default function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/' element={<Chillflix />} />
        <Route exact path='/Registeration' element={<Registeration />} />
        <Route exact path='/Movies' element={<Movies/>} />
        <Route exact path='/Player' element={<Player/>} />
        <Route path="/movies/:id" element={<MovieDetails  />} />

     

  <Route path="/movies/:id/trailer" element={MovieTrailer} />


  <Route path="/MovieModal" element={<MovieModal/>} />
  
  <Route exact path='/Dashboard' element={<DefaultLayout />}>
  <Route index  element={<Dashboard/>} />
  </Route>
  <Route exact path='/Movie' element={<DefaultLayout />}>
  <Route index  element={<Movie/>} />
  </Route>
  <Route exact path='/User' element={<DefaultLayout />}>
  <Route index  element={<User/>} />
  </Route>

 


      </Routes>
   </BrowserRouter>
  )
}
