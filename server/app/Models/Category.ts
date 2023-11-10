import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public parentId: string

  @belongsTo(() => Category, { foreignKey: 'parentId' })
  public parent: BelongsTo<typeof Category>

  @column()
  public name: string

  @column()
  public description: string

  @hasMany(() => Category, { foreignKey: 'parentId' })
  public children: HasMany<typeof Category>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
