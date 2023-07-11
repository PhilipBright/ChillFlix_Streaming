import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Player() {
  const navigate = useNavigate();

  
  return (
    <div className="w-screen h-screen bg-black">
      <div className="">
        <video width="560" height="315" controls>
          <source src="../assets/movie.mp4" type="video/mp4" />
          
        </video>
      </div>
    </div>
  );
}
// 1OYNccCur8WnO3lJYSJTToZEp2b79J1Yh