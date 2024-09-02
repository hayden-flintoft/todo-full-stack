export type Task = {
  id: number
  name: string
  description?: string
  due_date?: string
  is_complete: boolean
  date_created: string
  date_modified: string
}

export interface TaskDetailProps {
  task: Task
  // onMinimize: () => void
  onUpdateTask: (updatedTask: Partial<Task>) => void
  onDeleteTask: (taskId: number) => void
}

export interface TodoListProps {
  tasks: Task[]
  handleUpdateTask: (updatedTask: Partial<Task>) => void
  handleDeleteTask: (taskId: number) => void
}

export interface LayoutProps {
  tasks: Task[]
  loading: boolean
  error: string | null
  handleAddTask: (taskName: string) => void
  handleUpdateTask: (updatedTask: Partial<Task>) => void
  handleDeleteTask: (taskId: number) => void
}
