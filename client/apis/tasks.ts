import { Task } from '../../server/db/tasks'

export async function addTask(task: {
  name: string
  description?: string
  due_date?: string
}) {
  const response = await fetch('/api/v1/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  if (!response.ok) {
    throw new Error('Failed to add task')
  }

  return response.json()
}

export async function getAllTasks() {
  const response = await fetch('/api/v1/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch tasks')
  }

  return response.json()
}

export async function getTaskById(id: number) {
  const response = await fetch(`/api/v1/tasks/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch task')
  }

  return response.json()
}

export async function updateTask(id: number, updates: Partial<Task>) {
  const response = await fetch(`/api/v1/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  })

  if (!response.ok) {
    throw new Error('Failed to update task')
  }

  return response.json()
}

export async function deleteTask(id: number) {
  const response = await fetch(`/api/v1/tasks/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete task')
  }

  return response.json()
}
