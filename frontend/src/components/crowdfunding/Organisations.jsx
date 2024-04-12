import React from "react";
import Organisation from "./Organisation";

const Organisations = () => {
  return (
    <div className="w-screen flex items-center flex-col">
      <div className="w-1/2 my-16 items-center flex flex-col justify-center">
        <h1 className="font-bold text-7xl">Together we can save these</h1>
        <h2 className="text-red-200 text-5xl mt-1 font-semibold">Precious Animals</h2>
      </div>
      <div className="w-3/4 flex gap-20 flex-wrap justify-center">
        <Organisation image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" title="Bro Code" description="Suspendisse lectus dictumst ullamcorper, et ut dolor pulvinar posuere efficitur."/>
        <Organisation image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" title="Bro Code" description="Suspendisse lectus dictumst ullamcorper, et ut dolor pulvinar posuere efficitur."/>
        <Organisation image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" title="Bro Code" description="Suspendisse lectus dictumst ullamcorper, et ut dolor pulvinar posuere efficitur."/>
        <Organisation image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" title="Bro Code" description="Suspendisse lectus dictumst ullamcorper, et ut dolor pulvinar posuere efficitur."/>
        <Organisation image="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" title="Bro Code" description="Suspendisse lectus dictumst ullamcorper, et ut dolor pulvinar posuere efficitur."/>
      </div>
    </div>
  );
};

export default Organisations;
