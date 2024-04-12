import React from "react";
import Wallet from "../CrowdFunding/wallet/Wallet";

const JoinOrganization = () => {
  return (
    <div
      className="relative w-screen h-screen flex justify-center lg:justify-start items-center"
      style={{
        backgroundImage: "url(/deer.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Wallet />
    </div>
  );
};

export default JoinOrganization;
