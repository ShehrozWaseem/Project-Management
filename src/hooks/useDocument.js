import React,{useState,useEffect} from 'react'
import { projFirestore } from '../firebase/config'

export const useDocument = (collection,id) => {
    const [document,setDocument] =useState(null)
    const [error,setError] =useState(null)

    useEffect(()=>{
        const ref = projFirestore.collection(collection).doc(id);

        const unsub = ref.onSnapshot((snapshot)=>{
            if(snapshot.data()){
                setDocument({...snapshot.data(),id:snapshot.id})
                setError(null)
            }
            else{
                setError('failed to fetch the document for id: '+ id)
            }

        },(err)=>{
            console.log(err.message)
            setError('failed to fetch the document')
        })
        
        return ()=>unsub()

    },[collection,id])
    return {document,error}
    
}

