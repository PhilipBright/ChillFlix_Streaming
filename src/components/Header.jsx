import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Button, Checkbox, Label, TextInput, Modal } from 'flowbite-react';
import { firebaseAuth } from '../utils/Firebase_config';
import {  onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
export default function Header(props) {
  const [loginValue, setLoginValue] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [openModal, setOpenModal] = useState('');
  const modalProps = { openModal, setOpenModal };

  const navigate = useNavigate();

  const handleLogin = async () =>{
    try{
      const {email , password} = loginValue;
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      if(userCredential){
      navigate('/')
    }
  }
    catch(err) {
      console.log(err)
    }

  }

  const register = () => {
    navigate('/Registeration')
  }
  return (
    <div className='w-screen h-28  pl-4 pr-5 flex justify-between items-center absolute top-0'>
      <div className='left-0'>
        <img src={logo} alt="logo" className="lg:w-44 h-48" />
      </div>
      <Button onClick={() => modalProps.setOpenModal('dismissible')} className='text-white right-0'>
        {props.login ? "Login" : "Signup"}
      </Button>
      <Modal className='' dismissible show={modalProps.openModal === 'dismissible'} onClose={() => modalProps.setOpenModal('')}>
        <Modal.Header>Login to Your Account</Modal.Header>
        <Modal.Body>
        <form className="flex  flex-col gap-4 justify-center">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Your email"
          />
        </div>
        <TextInput
         id="email"
         type="email"
         name="email"
         value={loginValue.email}
         placeholder="name@flowbite.com"
         required={true}
         shadow={true}
         onChange={(e)=> {
           setLoginValue({
             ...loginValue, [e.target.name]: e.target.value
           })
         }}
        />
      </div>
      <div>
        <div className="mb-2 block">
        <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
      id="password2"
      type="password"
      name="password"
      value={loginValue.password}
      required={true}
      shadow={true}
      onChange={(e)=> {
        setLoginValue({
          ...loginValue, [e.target.name]: e.target.value
        })
      }}
    />

      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button onClick={handleLogin} type="submit">
        Submit
      </Button>
      <div>
        Don't Have an Account? <span onClick={register} className=' text-blue-600 cursor-pointer'>Register Here!</span>
        
       
      </div>
    </form>
        </Modal.Body>
        <Modal.Footer>
          <div className=' w-full flex justify-end items-center gap-4'>
          
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
