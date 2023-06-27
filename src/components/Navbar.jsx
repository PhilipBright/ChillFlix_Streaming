import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/Firebase_config';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function Navbar({ isScrolled }) {
  const navigate = useNavigate();
  const links = [
    { name: 'Home', link: '/' },
    { name: 'ChillFlix Movies', link: '/movies' },
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

  return (
    <div className={`fixed top-0 left-0 w-full z-10`} style={{ backgroundColor: isTop ? 'transparent' : '#070606', transition: 'background-color 0.5s ease' }}>
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
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
    </div>
  );
}
