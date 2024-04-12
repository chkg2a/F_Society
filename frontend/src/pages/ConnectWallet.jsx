import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Google from "../components/Google";
import { signInFailure, signInStart, signInSuccess } from "../redux/userSlice";

const ConnectWallet = () => {
  const [form, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    dispatch(signInStart());
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="h-[80%] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login
            <span className="text-blue-300">Animal Rescue</span>
          </h1>
          <form onSubmit={handleSubmit}>
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
            <div>
              <button
                disabled={loading}
                className="btn btn-block btn-sm mt-2 border disabled:opacity-80 border-slate-700"
              >
                Connect Wallet
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

export default ConnectWallet;
