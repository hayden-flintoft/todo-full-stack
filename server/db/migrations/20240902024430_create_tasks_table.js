export async function up(knex) {
  await knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.text('description')
    table.timestamp('date_created').defaultTo(knex.fn.now())
    table.timestamp('date_modified').defaultTo(knex.fn.now())
    table.timestamp('due_date')
    table.boolean('is_complete').defaultTo(false)
  })
}

export async function down(knex) {
  await knex.schema.dropTable('tasks')
}
