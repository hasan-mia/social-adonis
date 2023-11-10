import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'payments'

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
      table.string('card_number')
      table.string('card_holder_name')
      table.string('expiration_date')
      table.string('cvv')

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
