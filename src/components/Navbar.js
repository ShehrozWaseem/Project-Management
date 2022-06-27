import { Link } from 'react-router-dom'
import { ThreeDots } from  'react-loader-spinner'

// styles & images
import './Navbar.css'
import Temple from '../assets/temple.svg'
import useLogout from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
    const {pending,logout} = useLogout()
    const {user} = useAuthContext();
  return (
    
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="nav logo" />
          <span>Manager.com</span>
        </li>
        {!user && <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        </>}
        
        {user && <>
        
        <li>
          {!pending && <button className="btn" onClick={logout}>Logout</button>}
          {pending && <button className="btn" disabled onClick={logout}><ThreeDots color="#8d69f1" height={20} width={20}/></button>}
        </li>
        </>}
      </ul>
    </nav>
  )
}
