import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

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
        .uuid('category_id')
        .references('uuid')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('title').notNullable()
      table.string('slug')
      table.integer('product_type').defaultTo(0) // 0 -> physical product, 1-> digital product
      table.text('description').notNullable()
      table.double('price').notNullable()
      table.integer('stock').notNullable().defaultTo(0)
      table.double('discount').nullable()
      table.integer('discount_type').defaultTo(0) // 0 -> amount , 1-> percentange
      table.json('discount_duration').nullable()
      table.json('size').nullable()
      table.json('color').nullable()

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
