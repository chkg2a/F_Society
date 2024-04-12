import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../components/Google';
const Signup = () => {
  const [form, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const res = await fetch('http://localhost:8000/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    
    } catch (error) {
     
      console.error('Error:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="h-[80%] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Signup
            <span className="text-blue-300">Animal Rescue</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                className="w-full input input-bordered h-10"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base text-blue-300 label-text">
                  Password
                </span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
                onChange={handleChange}
              />
            </div>
            <Link
              to="/sign-in"
              className="text-sm text-blue-300 hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </Link>
            <div>

              <button
                disabled={loading}
                className="btn btn-block btn-sm mt-2 border disabled:opacity-80 border-slate-700"
              >
                {loading ? 'Loading...' : 'Sign Up'}
              </button>
            </div>
            <div>
              <Google />
            </div>
          </form>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
