// import { useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/user/movies');
//         setMovies(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   return (
//     <div>
//       {movies.map((movie) => (
//         <div key={movie._id}>
//           <h2>{movie.movieName}</h2>
//           <img src={`http://localhost:3000/uploads/${movie.poster}`} alt="Movie Poster" />
//           {/* Other movie details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import MovieCard from './MovieCard';
import Navbar from '../components/Navbar'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/movies/db');
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    
    <div className='w-screen h-screen bg-black'>
      <div className=''>
        <Navbar isScrolled={isScrolled} />
        </div>
        <div className='pt-16'>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            {/* <div className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold mb-2">{movie.movieName}</h2>
              <img className="w-full rounded" src={`http://localhost:3000/uploads/${movie.poster}`} alt="Movie Poster" />
            
            </div> */}
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default MovieList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import MovieCard from './MovieCard';

// const MovieList = () => {
//   const [movies, setMovies] = useState([]);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/user/movies');
//         setMovies(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   window.onscroll = () => {
//     setIsScrolled(window.pageYOffset === 0 ? false : true);
//     return () => (window.onscroll = null);
//   };

//   return (
//     <div>
//       {movies.map((movie) => (
//         <MovieCard key={movie._id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default MovieList;

// import { Link, Outlet } from 'react-router-dom';
// import MovieCard from './MovieCard';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MoviesList = () => {
//   // Your code for fetching movie data
//   const [movies, setMovies] = useState([]);
//     const [isScrolled, setIsScrolled] = useState(false);
  
//     useEffect(() => {
//       const fetchMovies = async () => {
//         try {
//           const response = await axios.get('http://localhost:3000/api/user/movies');
//           setMovies(response.data);
//         } catch (error) {
//           console.error(error);
//         }
//       };
  
//       fetchMovies();
//     }, []);
  
//     window.onscroll = () => {
//       setIsScrolled(window.pageYOffset === 0 ? false : true);
//       return () => (window.onscroll = null);
//     };
  
//   return (
//     <div>
//       <h1>Movies List</h1>
//       {/* Render the list of movies */}
//       {movies.map((movie) => (
//         <Link key={movie.id} to={`/movies/${movie.id}`}>
//           <MovieCard movie={movie} />
//         </Link>
//       ))}

//       {/* Render the nested routes */}
//       <Outlet />
//     </div>
//   );
// };

// export default MoviesList;
