import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieTrailer = () => {
  const location = useLocation();
  const { title, trailerUrl } = location.state;

  return (
    <div>
      <h2>{title}</h2>
      <iframe
        title={title}
        width="560"
        height="315"
        src={trailerUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
