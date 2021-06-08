import React from 'react'
import './index.scss'
import InputMaterIals from '../input-materials/index'
import ShowWorkarea from '../show-workarea/index'

export default function Materials() {
  return (
    <div className="materials" >
      <InputMaterIals/>
      <ShowWorkarea/>
    </div>
  )
}
