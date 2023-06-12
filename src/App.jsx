
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chillflix from './pages/Chillflix'
import Registeration from './pages/Registeration'
import Player from './pages/Player'
import Movies from './pages/Movies'

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
      </Routes>
   </BrowserRouter>
  )
}
