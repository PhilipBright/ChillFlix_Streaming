
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chillflix from './pages/Chillflix'
import Registeration from './pages/Registeration'
import Player from './pages/Player'
import Movies from './pages/MoviesList'
import MovieDetails from './pages/MovieDetails'
import MovieTrailer from './pages/MovieTrailer'
import Dashboard from '../src/Admin/Dashboard'
import Movie from '../src/Admin/MovieTable'
import User from '../src/Admin/UserTable'
import  Subscript  from './Admin/SubscriptionTable'
import DefaultLayout from '../src/Admin/layout/DefaultLayout'
import Purchase from './Admin/PurchaseTable'
import Mylist from './pages/UserLiked'
import MovieListDetail from './pages/MovieListDetails';
import Payment from './pages/Payment'
import ApiTrailer from './pages/ApiTrailerPage'
import SearchResult from './pages/SearchResult'
import { lazy, useEffect, useState } from 'react'
import MovieModal from './Admin/backend/MovieModal'


// import Movie from '../src/Admin/components/TableTwo'



export default function App() {

  return (
   <BrowserRouter>
      <Routes>
      <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/" element={<Chillflix />} />
        <Route exact path="/Registeration" element={<Registeration />} />
        <Route exact path="/movies/db" element={<Movies />} />

        <Route exact path="/movies/:id" element={<MovieDetails />} />

        <Route exact path="/movies/:id/trailer" element={<MovieTrailer />} />
        <Route path="/Search" element={<SearchResult />} />
        <Route path="/movies/db/:id" element={<MovieListDetail />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/trailer/:id" element={<ApiTrailer />} />
 
        <Route path="/Player" element={<Player />} />
        <Route path="/mylist" element={<Mylist />} />

        <Route path="/MovieModal" element={<MovieModal />} />

        <Route exact path="/Dashboard" element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route exact path="/Movie" element={<DefaultLayout />}>
          <Route index element={<Movie />} />
        </Route>
        <Route exact path="/User" element={<DefaultLayout />}>
          <Route index element={<User />} />
        </Route>
        <Route exact path="/Subscription" element={<DefaultLayout />}>
          <Route index element={<Subscript />} />
        </Route>
        <Route exact path="/Purchase" element={<DefaultLayout />}>
          <Route index element={<Purchase />} />
        </Route>

 


      </Routes>
   </BrowserRouter>
  )
}
