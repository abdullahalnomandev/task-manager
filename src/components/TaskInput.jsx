import React, { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle.trim());
      setTaskTitle('');
    }
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskInput