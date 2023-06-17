import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Button, } from 'flowbite-react';
import { firebaseAuth } from '../utils/Firebase_config';
import {  onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export default function Header(props) {
 
 const navigate = useNavigate()
  
  return (
    <div className='w-screen h-28  pl-4 pr-5 flex justify-between items-center absolute top-0'>
      <div className='left-0'>
        <img src={logo} alt="logo" className="lg:w-44 h-48" />
      </div>
      <Button onClick={() => navigate('/Login')} className='text-white right-0'>
        {props.login ? "Login" : "Signup"}
      </Button>
     
    </div>
  );
}
