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
            const contractAddress="0x58105f09ac9ad5aae92dd62e7aa8f0aadc8c79e1";
            contract=new Contract(contractAddress,ABI,signer);
            return {provider,selectedAccount,contract,signer}

        
    } catch (error) {
        console.log(error)
    }
}