import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MovieTrailer = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/movies/db/${id}`);
        const movieData = response.data;
        console.log(movieData)
        setMovie(movieData);
        console.log('hello', movie.trailer)
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  const getVideoId = (url) => {
    const videoId = url.split('v=')[1];
    return videoId ? videoId.split('&')[0] : null;
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black'>
      <button
        className='absolute top-4 left-4 p-2 rounded-full bg-white'
        onClick={handleGoBack}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>
      {movie.trailer && (
        <div className='my-4'>
          <div className='flex justify-center'>
            <iframe
              title='Trailer'
              className='w-[70rem] h-[30rem]'
              src={`https://www.youtube.com/embed/${getVideoId(movie.trailer)}`}
              frameBorder='0'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieTrailer;
