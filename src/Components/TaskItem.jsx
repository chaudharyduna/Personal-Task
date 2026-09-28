import React from 'react'

const TaskItem = ({
  task,
  toggleTask,
  deleteTask,
  startEditing,
}) => {
  const categoryClass = {
    Work: 'category-work',
    Personal: 'category-personal',
    Urgent: 'category-urgent',
  }

  const priorityClass = {
    Low: 'priority-low',
    Medium: 'priority-medium',
    High: 'priority-high',
  }

  return (
    <article
      className={
        task.completed
          ? 'task-item completed'
          : 'task-item'
      }
    >

      <div className="task-main">

        <button
          type="button"
          className={
            task.completed
              ? 'check-button checked'
              : 'check-button'
          }
          onClick={() =>
            toggleTask(task.id)
          }
          aria-label={
            task.completed
              ? 'Mark task as active'
              : 'Mark task as completed'
          }
        >
          {task.completed ? '✓' : ''}
        </button>

        <div className="task-details">

          <h3 className="task-title">
            {task.title}
          </h3>

          <div className="task-meta">

            <span
              className={`category-badge ${
                categoryClass[task.category]
              }`}
            >
              {task.category}
            </span>

            <span
              className={`priority-badge ${
                priorityClass[task.priority]
              }`}
            >
              {task.priority} Priority
            </span>

          </div>

        </div>

      </div>

      <div className="task-actions">

        <button
          type="button"
          className="edit-button"
          onClick={() =>
            startEditing(task)
          }
          title="Edit task"
          aria-label="Edit task"
        >
          ✎
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() =>
            deleteTask(task.id)
          }
          title="Delete task"
          aria-label="Delete task"
        >
          🗑
        </button>

      </div>

    </article>
  )
}

export default TaskItem