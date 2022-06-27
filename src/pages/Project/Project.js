import './Project.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument';
import { TailSpin } from  'react-loader-spinner'
import ProjectSummary from './ProjectSummary';
import Comments from './Comments';

export default function Project() {
  const {id} = useParams();
  const {error,document} = useDocument('project',id)
  if(error){
    return <div className='error'>{error}</div>
  }
  if(!document){
    return <TailSpin color="#00BFFF" height={80} width={80} />
  }
  return (
    <div className='project-details'>
      <ProjectSummary project={document}/>
      <Comments project={document}/>
    </div>
  )
}
