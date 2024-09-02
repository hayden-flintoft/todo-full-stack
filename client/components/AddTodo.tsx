import { useState } from 'react'

interface AddTodoProps {
  onAddTask: (taskName: string) => void
}

function AddTodo({ onAddTask }: AddTodoProps) {
  const [taskName, setTaskName] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (taskName.trim()) {
      onAddTask(taskName)
      setTaskName('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={taskName}
        onChange={handleInputChange}
        aria-label="Task Name"
      />
    </form>
  )
}

export default AddTodo
