import React from 'react'

type TaskProps = {
    text: string
}

function Task({text}: TaskProps) {
  return (
    <div>
        <p>{text}</p>
    </div>
  )
}

export default Task