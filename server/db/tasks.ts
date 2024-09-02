import connection from './connection'

// Get all tasks
export function getAllTasks(db = connection) {
  return db('tasks').select()
}

// Get a single task by ID
export function getTaskById(id: number, db = connection) {
  return db('tasks').where({ id }).first()
}

// Create a new task
export function createTask(task: Partial<Task>, db = connection) {
  return db('tasks')
    .insert(task)
    .returning('*')
    .then(([newTask]) => newTask)
}

// Update an existing task
export function updateTask(
  id: number,
  updates: Partial<Task>,
  db = connection,
) {
  return db('tasks')
    .where({ id })
    .update(updates)
    .returning('*')
    .then(([updatedTask]) => updatedTask)
}

// Delete a task
export function deleteTask(id: number, db = connection) {
  return db('tasks').where({ id }).del()
}

export type Task = {
  id: number
  name: string
  description: string
  date_created: string
  date_modified: string
  due_date: string
  is_complete: boolean
}
