import { useState } from 'react'
import Task from './components/Task'

function App() {

  const [taskItems, setTaskItems] = useState(["shopping", "shaving", "gardening", "wash car"]);

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      {taskItems.map((item, index) => (
        <div key={index} onClick={() => completeTask(index)}>
          <Task text={item} />
        </div>
      ))}
      
    </div>
  )
}

export default App
