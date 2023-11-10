import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'replies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('uuid').unique()
      table
        .uuid('post_id')
        .references('uuid')
        .inTable('posts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('comment_id')
        .references('uuid')
        .inTable('comments')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('user_id')
        .references('uuid')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.text('text')
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
