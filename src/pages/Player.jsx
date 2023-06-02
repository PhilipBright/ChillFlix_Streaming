// import video from '../assets/film.mp4'
import { useNavigate } from 'react-router-dom'
export default function Player() {
    const navigate = useNavigate();
  return (
    <div className='w-screen h-screen bg-black'>
      <div className="">
        <div className=' '>
            <button onClick={()=> navigate(-1)} className='text-white absolute z-50'>back</button>
        </div>
        {/* <video src={video} autoPlay loop controls muted className='w-screen h-screen relative'></video> */}
      </div>
    </div>
  )
}
