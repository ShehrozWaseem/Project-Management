import './ProjList.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'


function ProjList({projects}) {
  return (
    <div className='project-list'>
      

      {projects.length === 0 && <p>No Projects yet!</p>}
      {projects.map((p)=>(
        <Link to={`/projects/${p.id}`} key={p.id}>
        <h4>{p.name}</h4>
        
        <p>Due by {p.dueDate.toDate().toDateString()}</p>
        <div className="assigned-to">
          <ul>
            {p.assignedUsersList.map(user=>(
              
              <li key={user.id}>
                <Avatar src={user.photoURL}/>
              </li>
            ))}
          </ul>
          <p>Created By: {p.createdBy.displayName}</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default ProjList