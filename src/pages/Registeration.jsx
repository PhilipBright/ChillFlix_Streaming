import { Button, Checkbox, FileInput, Label, Select, TextInput } from "flowbite-react";
import regImg from '../assets/reg.svg';
import back from '../assets/back.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { firebaseAuth } from '../utils/Firebase_config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const navigate = useNavigate()
  const [registerValue, setRegisterValue] = useState({
    username: '',
    email: '',
    password: '',
    subscription: '', // Default subscription option
  });

  const handleSignUp = async (event) => {
    event.preventDefault();
  
    try {
      const { username, email, password, subscription } = registerValue;
  
      // Check if subscription value is empty
      if (!subscription) {
        console.error('Subscription value is empty');
        return;
      }
  
      // Register the user in Firebase
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
  
      // Create an object with the user data to be sent to the server
      const userData = {
        username,
        email,
        password,
        subscription,
      };
  
      // Register the user in MongoDB
      const response = await axios.post("http://localhost:3000/api/user/register", userData);
  
      if (response.status === 201) {
        // User registered successfully in both Firebase and MongoDB
        const paymentUrl = `/payment?subscription=${subscription}`;
        navigate(paymentUrl);
      } else {
        // Failed to register the user in MongoDB
        console.error('Failed to register user in MongoDB');
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) {
  //     window.location.href = '/';
  //   }
  // });

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 bg-[#69b4ff]">
        <div className="w-[100%] flex justify-center items-center pr-4">
          <img src={regImg} alt="" className="w-max" />
        </div>
        <div className="w-[100%] border p-9 lg:rounded-l-[4rem] lg:pt-8 bg-white">
          <div>
            <Link to="/Signup">
              <img src={back} alt="" className="w-4 pb-4" />
            </Link>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Your Name"
                name="username"
                value={registerValue.username}
                required={true}
                shadow={true}
                onChange={(e) => {
                  setRegisterValue({
                    ...registerValue,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Your email" />
              </div>
              <TextInput
                id="email2"
                type="email"
                name="email"
                value={registerValue.email}
                placeholder="name@flowbite.com"
                required={true}
                shadow={true}
                onChange={(e) => {
                  setRegisterValue({
                    ...registerValue,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2" value="Your password" />
              </div>
              <TextInput
                id="password2"
                type="password"
                name="password"
                value={registerValue.password}
                required={true}
                shadow={true}
                onChange={(e) => {
                  setRegisterValue({
                    ...registerValue,
                    [e.target.name]: e.target.value,
                  });
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
                <Label htmlFor="plans" value="Select your Favorite Plan" />
              </div>
              <Select
                id="plans"
                required={true}
                name="subscription"
                value={registerValue.subscription}
                shadow={true}
                onChange={(e) => {
                  setRegisterValue({
                    ...registerValue,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <option value="basic">Basic Plan</option>
                <option value="premium">Premium Plan</option>
                <option value="business">Business Plan</option>
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
                helperText="A profile picture is useful to confirm you are logged into your account"
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
            
            {/* <Link to={`/payment?subscription=${registerValue.subscription}`}> */}
  <Button onClick={handleSignUp}>
    Register new account
  </Button>
{/* </Link> */}


          </form>
        </div>
      </div>
    </div>
  );
}
