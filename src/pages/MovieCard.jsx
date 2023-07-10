// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const MovieCard = ({ movie }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleMovieClick = () => {
//     navigate(`/movies/db/${movie._id}`);
//   };

//   return (
    
//     <div className='w-screen h-screen bg-black'>
//     <div className="w-96 h-64" onClick={handleMovieClick}>
//       <Link to={`/movies/db/${movie._id}`} className="movie-link"></Link>
//       <div className={`relative p-8 rounded-md aspect-w-2 aspect-h-3 overflow-hidden ${isHovered ? 'hovered' : ''}`}>
//         <img className="object-cover w-96 h-48 rounded-lg" src={`http://localhost:3000/uploads/${movie.poster}`} alt="Movie Poster" />
//         {isHovered && (
//           <div className="overlay absolute inset-0 flex items-center justify-center">
//             <video className="overlay-video absolute inset-0 w-full h-full object-cover" src={`http://localhost:3000/uploads/${movie.video}`} autoPlay loop muted />
//             <div className="movie-details text-white text-center">
//               <h3 className="movie-title text-xl font-semibold">{movie.movieName}</h3>
//               {/* Additional movie details */}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default MovieCard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movies/db/${movie._id}`);
  };
  
  return (
    
    <div className="w-screen h-screen bg-black">
     
      <div className="w-96 h-64 relative cursor-pointer" onClick={handleMovieClick}>
        <Link to={`/movies/db/${movie._id}`} className="movie-link"></Link>
        <div
          className={`relative p-8 rounded-md aspect-w-2 aspect-h-3 overflow-hidden ${
            isHovered ? 'transform hover:scale-105 transition-transform duration-300' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="object-cover w-96 h-48 rounded-lg"
            src={`http://localhost:3000/uploads/${movie.poster}`}
            alt="Movie Poster"
          />
          {isHovered && (
            <div className="overlay absolute inset-0 flex items-center justify-center">
             
              <div className="movie-details text-white text-center">
                <h3 className="movie-title text-xl font-semibold">{movie.movieName}</h3>
                {/* Additional movie details */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
