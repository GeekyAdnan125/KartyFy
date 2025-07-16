import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setdetails } from '../redux/authSlice';
import { chechValidData } from './Validation';
function Login() {
    const naviagte = useNavigate();
    const [login,setlogin] = useState(false);
    const [username,setUsername] = useState("");
    const [password,setpassword] = useState("");
    const [email,setEmail] = useState("");
    const dispatch = useDispatch()
    const [error,setError] = useState(" ");
    const authdata = {
      username,
      password,
      email
    }
    const data = useSelector(state=>state.userDetails);
    const AddHandler = ()=>{
    const errormessage = chechValidData(email , password);
    errormessage(error)
    }  
  return (
    <div className="relative bg-blue-400 h-screen w-full flex items-center justify-center px-4 sm:px-8">
      <div className="card bg-white shadow-lg rounded-lg  p-8 w-96 max-w-md sm:max-w-lg top-[30%] bottom-[20%]">
        {login && <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
            Login Form</h2>}
        {!login && <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">
                Signup Form</h2>}    
        <div className="flex justify-between mb-6">
          <button 
          onClick={()=>setlogin(true)}
          className={`w-1/2 py-2 text-gray-500 font-semibold border-b-2  ${login ? "border-blue-800 text-blue-600 text-xl" : ''}`}>
            Login
          </button>
          <button 
          onClick={()=>setlogin(false)}
          className={`w-1/2 py-2 text-gray-500 font-semibold border-b-2  ${!login ? "border-blue-800 text-blue-600 text-xl": ''}`}>
            Signup
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {!login && 
           <input
           onChange={(e)=>setUsername(e.target.value)}
           value={username}
           type="text"
           placeholder="User Name"
           className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
         />}
          <input
             onChange={(e)=>setEmail(e.target.value)}
             value={email}
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
             onChange={(e)=>setpassword(e.target.value)}
             value={password}
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <p className="text-sm text-blue-500 text-right mt-2 cursor-pointer hover:underline">
          Forgot password?
        </p>
        <p className="text-sm text-red-600  absolute mt-2 cursor-pointer hover:underline">
           {error}
        </p> 
        <button 
          onClick={()=>AddHandler()}
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-6 hover:bg-blue-600 transition">
           {login ? <span>login</span> : <span>Sign Up</span>}
        </button>
      </div>
    </div>
  );
}

export default Login;
