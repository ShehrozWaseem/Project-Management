import './Login.css'
import React,{useState} from 'react'
import { useLogin } from '../../hooks/useLogin';
import { ThreeDots } from  'react-loader-spinner'


export default function Login() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const {error,pending,login} = useLogin();
  const submitHanlder = (e) =>{
    e.preventDefault()
    login(email,psw)
  }
  return (
    <form className="auth-form" onSubmit={submitHanlder}>
      <h2>Login</h2>
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
      {!pending && <button className="btn">Login</button>}
      {pending && <button className="btn" disabled> <ThreeDots color="#8d69f1" height={20} width={20} /></button>}
      {error && <div className="error">{error}</div>}
    </form>

  )
}
