import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('uuid').unique()
      table
        .uuid('user_id')
        .references('uuid')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.text('post_text').comment('Content of the post')
      table.integer('status')
      table.integer('type').defaultTo(0) // 0-> text post, 1-> photo post, 2-> video post, 3-product post
      table.bigInteger('views').defaultTo(0)
      table.bigInteger('shared').defaultTo(0)
      // Assuming 'notifications' is a related entity
      table.json('notifications')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
