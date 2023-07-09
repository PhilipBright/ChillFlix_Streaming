import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLikedMovies } from '../store';
import Card from '../components/Card';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/Firebase_config';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function UserLiked() {
  const movies = useSelector((state) => state.ChillFlix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [wishlist, setWishlist] = useState([]);
  

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
  }, [email]);

  // useEffect(() => {
  //   const fetchWishlist = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/user/wishlist'); // Update the endpoint according to your backend setup
  //       setWishlist(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchWishlist();
  // }, []);

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
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {wishlist.map((movie) => (
              <SwiperSlide key={movie._id}>
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <h2 className="text-xl font-bold mb-2">{movie.movieName}</h2>
                  <img className="w-full rounded" src={`http://localhost:3000/uploads/${movie.poster}`} alt="Movie Poster" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
