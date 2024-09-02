import { createContext, useContext } from 'react'

type Task = {
  id: number
  name: string
  description?: string
  due_date?: string
  is_complete: boolean
  date_created: string
  date_modified: string
}

type TaskContextType = {
  tasks: Task[]
  loading: boolean
  error: string | null
  handleAddTask: (taskName: string) => Promise<void>
  handleUpdateTask: (updatedTask: Partial<Task>) => Promise<void>
  handleDeleteTask: (taskId: number) => Promise<void>
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider')
  }
  return context
}
