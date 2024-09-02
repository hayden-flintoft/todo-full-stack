export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()

  // Inserts seed entries
  await knex('tasks').insert([
    {
      name: 'Complete the project setup',
      description: 'Set up the initial project structure and configuration.',
      date_created: knex.fn.now(),
      date_modified: knex.fn.now(),
      due_date: knex.fn.now(),
      is_complete: false,
    },
    {
      name: 'Create database migrations',
      description: 'Create the migrations for the tasks table.',
      date_created: knex.fn.now(),
      date_modified: knex.fn.now(),
      due_date: knex.fn.now(),
      is_complete: true,
    },
    {
      name: 'Build the API routes',
      description: 'Set up the CRUD routes for managing tasks.',
      date_created: knex.fn.now(),
      date_modified: knex.fn.now(),
      due_date: knex.fn.now(),
      is_complete: false,
    },
  ])
}
