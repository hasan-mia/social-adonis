import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Product from './Product'
import User from './User'

export default class Order extends BaseModel {
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

  @column.dateTime({ autoCreate: true })
  public orderDate: DateTime

  @column()
  public totalAmount: number

  @column()
  public orderStatus: number

  @column()
  public notifications: any

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
