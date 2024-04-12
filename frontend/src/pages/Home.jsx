import React from "react";
import { Link } from "react-router-dom";
import Timeline from "../components/timeline/Timeline";

const Home = () => {
  return (
    <>
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/hero.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to="/report" className="btn btn-error">REPORT</Link>
            </div>
          </div>
        </div>
        <div className="w-[80vw] flex items-center justify-center">
          <Timeline/>
        </div>
      </div>
    </>
  );
};

export default Home;
