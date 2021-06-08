import React from 'react'
import './index.scss'
import { Button } from 'antd'
export default function Banner(props) {
  const { setShow } = props
  const handleClick = () => {
    setShow(false)
  }
  return (
    <div className="banner">
      <h1>form generator react</h1>
      <h2>- automatically generate forms or hooks by react</h2>
      <Button onClick={handleClick} size="large" type="primary" >Start quickly</Button>
    </div>
  )
}

