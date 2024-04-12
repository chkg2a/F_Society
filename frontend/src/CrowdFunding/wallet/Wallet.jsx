import React from "react";
import { useEffect, useState } from "react";
import Web3Context from "../Context/Web3Context";
import { useNavigate } from "react-router-dom";

import { ConnectWallet } from "../Utils/ConnectWallet";
const Wallet = ({ children }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [img,setImg]=useState("")
  const [state, setState] = useState({
    provider: null,
    selectedAccount: null,
    contract: null,
    signer: null,
  });

  useEffect(() => {
    handleWallet();
  }, []);

  const navigate = useNavigate();
  const handleWallet = async () => {
    try {
      const { provider, selectedAccount, contract, signer } =
        await ConnectWallet();
      setState({ provider, selectedAccount, contract, signer });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { contract } = state;
    try {
      const tx = await contract.addOrg(name, description, recipient,img);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
      <div className="h-[80%] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
              Join Organization
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">
                    Organization Name
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full input input-bordered h-10"
                  required
                />
              </div>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Description</span>
                </label>

                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full input input-bordered h-10"
                  required
                />
              </div>
              <div>
                <label className="label p-2">
                  <span className="text-base text-blue-300 label-text">
                    Password
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Recipient Address"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full input input-bordered h-10"
                  required
                />
                <input
                type="text"
                placeholder="Image Url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                className="w-full input input-bordered h-10"
                required
              />
              </div>
              <div>
                {state.selectedAccount
                  ? (
                    <button
                      type="submit"
                      className="btn btn-block btn-sm mt-2 border disabled:opacity-80 border-slate-700"
                    >
                      Add Organization
                    </button>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
