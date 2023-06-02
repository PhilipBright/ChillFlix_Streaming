
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
export default function Navbar({isScrolled}) {
    const links = [
       { name: "Home", link: "/"},
       { name: "TV shows", link: "/tv"},
       { name: "Movies", link: "/movies"},
       { name: "My List", link: "/mylist"}
    ]
  return (
    <div>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className='flex gap-10'>
            <div>
                <img src={logo} alt="" className=' w-24' />
            </div>
            <ul className='flex gap-10 items-center'>
                {links.map(({name, link}) => {
                    return (
                        <li key={name} className=' font-serif'>
                            <Link to={link}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
      </nav>
    </div>
  )
}
