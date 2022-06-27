import React,{useState,useEffect} from 'react'
import { projAuth, projFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';


export const useLogout =() => {
    const [error,isError] = useState(null);
    const [pending,isPending] = useState(false);
    const {dispatch,user} = useAuthContext();
    const [isCancelled,setIsCancelled] = useState(false)


    const logout = async () =>{
        isError(null)
        isPending(true)
        try{
            const {uid} = user
            await projFirestore.collection('users').doc(uid).update({online:false})
            
            await projAuth.signOut()

            dispatch({type:"LOGOUT"})
            if(!isCancelled){
            isPending(false)
            isError(null)}
        }
        catch(err){
            console.log(err.message)
            if(!isCancelled){
            isError(err.message)
            isPending(false)}
        }
    }
    useEffect(()=>{
        return ()=>setIsCancelled(true)
    },[])
    return {error,pending,logout}
}
export default useLogout
