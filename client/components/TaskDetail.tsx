import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Task, TaskDetailProps } from '../types' // Import types

function TaskDetail({
  task: initialTask,
  // onMinimize,
  onUpdateTask,
  onDeleteTask,
}: TaskDetailProps) {
  const [task, setTask] = useState<Task>(initialTask)

  const handleChange = (
    field: keyof Task,
    value: string | boolean | Date | null,
  ) => {
    const updatedTask = { ...task, [field]: value }
    setTask(updatedTask)
    onUpdateTask(updatedTask)
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
    <div className="task-detail">
      <div className="task-header">
        <h2 className="task-title">
          <input
            type="text"
            value={task.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="task-input"
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
          // NB: Time picker wont size properly so I have just removed it for now.
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
          <input
            id={`status-${task.id}`}
            type="checkbox"
            checked={task.is_complete}
            onChange={toggleComplete}
            className="task-checkbox"
          />
          {task.is_complete ? 'Completed' : 'Incomplete'}
        </label>

        <p className="task-dates">
          Date Created: {new Date(task.date_created).toLocaleString()}
        </p>
        <p className="task-dates">
          Date Modified: {new Date(task.date_modified).toLocaleString()}
        </p>
      </div>

      <button onClick={handleDelete} className="delete-button">
        Delete Task
      </button>
    </div>
  )
}

export default TaskDetail
