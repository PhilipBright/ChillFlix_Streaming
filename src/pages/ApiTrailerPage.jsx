import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_Key } from '../utils/TMDB';
import { useNavigate } from 'react-router-dom';
function ApiTrailerPage() {
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const fetchTrailerUrl = async () => {
      try {
        // Fetch movie videos (trailers)
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_Key}`
        );
        const videosData = response.data;

        // Find the first trailer key (assuming it's a YouTube video)
        const trailer = videosData.results.find((video) => video.type === 'Trailer');
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (error) {
        console.error('Failed to fetch trailer URL:', error);
      }
    };

    fetchTrailerUrl();
  }, [id]);
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <button
        className='absolute top-4 left-4 p-2 rounded-full bg-white'
        onClick={handleGoBack}
      ><svg
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
      {trailerUrl ? (
        <iframe
          title="Trailer"
          className="w-[80rem] h-[40rem]"
          src={trailerUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ApiTrailerPage;
