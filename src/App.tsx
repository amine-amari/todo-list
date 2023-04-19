import { useState } from 'react'
import Task from './components/Task'

function App() {

  const [taskItems, setTaskItems] = useState(["shopping", "shaving", "gardening", "wash car"]);
  const [task, setTask] = useState<string>('')

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const handleAddTask = () => {
    if (task != '') {
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {taskItems.map((item, index) => (
        <ul>
          <li key={index} onClick={() => completeTask(index)}>
            <Task text={item} />
          </li>
        </ul>
      ))}
      <input title='Task' value={task} onChange={(e) => (setTask(e.target.value))}></input>
      <button type='button' onClick={() => handleAddTask()}>Add Task</button>
    </div>
  )
}

export default App
