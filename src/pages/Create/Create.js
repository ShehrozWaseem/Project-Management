import './Create.css'
import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import { timeStamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import useFirestore from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom'

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

export default function Create() {
  const history = useHistory();
  const {addDocument,response} = useFirestore('project')
  const {user} = useAuthContext()
  const {documents} = useCollection('users')
  const [users,setUsers]=useState([])
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignedUsers, setAssignedUsers] = useState([])
  const [formError,setFormError] =useState(null);

  useEffect(()=>{
    if(documents){
      const options = documents.map(users=>{
        return {value:users, label:users.displayName}
      })
      setUsers(options)
    }
  },[documents])


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!category){
      setFormError('Please select a category')
      return
    }
    if(assignedUsers.length<1){
      setFormError('Please select a user')
      return
    }
    const createdBy = {
      id : user.uid,
      displayName : user.displayName,
      photoURL : user.photoURL
    }
    const assignedUsersList = assignedUsers.map((u)=>{
      return {
        displayName : u.value.displayName,
        id:u.value.id,
        photoURL: u.value.photoURL
      }
    })

    const project = {
      name,
      details,
      category:category.value,
      dueDate : timeStamp.fromDate(new Date(dueDate)),
      comments :[],
      createdBy: createdBy,
      assignedUsersList:assignedUsersList

    }

    await addDocument(project)
    if(!response.isError){
      history.push('/')
    }
    console.log(project)
    setFormError(null)
  }

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required 
            type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea 
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details} 
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input
            required 
            type="date" 
            onChange={(e) => setDueDate(e.target.value)} 
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          <Select options={categories} onChange={(option)=>setCategory(option)} />
          {/* select here later */}
        </label>
        <label>
          <span>Assign to:</span>
          <Select options={users} onChange={(option)=>setAssignedUsers(option)} isMulti />
        </label>

        <button className="btn">Add Project</button>
        {formError && <p className='error'>{formError}</p>}
      </form>

    </div>
  )
}
