import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLikedMovies } from '../store';
import Card from '../components/Card';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/Firebase_config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function UserLiked() {
    const movies = useSelector((state) => state.ChillFlix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className='w-screen h-screen bg-black'>
      <Navbar isScrolled={isScrolled} />
      <div className="px-6 py-12 pt-32">
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {movies.map((movie, index) => (
            <Card
              movieData={movie}
              index={index}
              key={movie.id}
              isLiked={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
