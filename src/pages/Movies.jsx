import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGenres } from '../store'
import { fetchMovies } from '../store'

function Movies() {
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
    <div>Movies</div>
  )
}

export default Movies