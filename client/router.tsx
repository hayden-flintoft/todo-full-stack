import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Layout from './components/Layout'
import TodoList from './components/TodoList'
import { useTaskContext } from './context/TaskContext'

const RouterWithContext = () => {
  const { loading, error, handleAddTask } = useTaskContext()

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route
        path="/"
        element={
          <Layout
            loading={loading}
            error={error}
            handleAddTask={handleAddTask}
          />
        }
        key="layout"
      >
        <Route index element={<TodoList />} key="todo-list" />
        <Route path="tasks/:id" element={<TodoList />} key="task-detail" />
      </Route>,
    ]),
  )

  return <RouterProvider router={router} />
}

export default RouterWithContext
