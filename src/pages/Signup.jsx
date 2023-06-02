
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { Button } from 'flowbite-react';
import Pricing from '../components/Pricing'
import Collaspe from '../components/Collaspe';
import FooterNav from '../components/FooterNav';

export default function Signup() {
  return (
    <div className=''>
      <BackgroundImage className=' relative w-screen h-auto' style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(10, 0, 0, 0.5))'}} />
      <Header login />
      <div className=' absolute flex w-[45%] h-[50%] ml-3 mt-[-46%] text-white'>
        <div className='m-4 w-screen'>
        <h1 className=' lg:text-6xl font-bold font-serif pb-4'>Welcome to ChillFlix Video Streaming</h1>
        <h4 className='text-2xl'>Streaming technology has revolutionized the way we consume media, providing us with endless options for entertainment at our fingertips.</h4>
       <div className='flex'>
        <div className='pt-5 pl-6'>
    <Button gradientMonochrome="success">
      Explore More
    </Button>
  </div>
  <div className='pt-5 pl-6'>
  <Button gradientDuoTone="purpleToPink">
      See Pricing
    </Button>
  </div>
        </div>
        </div>
        
      </div>

      <div>
        <Pricing />
      </div>
      <div className=' w-full h-full p-10'>
      <Collaspe />
      </div>
      <div>
        
      </div>
      <FooterNav/>
    </div>
  )
}
