import {
  BaseModel,
  BelongsTo,
  HasMany,
  beforeCreate,
  belongsTo,
  column,
  hasMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'

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

  // Add this method to generate uuid before creating a category
  @beforeCreate()
  public static async generateUuid(category: Category) {
    category.uuid = uuidv4()
  }
}
