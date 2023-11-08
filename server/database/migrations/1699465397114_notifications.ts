import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notifications'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('uid').unique()
      table.integer('user_id').unsigned().references('uid').inTable('users')
      table.integer('notification_type')
      table.integer('post_id').unsigned().references('uid').inTable('posts')
      table.integer('comment_id').unsigned().references('uid').inTable('comments')
      table.integer('reply_id').unsigned().references('uid').inTable('replies')
      table.integer('chat_id').unsigned().references('uid').inTable('chats')
      table.integer('order_id').unsigned().references('uid').inTable('orders')
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
