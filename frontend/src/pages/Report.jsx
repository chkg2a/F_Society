import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../redux/userSlice";
import { useEffect, useRef, useState } from "react";
import app from "../components/Fire";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React from "react";

const Report = () => {
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(file);
  const fileRef = useRef(null);
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
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

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      setFilePerc(Math.round(progress));
    }, (error) => {
      setFileUploadError(true);
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
        setFormData({ ...formData, avatar: downloadURL })
      );
    });
  };

  return (
    <div className="bg-slate-700 w-screen h-screen flex-col flex items-center justify-center">
      <div className="h-[80%] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
              File
              <span className="text-blue-300">a Report</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  ref={fileRef}
                    hidden
                    accept="image/*"
                  />
                </div>
                <div>
                  <label className="label p-2">
                  <span className="text-base label-text">File Report</span>
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  ref={fileRef}
                  hidden
                  accept="image/*"
                />
                <img
                  src={formData.avatar}
                  onClick={() => fileRef.current.click()}
                  alt="profile"
                  className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
                />
                <p className="text-sm self-center">
                  {fileUploadError
                    ? (
                      <span className="text-red-700">
                        Error Image upload (image must be less than 2 mb)
                      </span>
                    )
                    : filePerc > 0 && filePerc < 100
                      ? (
                        <span className="text-slate-700">
                          {`Uploading ${filePerc}%`}
                        </span>
                      )
                      : filePerc === 100
                        ? (
                          <span className="text-green-700">
                            Image successfully uploaded!
                          </span>
                        )
                        : (
                          ""
                        )}
                </p>
              </div>
              <div>
                <label className="label p-2">
                  <span className="text-base text-blue-300 label-text">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter location"
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
                  type="text"
                  id="location"
                  placeholder="Enter description"
                  className="w-full input input-bordered h-10"
                  onChange={handleChange}
                />
              </div>
              <Link
                to="/sign-up"
                className="text-sm text-blue-300 hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                {"Don't"} have an account?
              </Link>
              <div>
                <button
                  disabled={loading}
                  className="btn btn-block btn-sm mt-2 border disabled:opacity-80 border-slate-700"
                >
                  Login
                </button>
              </div>
              <div>
              </div>
            </form>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
    </div>
  );
};

export default Report;
