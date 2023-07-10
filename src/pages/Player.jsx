import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Player() {
  const navigate = useNavigate();

  
  return (
    <div className="w-screen h-screen bg-black">
      <div className="">
      <iframe
          title="Video Player"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oWO7Gmx28hU"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
// 1OYNccCur8WnO3lJYSJTToZEp2b79J1Yh