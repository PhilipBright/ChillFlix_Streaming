import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`card relative overflow-hidden flex-shrink-0 ${
        isHovered ? "scale-105" : ""
      } transition-transform duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex="0"
    >
      <img src={movieData.image} alt="movie" className="rounded-xl " />

      {isHovered && (
        <div className="card-overlay absolute inset-0 bg-black bg-opacity-60">
          <video src={movieData.video} autoPlay loop muted className="w-full h-full object-cover" />
          <div className="card-content absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-semibold mb-2">{movieData.name}</h3>
            <div className="button-container">
              <button
                className="btn btn-primary mr-2"
                onClick={() => navigate("/player")}
              >
                Watch Now
              </button>
              <button className="btn btn-secondary">Add to Playlist</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
