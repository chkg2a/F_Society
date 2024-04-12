import React, { useState,useEffect } from "react";
import Organisation from "./Organisation";
import {Contract, ethers }from 'ethers'
import ABI from './ABI.json'

const Organisations = () => {
  let [provider,signer,selectedAccount,contract] = [null,null,null,null];
  const [orgs,setOrgs]=useState([]);
  const [data,setData] = useState([]);
  useEffect(()=>{
    handleWallet()
  },[])
  const handleWallet=async()=>{
    try {
      if(window.ethereum == null){
        alert("please install metamask");
      }
      let accounts=await window.ethereum.request({method:"eth_requestAccounts"});
      selectedAccount=accounts[0];
      if(!selectedAccount){
        alert("please select an account");
      }
      provider=new ethers.BrowserProvider(window.ethereum);
      const contractAddress="0x58105f09ac9ad5aae92dd62e7aa8f0aadc8c79e1";
      signer=await provider.getSigner();
      contract=new Contract(contractAddress,ABI,signer);
     const data=await contract.getAllOrgs();
     setOrgs(data);
     console.log(data)
      

    } catch (error) {
      console.log(error);
    }
  }
  
 
  console.log(orgs)
  return (
    <div className="w-screen flex items-center flex-col">
    <div className="w-1/2 my-16 items-center flex flex-col justify-center">
      <h1 className="font-bold text-7xl">Together we can save these</h1>
      <h2 className="text-red-200 text-5xl mt-1 font-semibold">Precious Animals</h2>
    </div>
    <div className="w-3/4 flex gap-20 flex-wrap justify-center">
      {orgs.map((org, index) => (
        <Organisation
          key={index}
          image={org[4]}
          title={org[1]}
          description={org[2]}
          wallet={org[3]}
        />
      ))}
    </div>
    <button onClick={handleWallet}>Connect Wallet</button>
  </div>
      );
    };
    
    export default Organisations;
    