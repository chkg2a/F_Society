import React from "react";
import app from "../components/Fire";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Google = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleclick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("http://localhost:8000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();

      dispatch(signInSuccess(data));
      navigate("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleclick}
      className="btn btn-success btn-block btn-sm mt-2 border border-slate-700 hover:opacity-95"
    >
      Continue with Google
    </button>
  );
};

export default Google;
