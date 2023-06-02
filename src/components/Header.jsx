import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <div className='w-screen h-28  pl-4 pr-5 flex justify-between items-center absolute top-0'>
      <div className=' left-0'>
        <img src={logo} alt="logo" className=" lg:w-44 h-48" />
      </div>
      <button className=' text-white right-0' onClick={() => navigate(props.login ? "/login" : "/signup") }>
        {props.login ? "Login" : "Signup"}

      </button>
    </div>
   
  )
}
