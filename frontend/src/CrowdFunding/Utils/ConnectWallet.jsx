import {ethers }from 'ethers'
import  { Contract } from 'ethers'
import ABI from './ABI.json'
export const ConnectWallet =async () => {
    let [provider,signer,account,contract] = [null,null,null,null];
    try {
        if(window.ethereum == null){
            alert("please install metamask")
        }
        
            let accounts=await window.ethereum.request({method:"eth_requestAccounts"});
            let selectedAccount=accounts[0];
            if(!selectedAccount){
                alert("account not selected")

            }
            provider=new ethers.BrowserProvider(window.ethereum);
            signer=await provider.getSigner();
            const contractAddress="0xDBd7CE3B3Be88a212956Cdf7cA304DE8653A0653";
            contract=new Contract(contractAddress,ABI,signer);
            return {provider,selectedAccount,contract,signer}

        
    } catch (error) {
        console.log(error)
    }
}