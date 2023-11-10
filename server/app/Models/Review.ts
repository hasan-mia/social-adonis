import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Product from './Product'
import User from './User'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public uuid: string

  @column()
  public userId: string

  @belongsTo(() => User, { foreignKey: 'userId' })
  public user: BelongsTo<typeof User>

  @column()
  public productId: string

  @belongsTo(() => Product, { foreignKey: 'productId' })
  public product: BelongsTo<typeof Product>

  @column()
  public rating: number

  @column()
  public notifications: any // Adjust the type according to your Notification model

  @column()
  public reviewText: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
