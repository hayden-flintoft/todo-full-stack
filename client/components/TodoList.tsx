import { useNavigate, useLocation } from 'react-router-dom'
import { useTaskContext } from '../context/TaskContext'
import TaskDetail from './TaskDetail'
import { useState } from 'react'

function TodoList() {
  const { tasks, handleUpdateTask, handleDeleteTask } = useTaskContext()
  const location = useLocation()
  const navigate = useNavigate()

  const currentTaskId = parseInt(location.pathname.split('/').pop() || '0', 10)
  const [minimizedTaskId, setMinimizedTaskId] = useState<number | null>(null)

  const handleTaskClick = (taskId: number) => {
    if (taskId === currentTaskId) {
      // Minimize the task if it's clicked twice in a row
      setMinimizedTaskId(minimizedTaskId === taskId ? null : taskId)
    } else {
      navigate(`/tasks/${taskId}`)
      setMinimizedTaskId(null)
    }
  }

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    taskId: number,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleTaskClick(taskId)
    }
  }

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.is_complete ? 'completed' : ''}>
          <div
            onClick={() => handleTaskClick(task.id)}
            onKeyPress={(e) => handleKeyPress(e, task.id)}
            role="button"
            tabIndex={0} // Makes the div focusable
            aria-expanded={
              task.id === currentTaskId && task.id !== minimizedTaskId
            }
            aria-label={`Task: ${task.name}`}
            style={{
              cursor: 'pointer',
              display: 'block',
              padding: '10px 0',
            }}
          >
            {task.name}
          </div>
          {task.id === currentTaskId && task.id !== minimizedTaskId && (
            <TaskDetail
              task={task}
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
