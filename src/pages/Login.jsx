import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/Firebase_config';
import backgroundImg from '../assets/loginbg.jpeg'; // Import the background image


export default function Login() {
  const [loginValue, setLoginValue] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const handleLogin = async () =>{
    try{
      const {email , password} = loginValue;
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
      if(userCredential){
      navigate('/')
      console.log("logged!")
    }
  }
    catch(err) {
      console.log(err)
    }

  }

  const register = () => {
    navigate('/Registeration')
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser){
      navigate('/');
    }
  })
  return (
    <div

    className="w-screen h-screen flex justify-center items-center"
    style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: 'relative',

    }}
  >
    <div
        className="absolute inset-0 bg-black opacity-40 z-0"
        
      ></div>
    
    <div className="w-[400px] bg-white bg-opacity-90 p-6 rounded-lg z-10">
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
      id="password1"
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
      <Button onClick={handleLogin} >
        Submit
      </Button>
      <div>
        Don't Have an Account? <span onClick={register} className=' text-blue-600 cursor-pointer'>Register Here!</span>
        
       
      </div>
    </form>
    </div>
    </div>
  )
}
