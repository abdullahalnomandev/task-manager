import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className='no-tasks'>No tasks to display</p>;
  }

  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggleTask(task.id)}
          onDelete={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
