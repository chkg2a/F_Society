import React from "react";
import Organisation from "./Organisation";

const Organisations = () => {
  return (
    <div className="w-screen h-screen flex items-center">
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
