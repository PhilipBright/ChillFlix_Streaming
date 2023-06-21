import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import IceAge from '../assets/poster.jpeg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getGenres } from '../store'
import { useSelector } from 'react-redux'
import { fetchMovies } from '../store'
import Slider from '../components/Slider'

export default function Chillflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.ChillFlix.genresLoaded);
  const movies = useSelector((state) => state.ChillFlix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    
    }
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div className='w-screen h-screen '>
      
      
     
      <Navbar isScrolled={isScrolled} />
      <div className='  flex'>
        <img src={IceAge} alt="" />
        <div className=' absolute bottom-60'>
         
          <div>
            <button onClick={() => navigate('/Player')}>play</button>
          </div>
          
        </div>
        
        
      </div>
      <div className=' relative w-screen h-screen flex bg-slate-950'>
      <Slider movies={movies} className="flex " />
      </div>
      
    </div>
  )
}
