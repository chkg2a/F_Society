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
import Friends from "../assets/images/friends.svg";

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

  const [currLocationJs, setCurrLocationJs] = useState({});

  useEffect(() => {
    getLocationJs();
  }, []);

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
    });
  };
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    dispatch(signInStart());
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:8000/api/auth/alert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/chat");
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
        <div>
          <img src={Friends} />
        </div>

        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
              File
              <span className="text-blue-300"> a Report</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label p-2">
                  <span className="text-base text-blue-300 label-text">
                    Upload Image
                  </span>
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  className="block file-input file-input-bordered w-full max-w-xs"
                  ref={fileRef}
                  hidden
                  accept="image/*"
                />
              </div>
              <div>
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
                    Location
                  </span>
                </label>
                <div className="flex">
                <input
                  type="text"
                  id="location-lati"
                  placeholder="Enter latitude"
                  value={currLocationJs.latitude}
                  className="w-full input input-bordered h-10"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="location-long"
                  placeholder="Enter logitude"
                  value={currLocationJs.longitude}
                  className="w-full input input-bordered h-10"
                  onChange={handleChange}
                  required
                />

                </div>
                {currLocationJs ? <p className="text-success">Successfully Got your Location</p> : (
                <button onClick={getLocationJs} className="btn btn-ghost">Get Location</button>
                )}
              </div>
              <div>
                <label className="label p-2">
                  <span className="text-base text-blue-300 label-text">
                    Description
                  </span>
                </label>
                <input
                  type="text"
                  id="description"
                  placeholder="Enter description"
                  className="w-full textarea input input-bordered h-10"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <button
                  onClick={()=>{
                    navigate('/crowdfunding')
                  }}
                  className="btn btn-block btn-sm btn-error mt-2 border disabled:opacity-80 border-slate-700"
                >
                  REPORT
                </button>
              </div>
              <div>
              </div>
            </form>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Report;
