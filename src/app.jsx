import React, {useState} from  'react'
import './app.scss'
import {Button} from 'antd'
const App = () => {
  const [count, setCount] = useState('hello')

  const handleClick = () => {
    setCount('hello form generator react antd')
  }
  return (
    <div className="app" >
      <h2>
        {count}
      </h2>
      <hr />
      <Button onClick={handleClick} type="primary">点击</Button>
    </div>
  )
}

export default App