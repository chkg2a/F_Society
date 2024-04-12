import React from "react";
import {ethers} from "ethers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contract } from "ethers";
import ABI from "./ABI.json"

const Organisation = (props) => {
  const [form, setFormData] = useState({});
  const navigate = useNavigate();
 
 
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...form, [e.target.id]: e.target.value });
  };
  const handleDonate=async(e)=>{
    e.preventDefault();
    try {
      if(window.ethereum == null){
        alert("please install metamask");
      }
      let accounts=await window.ethereum.request({method:"eth_requestAccounts"});
    const  selectedAccount=accounts[0];
      if(!selectedAccount){
        alert("please select an account");
      }
   const   provider=new ethers.BrowserProvider(window.ethereum);
       const     signer=await provider.getSigner();
      const contractAddress="0xDBd7CE3B3Be88a212956Cdf7cA304DE8653A0653";
      const contract=new Contract(contractAddress,ABI,signer);

      const amount=document.getElementById("amount").value;
      const amountTo=await ethers.parseUnits(amount,18).toString();
      console.log(amountTo)
      const id=Number(props.wid);
      console.log(id)
      const tx = await contract.sendFund(id, amountTo);
      await tx.wait();
      alert("Donation Successful");


    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/who.png"
          alt="Organisation"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Donate
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <form>
                <div>
                  <label className="label p-2">
                    <span className="text-xl label-text">
                      Amount
                    </span>
                  </label>
                  <input
                    type="number"
                    id="amount"
                    placeholder="Enter Donation Amount"
                    className="w-full input input-bordered h-15"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex">
                  <button onClick={handleDonate}
                    className="btn btn-block btn-sm mt-2 border disabled:opacity-80 border-slate-700"
                  >
                    Donate
                  </button>
                </div>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
