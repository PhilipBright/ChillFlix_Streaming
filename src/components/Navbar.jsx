import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/Firebase_config';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { API_Key } from '../utils/TMDB';
import axios from 'axios';

export default function Navbar({ isScrolled, movies }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const links = [
    { name: 'Home', link: '/' },
    { name: 'ChillFlix Movies', link: '/movies/db' },
    { name: 'My List', link: '/mylist' }
  ];
  const [isTop, setIsTop] = useState(true);

  const handleLogout = async () => {
    try {
      await signOut(firebaseAuth);
      navigate('/Signup'); // Redirect to the login page after logout
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const searchMovies = async (query) => {
    try {
 
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${query}`;
      const response = await axios.get(url);
      const results = response.data.results;
      console.log(results); // Output the search results to the console
      // Update state or perform other actions with the search results
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };
 

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/Search?query=${searchQuery}`);
  };

 

  return (
    <div className={`fixed top-0 left-0 w-full z-30`} style={{ backgroundColor: isTop ? 'transparent' : '#070606', transition: 'background-color 0.5s ease' }}>
      <nav className={`flex justify-between items-center ml-5 mr-5 navbar-container`}>
        <div className='flex gap-10'>
          <div>
            <img src={logo} alt='' className='w-24' />
          </div>
          <ul className='flex gap-10 items-center text-white'>
            {links.map(({ name, link }) => {
              return (
                <li key={name} className='font-serif'>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=''>
        <form onSubmit={handleSearch} className='flex'>
            <input
              type='text'
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder='Search movies...'
              className='py-1 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
              type='submit'
              className='py-2 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
           <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
               
            </button>
            <Button onClick={handleLogout}>Logout</Button>
          </form>
          
        </div>
      </nav>
    </div>
  );
}
