import react, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { TMDB_BASE_URL } from '../utils/TMDB';
import { API_Key } from '../utils/TMDB';



function MovieDetails(movieData) {
  const navigate = useNavigate()
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    // Inside the component where you navigate to MovieTrailer


  
    const handleVideoClick = () => {
      navigate(`/videos/${movie.id}`);
    };
    
    
    useEffect(() => {
      // Fetch movie details
      const fetchMovieDetails = async () => {
        try {
          // Fetch movie details using the ID from the movie database
          const response = await fetch(
            `${TMDB_BASE_URL}/movie/${id}?api_key=${API_Key}`
          );
          const movieData = await response.json();
          setMovie(movieData);
  
          // Fetch movie videos (trailers)
          const videosResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_Key}`
          );
          const videosData = await videosResponse.json();
  
          // Find the first trailer key (assuming it's a YouTube video)
          const trailer = videosData.results.find(
            (video) => video.type === 'Trailer'
          );
          if (trailer) {
            setTrailerKey(trailer.key);
          }
        } catch (error) {
          console.error('Failed to fetch movie details:', error);
        }
      };
  
      fetchMovieDetails();
    }, [id]);
  
    if (!movie) {
      return <div>Loading...</div>;
    }
    
    const backdropImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : '';
    const ratingStars = Array.from({ length: movie.rating }, (_, index) => (
      <svg key={index} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
        <path
          fill="#ffd43b"
          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
        />
      </svg>
    ));
   
    return (
      <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backdropImage})` }}
    >
      <div>
        <h1 className="text-4xl font-bold my-4">{movie.title}</h1>
        <p className="text-lg my-2">{movie.overview}</p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Genres:</strong>{' '}
          {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
         <strong>Rating:</strong> {ratingStars}
         
        </p>
        <p>
          <strong>Production Companies:</strong>{' '}
          {movie.production_companies.map((company) => company.name).join(', ')}
        </p>
        <div>
     
      <button onClick={handleVideoClick}>Watch Movie</button>
        </div>
        {trailerKey && (
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Trailer</h2>
            <div className="flex justify-center">
              <iframe
                title="Trailer"
                className="w-[70rem] h-[30rem]"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  
    );
  }
  
  export default MovieDetails;
