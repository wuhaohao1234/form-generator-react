import React,{ useState } from 'react'
import './index.scss'
import { Button } from 'antd'
export default function Banner() {
  const [show, setShow] = useState(false)
  return (
    show ?
      <div className="banner">
        <h1>form generator react</h1>
        <h2>- automatically generate forms or hooks by react</h2>
        <Button onClick={() => setShow(false)} size="large" type="primary" >Start quickly</Button>
      </div>
      : null
  )
}

