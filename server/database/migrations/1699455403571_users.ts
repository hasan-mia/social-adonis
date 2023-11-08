import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('uid').unique()
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('username', 50).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('phone', 50).unique()
      table.string('password', 180).notNullable()
      table.string('birth_date', 255).nullable()
      table.integer('relationship').nullable()
      table.integer('role_id').unsigned().references('uid').inTable('roles')
      table.boolean('varify').defaultTo(false)
      table.boolean('active').defaultTo(true)
      table.boolean('online').defaultTo(false)
      table.string('remember_me_token').nullable()
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
