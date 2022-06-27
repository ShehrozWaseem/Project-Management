import './Dashboard.css'
import React,{useState} from 'react'
import { useCollection } from '../../hooks/useCollection'
import ProjList from '../../components/ProjList'
import { TailSpin } from  'react-loader-spinner'
import ProjectFilter from '../Project/ProjectFilter'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Dashboard() {
  const {documents,error} = useCollection('project')
  const {user} = useAuthContext();

  const [new_filter, setFilter] = useState("all");
  const ChangeFilter= (filter_val) =>{
    setFilter(filter_val)
  } 
  const projects = documents ? documents.filter((proj)=>{
    switch(new_filter){
      case 'all':
        return true

      case 'mine':
        let assignedTome=false
        proj.assignedUsersList.forEach(element => {
            if(user.uid===element.id){
              assignedTome=true
            }
        })
        return assignedTome

        case 'development':
        case 'design':
        case 'sales':
        case 'marketing':
        return proj.category===new_filter
        
        default:
          return true
    }
  }): null

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className='error'>{error}</p>}
      {!documents && <TailSpin color="#00BFFF" height={80} width={80} />}
      {documents && <ProjectFilter new_filter={new_filter} ChangeFilter={ChangeFilter}/>}
      {projects && <ProjList projects={projects}/>}
    </div>
  )
}
