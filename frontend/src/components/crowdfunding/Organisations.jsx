import React from "react";
import Organisation from "./Organisation";

const Organisations = () => {
  return (
    <div className="w-screen h-screen flex items-center flex-col">
      <div className="w-1/2 my-16 items-center flex flex-col justify-center">
        <h1 className="font-bold text-7xl">Together we can save these</h1>
        <h2 className="text-red-200 text-5xl mt-1 font-semibold">Precious Animals</h2>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        <Organisation />
        <Organisation />
        <Organisation />
        <Organisation />
        <Organisation />
        <Organisation />
        <Organisation />
        <Organisation />
      </div>
    </div>
  );
};

export default Organisations;
