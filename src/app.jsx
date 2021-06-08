import React, { useState } from 'react'
import Banner from './banner/index'
import Edit from './edit/index'
import './app.scss'
const App = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="app" >
      {show? <Banner setShow={setShow} />: <Edit/>}
    </div>
  )
}

export default App