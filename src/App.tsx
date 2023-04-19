import { useState } from 'react'
import Task from './components/Task'

function App() {

  const taskItems = ["shopping", "shaving", "gardening", "wash car"]

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {taskItems.map((item, index) => (
        <div key={index}>
          <Task text={item} />
        </div>
      ))}
      
    </div>
  )
}

export default App
