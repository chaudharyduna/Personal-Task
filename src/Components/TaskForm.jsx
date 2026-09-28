import React, { useEffect, useState } from 'react'

const TaskForm = ({
  addTask,
  editingTask,
  updateTask,
  cancelEdit,
}) => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Work')
  const [priority, setPriority] = useState('Medium')

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setCategory(editingTask.category)
      setPriority(editingTask.priority)
    } else {
      setTitle('')
      setCategory('Work')
      setPriority('Medium')
    }
  }, [editingTask])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    if (editingTask) {
      updateTask({
        ...editingTask,
        title: title.trim(),
        category,
        priority,
      })
    } else {
      addTask({
        id: Date.now(),
        title: title.trim(),
        category,
        priority,
        completed: false,
        createdAt: new Date().toISOString(),
      })
    }

    setTitle('')
    setCategory('Work')
    setPriority('Medium')
  }

  const handleCancel = () => {
    setTitle('')
    setCategory('Work')
    setPriority('Medium')
    cancelEdit()
  }

  return (
    <section className="task-form-card">

      <div className="section-title">

        <div className="section-icon">
          {editingTask ? '✎' : '+'}
        </div>

        <div>
          <h2>
            {editingTask
              ? 'Edit Task'
              : 'Add New Task'}
          </h2>

          <p>
            {editingTask
              ? 'Update your task details below.'
              : 'Create a task and keep your work organized.'}
          </p>
        </div>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group task-title-input">
            <label htmlFor="task-title">
              Task Title
            </label>

            <input
              id="task-title"
              type="text"
              className="form-control"
              placeholder="What do you need to do?"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Category
            </label>

            <select
              id="category"
              className="form-select"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              <option value="Work">
                Work
              </option>

              <option value="Personal">
                Personal
              </option>

              <option value="Urgent">
                Urgent
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">
              Priority
            </label>

            <select
              id="priority"
              className="form-select"
              value={priority}
              onChange={(event) =>
                setPriority(event.target.value)
              }
            >
              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>
            </select>
          </div>

          <div className="form-group button-group">

            <label>&nbsp;</label>

            <button
              type="submit"
              className="btn-add-task"
            >
              {editingTask ? 'Save Changes' : '+ Add Task'}
            </button>

          </div>

          {editingTask && (
            <div className="form-group button-group">

              <label>&nbsp;</label>

              <button
                type="button"
                className="btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>

            </div>
          )}

        </div>

      </form>

    </section>
  )
}

export default TaskForm