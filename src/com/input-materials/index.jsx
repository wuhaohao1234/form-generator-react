import React from 'react'
import {Button} from 'antd'
import './index.scss'
const InputMaterIals = () => {
  return (
    <div className="input-merterials" >
      <div className="item">
        <h3>输入型组件</h3>
        <div className="content">
          <Button>单行文本</Button>
          <Button>多行文本</Button>
          <Button>密码</Button>
          <Button>计数器</Button>
          <Button>编辑器</Button>
        </div>
      </div>
      <div className="item">
        <h3>选择形组件</h3>
        <div className="content">
          <Button>下拉选择</Button>
          <Button>级联选择</Button>
          <Button>单项框组</Button>
          <Button>多项框组</Button>
          <Button>开关</Button>
          <Button>滑块</Button>
          <Button>时间选择</Button>
        </div>
      </div>
      <div className="item">
        <h3>布局型组件</h3>
        <div className="content">
          <Button>行容器</Button>
          <Button>按钮</Button>
        </div>
      </div>
    </div>
  )
}

export default InputMaterIals