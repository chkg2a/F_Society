import React from "react";
import { useState,useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";

const notifySuccess = () => toast.success("Successfully Logged In!");

const Login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const {authUser,setAuthUser}=useAuthContext();
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch('http://localhost:8000/api/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({userName,password})
    }
  )
  const data=await res.json();
  if(data.error){
    throw new Error(data.error);
  }
  localStorage.setItem("chat-user",JSON.stringify(data));
  setAuthUser(data);
  if(data.status===200){
    navigate('/chat')
  }


  }
  return (
    <>
      <NavBar />
      <div className="h-[80%] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
              Login
              <span className="text-blue-300"> DappChapp</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full input input-bordered h-10"
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                />
              </div>
              <div>
                <label className="label p-2">
                  <span className="text-base text-blue-300 label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full input input-bordered h-10"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <Link
                to="/signup"
                className="text-sm text-blue-300 hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                {"Don't"} have an account?
              </Link>
              <div>
                <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
              </div>
            </form>
          </div>
          </div>
          </div>
      </>
  );
};

export default Login;
