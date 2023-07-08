import react, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { TMDB_BASE_URL } from '../utils/TMDB';
import { API_Key } from '../utils/TMDB';
import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/Firebase_config';
import Navbar from '../components/Navbar';



function MovieDetails({movieData}) {
  const navigate = useNavigate()
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [email, setEmail] = useState(undefined)
   
    // Inside the component where you navigate to MovieTrailer

    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if(currentUser) setEmail(currentUser.email);
      else navigate('/Login')
    })
    // const addToList = async () => {
    //   try {
    //     const payload = { email, data: movieData };
    //     console.log(payload);
    //     const response = await axios.post("http://localhost:3000/api/user/favorite", payload);
    //     console.log("Data added to the database");
    //     console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
  
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
   
   
    return (
      <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white bg-cover bg-center z-[-1] "
      style={{ backgroundImage: `url(${backdropImage})`}}
    >
      <div className='w-full h-20 top-0  absolute'>
      <Navbar  />
      </div>
      <div className=' w-full pt-16 pl-16'>
        <h1 className="text-8xl font-bold text-white my-4">{movie.title}</h1>
        <p className="text-lg lg:w-[70rem] my-2">{movie.overview}</p>
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
          <strong>Production Companies:</strong>{' '}
          {movie.production_companies.map((company) => company.name).join(', ')}
        </p>
        <div className='flex'>
        <button className="flex items-center justify-center font-bold text-lg mr-4 px-6 h-14 rounded-md cursor-pointer bg-white text-black">
      <img className="w-8" src="https://drive.google.com/uc?id=10gmBaDack0_qDMe1umbWWoEDsGKkkVj6" alt="" />
       <span className="ml-2">PLAY</span>
     </button>

        <button className="flex items-center justify-center font-bold text-lg px-6 h-14 rounded-md cursor-pointer bg-[rgba(0,0,0,0.3)] text-white border border-white">
           <img className="w-8" src="https://drive.google.com/uc?id=1iD6VqHIyaeBe2V-c3o2U5YKl5K5n37Zi" alt="" />
         <span className="ml-2">Trailer</span>
        </button>
     
     
        </div>
        {/* {trailerKey && (
          <div className="my-4">
            
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
        )} */}
      </div>
    </div>

    // <div className="min-h-screen py-3 px-8 relative">
    //   {state && (
    //     <>
    //       <div className="fixed top-0 left-0 bottom-0 right-0 z-[-1] opacity-80">
    //         <img className="w-full h-full object-cover" src=`${backdropImage} alt="" />
    //       </div>

    //       <div className="flex items-end justify-start mx-auto h-[30vw] min-h-[170px] pb-6 w-full">
    //         <img className="max-w-[600px] min-w-[200px] w-[35vw]" src={state.TitleImg} alt="" />
    //       </div>

    //       <div className="max-w-[874px]">
    //         <div className="flex items-center justify-between mt-6 mb-8 min-h-[56px]">
    //           <button className="flex items-center justify-center font-bold text-lg px-6 h-14 rounded-md cursor-pointer bg-white text-black">
    //             <img className="w-8" src="https://drive.google.com/uc?id=10gmBaDack0_qDMe1umbWWoEDsGKkkVj6" alt="" />
    //             <span className="ml-2">PLAY</span>
    //           </button>

    //           <button className="flex items-center justify-center font-bold text-lg px-6 h-14 rounded-md cursor-pointer bg-[rgba(0,0,0,0.3)] text-white border border-white">
    //             <img className="w-8" src="https://drive.google.com/uc?id=1iD6VqHIyaeBe2V-c3o2U5YKl5K5n37Zi" alt="" />
    //             <span className="ml-2">Trailer</span>
    //           </button>

    //           <div className="mr-4 h-11 w-11 flex justify-center items-center bg-[rgba(0,0,0,0.6)] rounded-full border-2 border-white cursor-pointer">
    //             <span className="bg-white inline-block" />
    //             <span className="bg-white inline-block mt-2" />
    //           </div>

    //           <div className="h-11 w-11 flex justify-center items-center cursor-pointer bg-white rounded-full">
    //             <div className="h-10 w-10 bg-black rounded-full">
    //               <img className="w-full" src="https://drive.google.com/uc?id=1SeWZegP9sjTt1AHd536Xmk1iWsGzsUsQ" alt="" />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="text-white text-lg mb-2">{state.Genres}</div>
    //         <div className="text-white text-2xl pb-6">{state.Description}</div>
    //       </div>
    //     </>
    //   )}
    // </div>
  
    );
  }
  
  export default MovieDetails;
