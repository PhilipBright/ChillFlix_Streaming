import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movies/db/${movie._id}`);
  };

  return (
    <div className="movie-card" onClick={handleMovieClick}>
      <Link to={`/movies/db/${movie._id}`} className="movie-link"></Link>
      <img src={`http://localhost:3000/uploads/${movie.poster}`} alt="Movie Poster" />
      <h3>{movie.movieName}</h3>
      {/* Additional movie details */}
    </div>
  );
};

export default MovieCard;
