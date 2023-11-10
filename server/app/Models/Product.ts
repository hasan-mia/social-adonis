import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Category from './Category'
import Post from './Post'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public postId: string

  @belongsTo(() => Post, { foreignKey: 'postId' })
  public post: BelongsTo<typeof Post>

  @column()
  public categoryId: string

  @belongsTo(() => Category, { foreignKey: 'categoryId' })
  public category: BelongsTo<typeof Category>

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public stock: number

  @column()
  public discount: number

  @column()
  public discountType: number

  @column()
  public discountDuration: any[] // Adjust the type according to your requirements

  @column()
  public size: any[] // Adjust the type according to your requirements

  @column()
  public color: any[] // Adjust the type according to your requirements

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
