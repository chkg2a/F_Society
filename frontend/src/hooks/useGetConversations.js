import {useState,useEffect} from 'react'

const useGetConversations = () => {
    const [conversations,setConversations] = useState([]);
    const getTokenFromLocalStorage = () => {
        const token = localStorage.getItem('jwt'); // Assuming 'jwtToken' is the key used to store the JWT token
        return token;
      };
    useEffect(()=>{
        const getConversation=async()=>{
            try {
                const token = getTokenFromLocalStorage();
                if (!token) {
                  throw new Error('JWT token not found in local storage');
                }
                const res=await fetch('/api/users',{
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${token}`
                      }
                });
                const data=await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                console.log(error);
            }
        }
        getConversation();
    },[])
    return conversations;
}
export default useGetConversations;
