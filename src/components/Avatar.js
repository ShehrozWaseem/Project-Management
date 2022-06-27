import React from 'react'
import './Avatar.css'


export default function Avatar({src}) {
  return (
    <div className='avatar'>
        {src && <img src={src} alt='user'/>}
    </div>
  )
}
