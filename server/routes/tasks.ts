import express from 'express'
import * as db from '../db/tasks'

const router = express.Router()

// GET /tasks - Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTasks()
    res.json(tasks)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' })
  }
})

// GET /tasks/:id - Get a task by id
router.get('/:id', async (req, res) => {
  try {
    const task = await db.getTaskById(Number(req.params.id))
    if (task) {
      res.json(task)
    } else {
      res.status(404).json({ error: 'Task not found' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' })
  }
})

// POST /tasks - Create a new task
router.post('/', async (req, res) => {
  try {
    const newTask = await db.createTask(req.body)
    res.status(201).json(newTask)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' })
  }
})

// PATCH /tasks/:id - Update a task by id
router.patch('/:id', async (req, res) => {
  try {
    const updatedTask = await db.updateTask(Number(req.params.id), req.body)
    if (updatedTask) {
      res.json(updatedTask)
    } else {
      res.status(404).json({ error: 'Task not found' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' })
  }
})

// DELETE /tasks/:id - Delete a task by id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await db.deleteTask(Number(req.params.id))
    if (deleted) {
      res.json({ success: true })
    } else {
      res.status(404).json({ error: 'Task not found' })
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' })
  }
})

export default router
