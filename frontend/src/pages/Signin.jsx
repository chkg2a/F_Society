import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import Google from '../components/Google';
import {signInStart,signInSuccess,signInFailure} from '../redux/userSlice'


const Signin = () => {
  const [form, setFormData] = useState({});
 const {loading,error}=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  const navigate = useNavigate();
  
  
  const handleChange = (e) => {
    setFormData({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    dispatch(signInStart());
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/');
    
    } catch (error) {
     
      console.error('Error:', error);
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <Google/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account ?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default Signin;
