import React from 'react'

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <span className="task-title">{task.title}</span>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  )
}

export default TaskItem