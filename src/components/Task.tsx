import React from 'react'

type TaskProps = {
    text: string
}

function Task({text}: TaskProps) {
  return (
    <div>{text}</div>
  )
}

export default Task