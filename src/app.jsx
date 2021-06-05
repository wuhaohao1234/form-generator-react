import React,{ useState } from 'react'
import './app.scss'
import MonacoEditor from 'react-monaco-editor';
import { Button } from 'antd'
const App = () => {
  const [count,setCount] = useState('hello react form design')

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
      <hr />
      <MonacoEditor
        width="100%"
        height="100vh"
        language="javascript"
        theme="vs-dark"
        value={'console.log("hello world")'}
        onChange={(value) => {console.log(value);}}
      />
    </div>
  )
}

export default App