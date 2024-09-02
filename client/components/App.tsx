import { useState, useEffect } from 'react'
import RouterWithContext from '../router'
import { getAllTasks, addTask, updateTask, deleteTask } from '../apis/tasks'
import { TaskContext } from '../context/TaskContext'
import { Task } from '../types'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const tasks = await getAllTasks()
      setTasks(tasks)
      setLoading(false)
    } catch (err) {
      console.error('Failed to fetch tasks', err)
      setError('Failed to fetch tasks')
      setLoading(false)
    }
  }

  const handleAddTask = async (taskName: string) => {
    try {
      const newTask = await addTask({ name: taskName })
      setTasks([...tasks, newTask])
    } catch (err) {
      console.error('Failed to add task', err)
      setError('Failed to add task')
    }
  }

  const handleUpdateTask = async (updatedTask: Partial<Task>) => {
    try {
      if (updatedTask.id !== undefined) {
        await updateTask(updatedTask.id, updatedTask)
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? { ...task, ...updatedTask } : task,
          ),
        )
      }
    } catch (err) {
      console.error('Failed to update task', err)
      setError('Failed to update task')
    }
  }

  const handleDeleteTask = async (taskId: number) => {
    try {
      await deleteTask(taskId)
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
    } catch (err) {
      console.error('Failed to delete task', err)
      setError('Failed to delete task')
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        handleAddTask,
        handleUpdateTask,
        handleDeleteTask,
      }}
    >
      <RouterWithContext />
    </TaskContext.Provider>
  )
}

export default App
