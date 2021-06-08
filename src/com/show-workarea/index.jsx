import React from 'react'
import './index.scss'
import { Form,Input } from 'antd';

export default function ShowWorkarea() {
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
  };
  return (
    <div className="workarea">
      <Form
        name="basic"
        {...formItemLayout}
        style={{ width: '100%' }}
      >
        <Form.Item
          label="单行文本"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </div>

  )
}
