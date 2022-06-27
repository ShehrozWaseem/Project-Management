import react,{ useReducer,useEffect,useState } from "react";
import { projFirestore,timeStamp } from "../firebase/config";

let intialState = {
    document:null,
    isPending:null,
    isError:null,
    success:null
}
const firestoreReducer = (state,action) =>{
    switch (action.type){
        case "IS_PENDING":
            return {isPending:true,isError:null,document:null,success:null}
        case "DOC_ADDED":
            return {isPending:false,isError:null,document:action.payload,success:true}
        case "DLETED_DOC":
            return {isPending:false,isError:null,document:action.payload,success:true}
        case "UPDATED_DOCUMENT":
            return {isPending:false,error:null,document:action.payload,success:true}
        case "ERROR":
            return {isPending:false,error:action.payload,document:null,success:null}

        default:
            return state
    }
}

const useFirestore =(collection) => {
    const [response, dispatch] = useReducer(firestoreReducer,intialState);
    const [isCancelled,setIsCancelled] = useState(false);

    const ref = projFirestore.collection(collection)

    const dispatchIfNotCancelled = (action) =>{
        if(!isCancelled){
            dispatch(action)
        }
    }

    const addDocument = async (doc) =>{
        dispatch({type:'IS_PENDING'})
        try{
            const createdAt = timeStamp.fromDate(new Date())
            const addedDoc = await ref.add(doc)
            dispatchIfNotCancelled({type:"ADDED_DOC",payload:addedDoc})

        }catch(err){
            dispatchIfNotCancelled({type:"ERROR",payload:err.message})
        }
    }

    const remDocument = async (id) =>{
        dispatch({type:'IS_PENDING'})
        try{    
            const deletedDoc = await ref.doc(id).delete()
            dispatchIfNotCancelled({type:"DLETED_DOC",payload:deletedDoc})
        }catch(err){
            dispatchIfNotCancelled({type:"ERROR",payload:err.message})
        }
    }

    const updateDocument = async (id, updates) =>{
        dispatch ({type:"IS_PENDING"})

        try{
            const updatedDocument = await ref.doc(id).update(updates)
            dispatchIfNotCancelled({type:"UPDATED_DOCUMENT" , payload: updatedDocument})
            return updatedDocument
        }
        catch(err){
            dispatchIfNotCancelled({type:"ERROR",payload:err.emssage})
            return null
        }
    }


    useEffect(()=>{
        return ()=>setIsCancelled(true)
    },[])

    return {addDocument,remDocument,updateDocument,response}
}

export default useFirestore