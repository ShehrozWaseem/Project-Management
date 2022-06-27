import "./Signup.css";
import React, { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { ThreeDots } from  'react-loader-spinner'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [psw, setPsw] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [thumbnailError, setThumbnailError] =useState(null)
  const {error,pending,signup} = useSignup();
  const submitHanlder = (e) =>{
    e.preventDefault()
    signup(email,psw,displayName,thumbnail)
    
  }


  const fileHandler = (e) =>{
    setThumbnail(null)
    let selected = e.target.files[0]; //return selected file obj 
    if(!selected){
      setThumbnailError('Please select an image to be uploaded')
      return
    }
    if(!selected.type.includes('image')){
      setThumbnailError('Please select valid image format')
      return
    }
    if(selected.size > 100000){
      setThumbnailError('Please select an image of less than 100 KB')
      return
    }
    setThumbnailError('')
    setThumbnail(selected);
  }
  return (
    <form className="auth-form" onSubmit={submitHanlder}>
      <h2>Signup</h2>
      <label>
        <span>Email: </span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password: </span>
        <input
          type="password"
          required
          onChange={(e) => setPsw(e.target.value)}
          value={psw}
        />
      </label>
      <label>
        <span>Display Name: </span>
        <input
          type="text"
          required
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Upload Image: </span>
        <input
          type="file"
          onChange={fileHandler}
         
        />
      {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      {!pending && <button className="btn">Signup</button>}
      {pending && <button className="btn" disabled>Loading <ThreeDots color="#8d69f1" height={20} width={20} /></button>}
      {error && <div className="error">{error}</div>}
    </form>

  );
}
