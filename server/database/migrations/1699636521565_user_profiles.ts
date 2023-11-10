import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_profiles'

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
      table.string('first_name')
      table.string('last_name')
      table.string('phone').unique()
      table.string('birth_date')
      table.integer('relationship').defaultTo(0) // - -> single, 1 -> In a relation, 2-> married, 3-> divorced
      table.boolean('verify').defaultTo(false)
      table.boolean('active').defaultTo(true)
      table.boolean('online').defaultTo(false)

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
