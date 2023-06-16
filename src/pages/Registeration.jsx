import { Button, Checkbox, FileInput, Label, Select, TextInput } from "flowbite-react";
import regImg from '../assets/reg.svg';
import back from '../assets/back.png'
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { firebaseAuth } from '../utils/Firebase_config';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
export default function Registeration() {
  const navigate = useNavigate();
  const [registerValue, setRegisterValue] = useState({
    username: '',
    email: '',
    password: ''
  })
  const handleSignUp = async () =>{
    try{
      const {email , password} = registerValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    catch(err) {
      console.log(err)
    }

  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser){
      navigate('/Signup');
    }
  })
  return (
    <div className="w-screen h-screen">
      <div className=" w-screen h-screen grid grid-cols-1 md:grid-cols-2 bg-[#69b4ff]">  
      <div className="w-[100%] flex justify-center items-center pr-4">
      <img src={regImg} alt="" className=" w-max" />
</div>
    <div className=" w-[100%] border p-9 lg:rounded-l-[4rem] lg:pt-8 bg-white">
      <div>
       <Link to="/Signup"> <img src={back} alt="" className="w-4 pb-4" /></Link>
      </div>
    <form className="flex flex-col gap-4">
    <div>
    <div className="mb-2 block">
      <Label
        htmlFor="username"
        value="Username"
      />
    </div>
    <TextInput
      id="username"
      type="text"
      placeholder="Your Name"
      name="username"
      value={registerValue.username}

      required={true}
      shadow={true}
      onChange={(e)=> {
        setRegisterValue({
          ...registerValue, [e.target.name]: e.target.value
        })
      }}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Your email"
      />
    </div>
    <TextInput
      id="email2"
      type="email"
      name="email"
      value={registerValue.email}
      placeholder="name@flowbite.com"
      required={true}
      shadow={true}
      onChange={(e)=> {
        setRegisterValue({
          ...registerValue, [e.target.name]: e.target.value
        })
      }}
      />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        value="Your password"
      />
    </div>
    <TextInput
      id="password2"
      type="password"
      name="password"
      value={registerValue.password}
      required={true}
      shadow={true}
      onChange={(e)=> {
        setRegisterValue({
          ...registerValue, [e.target.name]: e.target.value
        })
      }}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="repeat-password"
        value="Repeat password"
      />
    </div>
    <TextInput
      id="repeat-password"
      type="password"
      required={true}
      shadow={true}
    />
  </div>
  <div id="plans">
  <div className="mb-2 block">
    <Label
      htmlFor="plans"
      value="Select your Favorite Plan"
    />
  </div>
  <Select
    id="plans"
    required={true}
  >
    <option>
      Basic Plan
    </option>
    <option>
      Premium Plan
    </option>
    <option>
      Business Plan
    </option>
    
  </Select>
</div>
<div id="fileUpload">
  <div className="mb-2 block">
    <Label
      htmlFor="file"
      value="Upload Profile Picture"
    />
  </div>
  <FileInput
    id="file"
    helperText="A profile picture is useful to confirm your are logged into your account"
  />
</div>
  <div className="flex items-center gap-2 pt-4">
    <Checkbox id="agree" />
    <Label htmlFor="agree">
      I agree with the  
      <a
        href="/forms"
        className="text-blue-600 hover:underline dark:text-blue-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>
  <Button onClick={handleSignUp} >
    Register new account
  </Button>
</form>
    </div>
      </div>
    </div>
  )
}
