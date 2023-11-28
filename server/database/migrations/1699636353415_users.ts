import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('uuid').unique()
      table.string('username').nullable().unique()
      table.string('email').unique()
      table.string('password')
      table.integer('type').defaultTo(0) // 0 -> user, 1 -> vendor, 2-> editor, 3->admin, 4-> uper admin
      table.string('remember_me_token').nullable()
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
