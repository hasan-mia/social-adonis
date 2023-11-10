import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('uuid').unique()
      table
        .uuid('user_id')
        .references('uuid')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('order_code')
        .references('uuid')
        .inTable('orders')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .uuid('payment_method_id')
        .references('uuid')
        .inTable('payments')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamp('transaction_date').defaultTo(this.now())
      table.double('amount')
      table.string('status')

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
