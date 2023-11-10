import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'reactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('uuid').unique()
      table.string('reaction_type')
      table.json('notifications')
      table
        .uuid('post_id')
        .nullable()
        .references('uuid')
        .inTable('posts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('comment_id')
        .nullable()
        .references('uuid')
        .inTable('comments')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('reply_id')
        .nullable()
        .references('uuid')
        .inTable('replies')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('user_id')
        .references('uuid')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

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
