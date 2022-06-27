import React , {useState,useEffect} from 'react'
import { projAuth, projFirestore, projStorage } from '../firebase/config';
import { useAuthContext } from './useAuthContext';


function useSignup() {
    const [error,isError] = useState(null);
    const [pending,isPending] = useState(false);
    const {dispatch} = useAuthContext();
    const [isCancelled,setIsCancelled] = useState(false)

    const signup = async (email,password,displayName,thumbnail) => {
        isError(null)
        isPending(true)
        try{
            const res = await projAuth.createUserWithEmailAndPassword(email,password)

            if(!res){  
                throw new Error('Could not create this user')
            }
            //uploading image
            const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
            const img = await projStorage.ref(uploadPath).put(thumbnail)
            const imgURL = await img.ref.getDownloadURL()

            //user name
            await res.user.updateProfile({displayName,photoURL:imgURL})

            //creating firebase document in f_db for every user
            await projFirestore.collection('users').doc(res.user.uid).set({
                online:true,
                displayName,
                photoURL:imgURL
            })

            dispatch({type:"LOGIN", payload:res.user})

            
            if(!isCancelled){
            isPending(false)
            isError(null)}
        }

        catch (err){
            if(!isCancelled){
            console.log(err.message)
            isError(err.message)
            isPending(false)
        }
        }
    }

    useEffect(()=>{
       return ()=>setIsCancelled(true)
    },[])

    return {error,pending,signup}
}

export default useSignup