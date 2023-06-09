// import axios from "axios";
// import { onAuthStateChanged } from "firebase/auth";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { firebaseAuth } from "../utils/Firebase_config";

// function Card({ movieData, isLiked = false }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [email, setEmail] = useState(undefined)
//   const navigate = useNavigate();
  
//   const handleMovieClick = () => {
//     navigate(`/movies/${movieData.id}`);
//   };
//   onAuthStateChanged(firebaseAuth, (currentUser) => {
//     if(currentUser) setEmail(currentUser.email);
//     else navigate('/Login')
//   })
//   const addToList = async () => {
//     try {
//       const payload = { email, data: movieData };
//       console.log(payload);
//       const response = await axios.post("http://localhost:3000/api/user/favorite", payload);
//       console.log("Data added to the database");
//       console.log(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  
//   return (
//     <div>
//                    <button onClick={addToList} className="btn btn-secondary z-50 text-white">Add to Playlist</button>

    
//     <div
    
//     className={`cursor-pointer card relative overflow-hidden flex-shrink-0 ${
//       isHovered ? 'scale-105' : ''
//     } transition-transform duration-300`}
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//     onFocus={() => setIsHovered(true)}
//     onBlur={() => setIsHovered(false)}
//     onClick={handleMovieClick}
//     tabIndex="0"
//   >
//       <img src={movieData.image} alt="movie" className="rounded-xl " />
    
//       {isHovered && (
//         <div className="card-overlay absolute inset-0 bg-black bg-opacity-60">
//           <video src={movieData.video} autoPlay loop muted className="w-full h-full object-cover" />
//           <div className="card-content absolute inset-0 flex flex-col items-center justify-center text-white">
//             <h3 className="text-xl font-semibold mb-2">{movieData.name}</h3>
//             <div className="button-container z-30 block">
             
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default Card;

import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/Firebase_config";


function Card({ movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState(undefined);
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movies/${movieData.id}`);
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/Login");
  });
  const addToList = async () => {
    try {
      const payload = { email, data: movieData };
      console.log(payload);
      const response = await axios.post(
        "http://localhost:3000/api/user/favorite",
        payload
      );
      console.log("Data added to the database");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={addToList}
        className="btn btn-secondary z-50 text-white absolute top-2 right-2 border rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-1 1v6H2a1 1 0 000 2h6v6a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`cursor-pointer card relative overflow-hidden flex-shrink-0 ${
          isHovered ? "scale-105" : ""
        } transition-transform duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={handleMovieClick}
        tabIndex="0"
      >
        <img src={movieData.image} alt="movie" className="rounded-xl" />

        {isHovered && (
          <div className="card-overlay absolute inset-0 bg-black bg-opacity-60">
           
            <div className="card-content absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl text-centerx font-semibold mb-2">{movieData.name}</h3>
              <div className="button-container z-30 block"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
