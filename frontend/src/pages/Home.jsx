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
              <h1 className="mb-5 text-5xl font-bold">We want to Survive!</h1>
              <p className="mb-5">

              </p>
              <Link to="/report" className="btn btn-error">REPORT</Link>
            </div>
          </div>
        </div>
        <div className="flex bg-slate-300">
          <div className="">
            <div>
              <img src="/home-1.jpeg"/>
            </div>
            <div>
              <h1>Sofia</h1>
              <p>Convallis proin felis vel sem blandit suscipit nulla ante justo nascetur metus. Id dignissim amet nibh imperdiet arcu etiam consectetur lacus dapibus platea, etiam non tempus et ut nunc finibus, vestibulum metus et at imperdiet elit, semper vestibulum curabitur ac.</p> 
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="/home-2.jpeg"/>
            </div>
            <div>
              <h1>Class</h1>
              <p>Mus eu varius praesent viverra vel enim. Nullam metus diam at lectus nunc varius ante nulla tristique ultrices vulputate eleifend elementum est nec nibh suspendisse aliquam elit quam aliquam elit odio fusce lectus luctus neque. Eleifend eget convallis lacus sit.</p> 
            </div>
          </div>
        </div>
        <div className="p-40 w-screen flex items-center justify-center bg-slate-600">
          <Timeline/>
        </div>
      </div>
    </>
  );
};

export default Home;
