import React from 'react'
import MonacoEditor from 'react-monaco-editor';

export default function EditCom() {
  return (
    <MonacoEditor
      width="30%"
      height="100%"
      language="javascript"
      theme="vs-dark"
      value={'console.log("hello world")'}
      onChange={(value) => { console.log(value); }}
    />
  )
}