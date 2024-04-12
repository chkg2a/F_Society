import React, { useState,useEffect } from "react";
import Organisation from "./Organisation";
import {Contract, ethers }from 'ethers'
import ABI from './ABI.json'

const Organisations = () => {
  let [provider,signer,selectedAccount,contract] = [null,null,null,null];
  const [orgs,setOrgs]=useState([]);
  const [data,setData] = useState([]);
  const [account, setAccount] = useState()
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
      const contractAddress="0xDBd7CE3B3Be88a212956Cdf7cA304DE8653A0653";
      setAccount(selectedAccount)
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
    <div className="p-20 relative w-screen flex items-center flex-col">

      <div className="absolute mt-5 mr-5 top-0 text-slate-600 right-0">
        {account
          ? (
            <h1 className="font-bold">Connected Account: {account}</h1>
          )
          : (
            <button
              onClick={handleWallet}
              className="btn btn-block btn-sm mt-2 border disabled:opacity-80 border-slate-700"
            >
              Connect Wallet
            </button>
          )}
      </div>
    <div className="my-16 items-center flex flex-col justify-center">
      <h1 className="font-bold text-7xl">Together we can save these</h1>
      <h2 className="text-red-200 text-5xl mt-1 font-semibold">Precious Animals</h2>
    </div>
    <div className="w-3/4 flex gap-20 flex-wrap justify-center">
      {orgs.map((org, index) => (
        <Organisation
          key={index}
          wid={org[0]}
          image={org[4] ? org[4] : "/who.png"}
          title={org[1]}
          description={org[2]}
          wallet={org[3]}
          contract={contract}
          signer={signer}
          selectedAccount={selectedAccount}
          provider={provider}
        />
      ))}
    </div>
  </div>
      );
    };
    
    export default Organisations;
    
