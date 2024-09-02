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

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.is_complete ? 'completed' : ''}>
          <div
            style={{
              width: '100%',
              display: 'block',
            }}
          >
            <label
              onClick={() => handleTaskClick(task.id)}
              style={{
                cursor: 'pointer',
                display: 'block',
                padding: '10px 0',
              }}
              aria-expanded={
                task.id === currentTaskId && task.id !== minimizedTaskId
              }
            >
              {task.name}
            </label>
            {task.id === currentTaskId && task.id !== minimizedTaskId && (
              <TaskDetail
                task={task}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
