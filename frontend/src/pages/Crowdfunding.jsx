import React from "react";
import Organisations from "../components/crowdfunding/Organisations";

const Crowdfunding = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/crowd.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Organisations />
    </div>
  );
};

export default Crowdfunding;
