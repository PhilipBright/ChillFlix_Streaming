
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const MovieListDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/api/user/movies/db/${id}`);
//         const movieData = response.data;
//         setMovie(movieData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMovie();
//   }, [id]);

//   console.log('ID:', id);
//   console.log('Movie:', movie);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{movie.movieName}</h2>
//       {/* Render movie details here */}
//     </div>
//   );
// };

// export default MovieListDetails;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/Firebase_config';
import { useNavigate } from 'react-router-dom';


const MovieListDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [email, setEmail] = useState(undefined)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/movies/db/${id}`);
        const movieData = response.data;
        setMovie(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  console.log('ID:', id);
  console.log('Movie:', movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const backdropImage = movie.poster
    ? `http://localhost:3000/uploads/${movie.poster}`
    : '';
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if(currentUser) setEmail(currentUser.email);
      else navigate('/Login')
    })
    // const addToWishlist = async (movieId) => {
    //   try {
    //     const payload = { movieId };
    //     const response = await axios.post("http://localhost:3000/api/user/wishlist/add", payload);
    //     console.log("Movie added to wishlist:", response.data);
    //     // Handle success message or UI update
    //   } catch (error) {
    //     console.error(error);
    //     // Handle error message or UI update
    //   }
    // };
    const addToWishlist = async (movieId) => {
      try {
        const payload = { movieId };
        const response = await axios.post('http://localhost:3000/api/user/wishlist/add', payload);
        console.log('Movie added to wishlist:', response.data);
        // Handle success message or UI update
      } catch (error) {
        console.error(error);
        // Handle error message or UI update
      }
    };
    

  return (
    <div
      className=" flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white bg-cover  z-[-1]"
      style={{ backgroundImage: `url(${backdropImage})` }}
    >
      <div className='w-full h-20 top-0 absolute'>
        <Navbar />
      </div>
      <div className='w-full pt-16 pl-16'>
        <h1 className="text-8xl font-bold text-white my-4">{movie.movieName}</h1>
        <p className="text-lg my-2">{movie.overview}</p>
        <p>
          <strong>Release Date:</strong> {movie.date}
        </p>
        <p>
          <strong>Genres:</strong> {movie.genre}
        </p>
        <p>
          <strong>Production Companies:</strong> {movie.company}
        </p>
        <div className='flex'>
          <button className="flex items-center justify-center font-bold text-lg mr-4 px-6 h-14 rounded-md cursor-pointer bg-white text-black">
            <img className="w-8" src="https://drive.google.com/uc?id=10gmBaDack0_qDMe1umbWWoEDsGKkkVj6" alt="" />
            <span className="ml-2">PLAY</span>
          </button>

          <button className="flex items-center justify-center font-bold text-lg px-6 h-14 rounded-md cursor-pointer bg-[rgba(0,0,0,0.3)] text-white border border-white">
            <img className="w-8" src="https://drive.google.com/uc?id=1iD6VqHIyaeBe2V-c3o2U5YKl5K5n37Zi" alt="" />
            <span className="ml-2">Trailer</span>
          </button>

          <button
            className="flex items-center justify-center font-bold text-lg mr-4 px-6 h-14 rounded-md cursor-pointer bg-white text-black"
            onClick={() => addToWishlist(movie._id)}
          >+</button>
        </div>
      </div>
    </div>
  );
};

export default MovieListDetails;
