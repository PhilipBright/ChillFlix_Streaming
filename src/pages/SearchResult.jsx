import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { TMDB_BASE_URL } from '../utils/TMDB'; // Import the TMDB_BASE_URL constant
import { API_Key } from '../utils/TMDB';
import { Link, useLocation } from 'react-router-dom';
function SearchResult() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
       
        const response = await fetch(
          `${TMDB_BASE_URL}search/movie?query=${searchQuery}&api_key=${API_Key}`
        ); // Replace YOUR_SEARCH_QUERY and YOUR_API_KEY with actual values
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  return (
    // <div>
    //   <Navbar />
    //   <ul>
    //     {searchResults.map((movie) => (
    //       <li key={movie.id}>
    //         <h3>{movie.title}</h3>
    //         <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
    //         {/* Display other movie information as needed */}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
        <Navbar />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((movie) => (
          <li key={movie.id} className="bg-black rounded-lg overflow-hidden">
             <Link to={`/movies/${movie.id}`}>
            <div className="p-4">
             
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="mt-2 rounded"
                />
              ) : (
                <div className="bg-gray-600 h-48 w-full flex items-center justify-center">
                  <span className="text-white">No Poster Available</span>
                </div>
              )}
              {/* Display other movie information as needed */}
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
