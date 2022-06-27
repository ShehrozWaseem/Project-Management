import Avatar from "../../components/Avatar"
import { useAuthContext } from "../../hooks/useAuthContext"
import useFirestore from "../../hooks/useFirestore"
import { useHistory } from "react-router-dom"

export default function ProjectSummary({ project }) {
    const {remDocument} = useFirestore('project')
    const {user} = useAuthContext();
    const history = useHistory()
const handleSubmit = (e) =>{
    remDocument(project.id)
    history.push('/')
}
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">
          {project.details}
        </p>
        <h4>Project assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map(user => (
            <div  key={user.id}>
              <Avatar classname="avatar" src={user.photoURL} />
              <p className="two">{user.displayName}</p>
            </div>
          ))}
        </div>
        <p className="comment-para">Created By: {project.createdBy.displayName}</p>
      </div>
      {user.uid === project.createdBy.id ? (
      <button className="btn" onClick={handleSubmit}>Mark as Complete</button>):<button className="errorr" disabled onClick={handleSubmit}>Only the owner can mark it as completed</button>}
    </div>
  )
}