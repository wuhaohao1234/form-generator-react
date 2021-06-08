import React from 'react'
import './index.scss'
import EditCom from '@com/edit-com/index'
import Materials from '@com/materials/index'
export default function Edit() {
  return (
    <div className="edit" >
      <Materials/>
      <EditCom/>
    </div>
  )
}
