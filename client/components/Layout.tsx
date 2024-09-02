import { Link, Outlet } from 'react-router-dom'
import AddTodo from './AddTodo'
import { LayoutProps } from '../types'
export default function Layout({
  loading,
  error,
  handleAddTask,
}: Omit<LayoutProps, 'tasks' | 'handleUpdateTask' | 'handleDeleteTask'>) {
  return (
    <>
      <header className="header">
        <h1>
          <Link to="/" className="header-link">
            Todo&apos;s
          </Link>
        </h1>
        <AddTodo onAddTask={handleAddTask} />
      </header>
      <section id="main-container">
        <section id="content-wrap">
          {error && <p className="error">{error}</p>}
          {loading ? <p>Loading...</p> : <Outlet />}
        </section>
      </section>
    </>
  )
}
