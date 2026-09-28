import React, { useMemo, useState } from 'react'

import Header from '../Components/Header'
import TaskForm from '../Components/TaskForm'
import FilterBar from '../Components/FilterBar'
import TaskList from '../Components/TaskList'
import Footer from '../Components/Footer'

import useLocalStorage from '../hooks/useLocalStorage'

const Home = () => {
  const [tasks, setTasks] = useLocalStorage(
    'taskflow-tasks',
    []
  )

  const [statusFilter, setStatusFilter] =
    useState('All')

  const [categoryFilter, setCategoryFilter] =
    useState('All')

  const [editingTask, setEditingTask] =
    useState(null)

  const [darkMode, setDarkMode] =
    useLocalStorage('taskflow-dark-mode', false)

  // ADD TASK
  const addTask = (newTask) => {
    setTasks((currentTasks) => [
      newTask,
      ...currentTasks,
    ])
  }

  // EDIT TASK
  const updateTask = (updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    )

    setEditingTask(null)
  }

  // START EDITING
  const startEditing = (task) => {
    setEditingTask(task)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // CANCEL EDITING
  const cancelEdit = () => {
    setEditingTask(null)
  }

  // COMPLETE / UNCOMPLETE
  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    )
  }

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== id
      )
    )

    if (editingTask?.id === id) {
      setEditingTask(null)
    }
  }

  // CLEAR COMPLETED
  const clearCompleted = () => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => !task.completed
      )
    )
  }

  // FILTER TASKS
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusMatches =
        statusFilter === 'All' ||
        (statusFilter === 'Active' &&
          !task.completed) ||
        (statusFilter === 'Completed' &&
          task.completed)

      const categoryMatches =
        categoryFilter === 'All' ||
        task.category === categoryFilter

      return (
        statusMatches &&
        categoryMatches
      )
    })
  }, [
    tasks,
    statusFilter,
    categoryFilter,
  ])

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length

  const remainingCount =
    tasks.length - completedCount

  const toggleDarkMode = () => {
    setDarkMode((current) => !current)
  }

  return (
    <div
      className={
        darkMode
          ? 'app-container dark-mode'
          : 'app-container'
      }
    >

      <div className="task-container">

        <Header
          totalTasks={tasks.length}
          completedTasks={completedCount}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <TaskForm
          addTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
          cancelEdit={cancelEdit}
        />

        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          remainingCount={remainingCount}
          completedCount={completedCount}
          clearCompleted={clearCompleted}
        />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          startEditing={startEditing}
        />

        <Footer />

      </div>

    </div>
  )
}

export default Home