import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Task, TaskDetailProps } from '../types' // Import types

function TaskDetail({
  task: initialTask,
  onUpdateTask,
  onDeleteTask,
}: TaskDetailProps) {
  const [task, setTask] = useState<Task>(initialTask)

  const handleChange = (
    field: keyof Task,
    value: string | boolean | Date | null,
  ) => {
    const updatedTask = {
      ...task,
      [field]: value,
      date_modified: new Date().toISOString(), // Update the date_modified field
    }
    setTask(updatedTask)
    // I have commented this out so i can include a save button to meet the requirements for WD03 of having one button on the form (the delete button isnt part of the form). Removing the comment below will reenable live saving.
    // onUpdateTask(updatedTask)
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdateTask(task)
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(task.id)
    }
  }

  const toggleComplete = () => {
    handleChange('is_complete', !task.is_complete)
  }

  return (
    <form className="task-detail" onSubmit={handleSave}>
      <div className="task-header">
        <h2 className="task-title">
          <label htmlFor={`task-name-${task.id}`} className="sr-only">
            Task Name:
          </label>
          <input
            type="text"
            id={`task-name-${task.id}`}
            value={task.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="task-input"
            aria-label="Task Name"
          />
        </h2>
      </div>

      <div className="task-content">
        <label className="task-label" htmlFor={`description-${task.id}`}>
          Description:
        </label>
        <textarea
          id={`description-${task.id}`}
          value={task.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          className="task-textarea"
        />

        <label className="task-label" htmlFor={`due-date-${task.id}`}>
          Due Date:
        </label>
        <DatePicker
          id={`due-date-${task.id}`}
          selected={task.due_date ? new Date(task.due_date) : null}
          onChange={(date) => {
            if (date) {
              date.setHours(9, 0, 0, 0) // Set the time to 9:00 AM
            }
            handleChange('due_date', date)
          }}
          dateFormat="P"
          className="task-datepicker"
        />

        <label className="task-label task-status" htmlFor={`status-${task.id}`}>
          Status:
        </label>
        <div>
          <input
            id={`status-${task.id}`}
            type="checkbox"
            checked={task.is_complete}
            onChange={toggleComplete}
            className="task-checkbox"
            aria-label={task.is_complete ? 'Completed' : 'Incomplete'}
          />
          {task.is_complete ? 'Completed' : 'Incomplete'}
        </div>

        <p className="task-dates">
          Date Created: {new Date(task.date_created).toLocaleString()}
        </p>
        <p className="task-dates">
          Date Modified: {new Date(task.date_modified).toLocaleString()}
        </p>
      </div>

      <div className="task-actions">
        {/* Comment out the save button if re-enabling live saving as it will be redundant. */}
        <button type="submit" className="save-button">
          Save Task
        </button>
        <button onClick={handleDelete} type="button" className="delete-button">
          Delete Task
        </button>
      </div>
    </form>
  )
}

export default TaskDetail
