import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_BASE_URL } from '../utils/TMDB';
import { API_Key } from '../utils/TMDB';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
  
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
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: `url(${backdropImage})` }}>
            <div className="">

        <h1 className="text-4xl font-bold my-4">{movie.title}</h1>
        <p className="text-lg my-2">{movie.overview}</p>
        {trailerKey && (
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Trailer</h2>
            <div className='flex justify-center'>
            <iframe
              title="Trailer"
              className=" w-[70rem] h-[30rem]"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            </div>
          </div>
        )}
        {/* Display other movie details */}
      </div>
      </div>
    );
  }
  
  export default MovieDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TMDB_BASE_URL, API_Key } from '../utils/TMDB';
// import ReactPlayer from 'react-player';

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`${TMDB_BASE_URL}/movie/${id}?api_key=${API_Key}&append_to_response=videos`);
//         const movieData = await response.json();
//         setMovie(movieData);
//       } catch (error) {
//         console.error('Failed to fetch movie details:', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   const videoKey = movie.videos.results[0]?.key; // Get the key of the first video in the list

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       {videoKey && <ReactPlayer url={`https://www.youtube.com/watch?v=${videoKey}`} controls={true} />}
//       {/* Display other movie details */}
//     </div>
//   );
// }

// export default MovieDetails;

