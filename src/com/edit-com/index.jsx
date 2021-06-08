import React from 'react'
import MonacoEditor from 'react-monaco-editor';
import './index.scss'
const code = `export default function FormItem() {
  const formItemLayout = {
    labelCol: {
      sm: { span: 4 },
    },
  };
  return (
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
  )
}
`

export default function EditCom() {
  return (
    <MonacoEditor
      width="50%"
      height="100%"
      className="edit-com"
      options={{
        readOnly: true
      }}
      theme="vs-dark"
      value={code}
      onChange={(value) => { console.log(value); }}
    />
  )
}