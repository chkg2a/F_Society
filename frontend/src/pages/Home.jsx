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
              <h1 className="mb-5 text-6xl flex-nowrap font-bold">We want to Survive!</h1>
              <p className="mb-5">
Join us in protecting precious wildlife! Every click and donation helps save lives and habitats. Together, let's ensure a brighter future for our furry friends.
              </p>
              <Link to="/report" className="btn btn-error">REPORT</Link>
            </div>
          </div>
        </div>
        <div className="flex p-36 bg-black flex-wrap">
          <div className="flex ">
            <div>
              <img src="/home-1.jpeg" className="rounded-lg"/>
            </div>
            <div>
              <h1 className="px-10 font-bold text-4xl">Sofia</h1>
              <p className="px-10 text-lg mt-2">Sophie is a 15-year old cow found to be in immense pain after getting hit by a train. Her limbs were broken, after emergency surgery we managed to save her but she still needs your love and support. We decided to raise ₹40,000 for her full recovery. Please help us to achieve our goal.</p> 
            </div>
          </div>
          <div className="flex">
            <div>
              <h1 className="flex justify-end px-10 font-bold text-4xl">Lucy</h1>
              <p className="flex justify-end px-10 text-lg">Lucy is a 8-year old dog. She was abandoned dog by his owner, we found her on the street in a very poor condition. She was very week and waiting for someone to rescue her. Happy to report that she is absolutely fine now and is very play full. but she is still waiting for your love. Contact us for adopting her and making her life more lively.</p> 
            </div>
            <div>
              <img src="/home-2.jpeg"  className="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
