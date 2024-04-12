import React from 'react'
import {useState ,useEffect} from 'react'
import Web3Context from '../Context/Web3Context'
import {  useNavigate } from 'react-router-dom'


import { ConnectWallet } from '../Utils/ConnectWallet'
const Wallet = ({children}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [recipient, setRecipient] = useState('');
    const [state,setState]=useState({
        provider:null,
        selectedAccount:null,
        contract:null,
        signer:null
    })
    const navigate=useNavigate();
    const handleWallet = async () => {
        try {
            const { provider, selectedAccount, contract, signer } = await ConnectWallet();
            setState({ provider, selectedAccount, contract, signer });
           
            
        } catch (error) {
            console.log(error);
        }
    }
    const hanldeSubmit=async(e)=>{
        e.preventDefault();
        const { contract } = state;
        try {
            const tx=await contract.addOrg(name,description,recipient);
        await tx.wait();
        } catch (error) {
            console.log(error)
        }
        
    }
    
  return (
    <>
    <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
    
    <button onClick={handleWallet}>Connect Wallet</button>
    <form  onSubmit={hanldeSubmit}>
    <h2>Add Organization</h2>
    
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
    <input type="text" placeholder="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
    <button type="submit">Add Organization</button>
</form>
    </>
  )
}

export default Wallet
