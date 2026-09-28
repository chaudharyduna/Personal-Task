import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  startEditing,
}) => {
  if (tasks.length === 0) {
    return (
      <section className="empty-state">

        <div className="empty-icon">
          ✓
        </div>

        <h3>
          No tasks found
        </h3>

        <p>
          Add a new task or change your filters
          to see your tasks here.
        </p>

      </section>
    )
  }

  return (
    <section className="task-list">

      <div className="task-list-header">

        <div>
          <h2>
            Your Tasks
          </h2>

          <p>
            Keep track of everything you need to do.
          </p>
        </div>

        <span>
          {tasks.length}{' '}
          {tasks.length === 1
            ? 'task'
            : 'tasks'}
        </span>

      </div>

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEditing={startEditing}
        />
      ))}

    </section>
  )
}

export default TaskList