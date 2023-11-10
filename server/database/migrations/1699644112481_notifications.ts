import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notifications'

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
      table.integer('notification_type')
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
        .uuid('chat_id')
        .nullable()
        .references('uuid')
        .inTable('chats')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('order_id')
        .nullable()
        .references('uuid')
        .inTable('orders')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('reaction_id')
        .nullable()
        .references('uuid')
        .inTable('reactions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('follow_id')
        .nullable()
        .references('uuid')
        .inTable('follows')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.boolean('is_read').defaultTo(false)

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
