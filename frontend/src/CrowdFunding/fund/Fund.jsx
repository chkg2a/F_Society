import React from 'react'
import Web3Context from '../Context/Web3Context'
import {useState,useEffect,useRef,useContext} from 'react'
const Fund = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [recipient, setRecipient] = useState('');
    const state = useContext(Web3Context);
    console.log(state)
    console.log(name,description,recipient)
  return (
    <>
    <form >
    <h2>Add Organization</h2>
    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
    <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
    <input type="text" placeholder="Recipient Address" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
    <button type="submit">Add Organization</button>
</form>

    </>
  )
}

export default Fund
