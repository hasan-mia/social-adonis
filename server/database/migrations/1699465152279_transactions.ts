import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('uid').unique()
      table.integer('user_id').unsigned().references('uid').inTable('users')
      table.integer('order_code').unsigned().references('uid').inTable('orders')
      table.integer('payment_method_id').unsigned().references('uid').inTable('payments')
      table.timestamp('transaction_date').notNullable()
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
