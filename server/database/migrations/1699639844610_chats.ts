import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'chats'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('uuid').unique()
      table.integer('type')
      table
        .uuid('conversation_id')
        .references('uuid')
        .inTable('conversations')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('sender_id')
        .references('uuid')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.text('message')
      table.string('file')
      // Assuming 'notifications' and 'attachments' are related entities
      table.json('notifications')
      table.string('attachments')

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
