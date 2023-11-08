import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('uid').unique()
      table.integer('post_id').unsigned().references('uid').inTable('posts')
      table.integer('category_id').unsigned().references('uid').inTable('categories')
      table.string('title')
      table.string('slug')
      table.text('description')
      table.double('price')
      table.integer('stock')
      table.double('discount')
      table.integer('discount_type')
      table.jsonb('discount_duration')
      table.jsonb('size').nullable()
      table.jsonb('color').nullable()

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
